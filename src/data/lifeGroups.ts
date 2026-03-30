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
        bio: "La Merienda es un grupo de personas imperfectas que se reúnen semanalmente en el salón 3 para dialogar de la palabra de Dios, tener conversaciones sobre las realidades de la vida, y oramos los unos por los otros y nunca falta una taza de café en la mano. Estás invitado a compartir con nosotros, te esperamos.",
        imageUrl: "/grupo-de-vida-espanol.png"
    },
    {
        id: '2',
        name: "Love Is The Way",
        day: "Thursday",
        time: "7:00 PM",
        location: "Parkway Christian Church Room 3",
        bio: "Our Love Is The Way Life Group is a place where we learn to love the way Jesus loved. We meet weekly in Room 3 and are challenged by the Word to think outside of our comfort zone and grow together.",
        imageUrl: "/life-group-logo.jpg"
    },
    {
        id: '3',
        name: "Ironmen of Parkway",
        day: "Bi-Weekly Saturdays",
        time: "8:00 AM",
        location: "Parkway Christian Church",
        bio: "A space for men to grow in their faith, engage God’s Word, and support one another in living out their calling in today’s world. We meet biweekly on Saturdays in Room 3.",
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: '4',
        name: "Ladies of Parkway",
        day: "Monthly Fridays",
        time: "6:30 PM",
        location: "Parkway Christian Church",
        bio: "A time for ladies to get together, study the word of God, and encourage one another and grow in our faith.",
        imageUrl: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1000"
    }
];
