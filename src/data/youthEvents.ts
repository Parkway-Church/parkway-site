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
        title: "YTH CONNECT",
        description: "Real conversations. Real Faith. Real Community",
        date: "SUNDAYS",
        image: "/images/park_youth/yth_connect.jpg",
        link: "https://www.facebook.com/events",
        buttonText: "MORE INFO"
    },
    {
        id: 3,
        title: "YOUTH RETREAT",
        description: "Encounter God in a powerful way. Games - Worship - Bonfires - Late-night laughs - Life-changing moments",
        date: "SEPT 4-7",
        image: "/images/park_youth/youth_retreat.png",
        link: "https://www.facebook.com/events",
        buttonText: "GET DETAILS"
    }
];
