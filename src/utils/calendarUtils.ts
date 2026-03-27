/**
 * Formats a given date to the YYYYMMDDTHHmmssZ format required by Google Calendar.
 */
const formatDateForGoogleCalendar = (date: Date): string => {
    return date.toISOString().replace(/-|:|\.\d\d\d/g, '');
};

/**
 * Generates a Google Calendar "Add to Calendar" link (action=TEMPLATE).
 */
export const generateGoogleCalendarLink = (event: {
    title: string;
    description: string;
    startDate: string;
    endDate?: string;
    location?: string;
}): string => {
    const start = new Date(event.startDate);
    
    // If there's no end date provided, assume a 1-hour duration
    const end = event.endDate 
        ? new Date(event.endDate) 
        : new Date(start.getTime() + 60 * 60 * 1000);

    const startFormatted = formatDateForGoogleCalendar(start);
    const endFormatted = formatDateForGoogleCalendar(end);

    const url = new URL('https://calendar.google.com/calendar/render');
    url.searchParams.append('action', 'TEMPLATE');
    url.searchParams.append('text', event.title);
    url.searchParams.append('dates', `${startFormatted}/${endFormatted}`);
    
    // Google Calendar template description doesn't need full HTML, just text, 
    // but passing the stripped text is cleaner. We'll pass it raw and let it handle formatting.
    if (event.description) {
        // Strip HTML tags for the text description
        const strippedDesc = event.description.replace(/<[^>]*>?/gm, '');
        url.searchParams.append('details', strippedDesc);
    }
    
    if (event.location) {
        url.searchParams.append('location', event.location);
    }

    return url.toString();
};
