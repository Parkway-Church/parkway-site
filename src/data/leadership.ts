export interface Leader {
    id: string;
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
}

export const leadershipData: Leader[] = [
    {
        id: '1',
        name: "Lead Pastor Name",
        role: "Lead Pastor",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: '2',
        name: "Associate Pastor Name",
        role: "Associate Pastor",
        bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: '3',
        name: "Worship Leader Name",
        role: "Worship Pastor",
        bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: '4',
        name: "Christian Torres",
        role: "Youth Group Leader & Assistant Worship Leader",
        bio: "Christian Hernandez is passionate about equipping students with the necessary tools to live a life dedicated to Jesus. Christian loves helping students grow in their relationship with Christ and to see them share that with others. Christian is currently working to finish his Bachelor’s in Psychology. He has experience working in other youth ministries and youth programs, which have led him to commit to God’s calling for him to work with students. 1 Timothy 4:12",
        imageUrl: "/images/leadership/TorresChristian_HEIC.avif"
    }
];
