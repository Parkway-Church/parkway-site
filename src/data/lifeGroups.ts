export interface LifeGroup {
    id: string;
    name: string;
    day: string;
    time: string;
    location: string;
    bio: string;
    imageUrl: string;
}

export const lifeGroupsData: LifeGroup[] = [
    {
        id: '1',
        name: "Young Adults",
        day: "Tuesdays",
        time: "7:00 PM",
        location: "The Coffee Shop",
        bio: "A community of young adults (18-30ish) navigating life, faith, and adulthood together. We dive deep into scripture, share honest conversations, and support each other through the ups and downs of life.",
        imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: '2',
        name: "Men's Breakfast",
        day: "Saturdays",
        time: "8:00 AM",
        location: "Church Fellowship Hall",
        bio: "Start your weekend with bacon, coffee, and brotherhood. We gather to sharpen one another, discuss biblical manhood, and pray for our families and community. Open to men of all ages.",
        imageUrl: "https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: '3',
        name: "MomCo (Moms Community)",
        day: "Wednesdays",
        time: "9:30 AM",
        location: "Kids Wing",
        bio: "Being a mom is hard, but you don't have to do it alone. Join other moms for encouragement, practical teaching, and a hot breakfast while your kids are cared for in our childcare program.",
        imageUrl: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: '4',
        name: "The Bible Project Study",
        day: "Thursdays",
        time: "6:30 PM",
        location: "Online (Zoom)",
        bio: "A deep dive into the themes and books of the Bible using resources from The Bible Project. perfect for anyone who wants to understand the context and narrative of scripture better.",
        imageUrl: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
];
