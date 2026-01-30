import type { YouthEvent } from '../data/youthEvents';

const FB_ACCESS_TOKEN = import.meta.env.VITE_FB_ACCESS_TOKEN;
const DEFAULT_PAGE_ID = import.meta.env.VITE_FB_PAGE_ID;

export const fetchFacebookEvents = async (pageId: string = DEFAULT_PAGE_ID): Promise<YouthEvent[]> => {
    if (!FB_ACCESS_TOKEN || !pageId) {
        console.warn(`Facebook Credentials missing for Page ID: ${pageId}. Returning mock data.`);
        // Fallback to static data if no credentials
        return [];
    }

    try {
        // Fetch events from the page
        // fields needed: name, description, start_time, cover, id
        const response = await fetch(
            `https://graph.facebook.com/v18.0/${pageId}/events?fields=id,name,description,start_time,cover,place&access_token=${FB_ACCESS_TOKEN}`
        );

        const data = await response.json();

        if (data.error) {
            console.error("Facebook API Error:", data.error);
            return [];
        }

        const events = data.data || [];
        const now = new Date();

        // 1. Filter: future events only
        const futureEvents = events.filter((event: any) => {
            const eventDate = new Date(event.start_time);
            return eventDate > now;
        });

        // 2. Sort: nearest date first
        futureEvents.sort((a: any, b: any) => {
            return new Date(a.start_time).getTime() - new Date(b.start_time).getTime();
        });

        // 3. Limit: Top 3
        const top3Events = futureEvents.slice(0, 3);

        // 4. Map to YouthEvent
        return top3Events.map((event: any) => ({
            id: event.id,
            title: event.name,
            description: event.description || "Join us for this event!",
            date: new Date(event.start_time).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase(),
            image: event.cover?.source || '/images/park_youth/sticker_bomb_bg.png', // Fallback image
            link: `https://www.facebook.com/events/${event.id}`,
            buttonText: 'VIEW EVENT'
        }));

    } catch (error) {
        console.error(`Failed to fetch Facebook events for Page ID ${pageId}:`, error);
        return [];
    }
};
