export interface VolunteerRole {
    id: string;
    name: string; // Team Name
    role: string; // "Volunteer Team" or specific role description
    bio: string;
    imageUrl: string;
}

export const volunteersData: VolunteerRole[] = [
    {
        id: '1',
        name: "Hospitality",
        role: "Holy Grounds Cafe",
        bio: "The Holy Grounds Cafe hospitality team creates a space for fellowship after each worship service. Through food, conversation & care, we help our church family connect & build community.",
        imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: '2',
        name: "Worship & Production",
        role: "Creative Arts",
        bio: "At Parkway, worship is more than music. It’s our response to God’s love. Our worship team is made up of passionate musicians and singers who gather weekly to rehearse, grow together, and prepare our hearts for Sunday morning worship. United by our love for Christ, we serve our church and community by leading others into meaningful moments of praise, reflection, and connection through music. Whether on stage or behind the scenes, our goal is simple: to glorify God and serve others with excellence, humility, and joy. Our creative teams facilitate worship through music, audio, visuals, and lighting. If you have musical talent or technical skills (or want to learn!), we have a place for you to serve.",
        imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: '3',
        name: "Parkway Kids",
        role: "Children's Ministry",
        bio: "We have the privilege of investing in the next generation. From holding babies to teaching elementary lessons, our Kids Team helps children learn about Jesus in a safe and fun environment.",
        imageUrl: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: '4',
        name: "The Park Youth",
        role: "Student Ministry",
        bio: "Lead small groups, hang out at events, and mentor students. The Youth Team is all about building relationships and pointing students to Christ during these pivotal years.",
        imageUrl: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
];
