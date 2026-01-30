export interface YouthEvent {
    id: number;
    title: string;
    description: string;
    date?: string;
    image: string;
    link: string;
    buttonText?: string;
}

export const youthEvents: YouthEvent[] = [
    {
        id: 1,
        title: "SUMMER CAMP '26",
        description: "Best week of your life. Don't miss it.",
        date: "JULY 20-25",
        image: "/images/park_youth/sticker_bomb_bg.png",
        link: "https://www.facebook.com/events", // Placeholder link
        buttonText: "REGISTER NOW"
    },
    {
        id: 2,
        title: "YTH NIGHT",
        description: "Worship, Word, and After Party.",
        date: "WEDNESDAYS",
        image: "https://images.unsplash.com/photo-1510590337019-5ef2d3977e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        link: "https://www.facebook.com/events",
        buttonText: "MORE INFO"
    },
    {
        id: 3,
        title: "BEACH DAY",
        description: "Sun, Sand, and Spikball tournament.",
        date: "AUGUST 12",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        link: "https://www.facebook.com/events",
        buttonText: "GET DETAILS"
    }
];
