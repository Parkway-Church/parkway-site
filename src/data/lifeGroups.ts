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
        name: "La Merienda",
        day: "Martes",
        time: "7:00 PM",
        location: "Parkway Christian Church",
        bio: "La Merienda es un grupo de personas imperfectas que se reúnen semanalmente para dialogar de la palabra de Dios, tener conversaciones sobre las realidades de la vida, y oramos los unos por los otros y nunca falta una taza de café en la mano. Estas invitado a compartir con nosotros, te esperamos.",
        imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: '2',
        name: "Love Is The Way",
        day: "Thursday",
        time: "6:30 PM",
        location: "Parkway Christian Church Room 3",
        bio: "Our Love Is The Way Life Group is a place where we learn to love the way Jesus loved. We are challenged by the word to think outside of our comfort zone and grow together.",
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
