import type { YouthEvent } from './youthEvents';

export const mainEvents: YouthEvent[] = [
    {
        id: 1,
        title: "SUNDAY SERVICE",
        description: "Join us for worship and a message.",
        date: "SUNDAYS @ 10AM",
        image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        link: "https://www.facebook.com/events",
        buttonText: "PLAN A VISIT"
    },
    {
        id: 2,
        title: "COMMUNITY OUTREACH",
        description: "Serving our local community with love.",
        date: "NOV 15",
        image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        link: "https://www.facebook.com/events",
        buttonText: "VOLUNTEER"
    },
    {
        id: 3,
        title: "WORSHIP NIGHT",
        description: "A night of prayer and praise.",
        date: "DEC 05",
        image: "https://images.unsplash.com/photo-1510590337019-5ef2d3977e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Reusing an image
        link: "https://www.facebook.com/events",
        buttonText: "LEARN MORE"
    }
];
