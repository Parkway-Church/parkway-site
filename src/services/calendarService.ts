import { calendarConfig } from '../config/calendar';
import { generateGoogleCalendarLink } from '../utils/calendarUtils';
import { getEventImage } from '../config/eventImages';

// Represents the event schema expected by the UI
export interface CalendarEvent {
    id: string;
    title: string;
    date: string; // Formatted date string for display
    description: string;
    image: string;
    link: string; // The "Add to Calendar" link
    buttonText: string;
}

/**
 * Fetches the upcoming events from the configured Google Calendar.
 * Requires `VITE_GOOGLE_CALENDAR_API_KEY` to be set in `.env`.
 */
export const fetchUpcomingEvents = async (maxResults: number = 3, targetCalendarId?: string, offsetDays: number = 0): Promise<CalendarEvent[]> => {
    const apiKey = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
    
    if (!apiKey) {
        console.warn('Google Calendar API Key is missing. Please add VITE_GOOGLE_CALENDAR_API_KEY to your .env file.');
        return [];
    }

    const activeCalendarId = targetCalendarId || calendarConfig.calendarId;
    
    // Set timeMin to offsetDays from now (to optionally skip immediate events)
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + offsetDays);
    const timeMin = futureDate.toISOString();
    
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(activeCalendarId)}/events?key=${apiKey}&timeMin=${timeMin}&maxResults=${maxResults}&singleEvents=true&orderBy=startTime`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Calendar API returned status ${response.status}`);
        }

        const data = await response.json();
        const events = data.items || [];

        return events.map((event: any): CalendarEvent => {
            const startDateTime = event.start.dateTime || event.start.date;
            const endDateTime = event.end?.dateTime || event.end?.date;
            
            let formattedDate = '';
            
            if (event.start.date) {
                // It's an all-day event in 'YYYY-MM-DD' format.
                // Parsing directly with 'new Date(string)' assumes UTC, shifting it back a day when converting to local time.
                const [year, month, day] = event.start.date.split('-');
                const localDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
                formattedDate = localDate.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                }).toUpperCase();
            } else if (event.start.dateTime) {
                // It's a timed event with its own timezone offset.
                const startDateObj = new Date(event.start.dateTime);
                formattedDate = startDateObj.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                }).toUpperCase();
            }

            // Extract the first image from the HTML description, if it exists
            const descriptionHtml = event.description || '';
            const imgMatch = descriptionHtml.match(/<img[^>]+src="([^">]+)"/);
            const htmlImageUrl = (imgMatch && imgMatch[1]) ? imgMatch[1] : null;

            const imageUrl = getEventImage(event.summary, htmlImageUrl);

            const cleanDescription = descriptionHtml.replace(/<[^>]*>?/gm, '').trim();
            const truncatedDesc = cleanDescription.length > 150 
                ? cleanDescription.substring(0, 150) + '...' 
                : cleanDescription;

            const googleCalendarLink = generateGoogleCalendarLink({
                title: event.summary,
                description: descriptionHtml,
                startDate: startDateTime,
                endDate: endDateTime,
                location: event.location
            });

            return {
                id: event.id,
                title: event.summary,
                date: formattedDate,
                description: truncatedDesc,
                image: imageUrl,
                link: googleCalendarLink,
                buttonText: 'Add to Calendar'
            };
        });
    } catch (error) {
        console.error('Failed to fetch calendar events:', error);
        return [];
    }
};
