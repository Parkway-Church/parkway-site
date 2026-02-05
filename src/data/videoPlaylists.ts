export interface Playlist {
    id: string;
    title: string;
    description?: string;
}

export const videoPlaylists: Playlist[] = [
    {
        id: 'PLNHewxce_fZdpvuZF8T5jmNN7BaMWeCyd',
        title: 'Sunday Services',
        description: 'Watch our full Sunday service replays.'
    },
    {
        id: 'PLNHewxce_fZd_456abc_placeholder1', // Placeholder
        title: 'Worship Series',
        description: 'A collection of our favorite worship moments.'
    },
    {
        id: 'PLNHewxce_fZfJ3nmQN_uNM2ZIz7TRvUKH', // Placeholder
        title: 'Monthly Messages',
        description: 'Monthly messages from our Pastor.'
    }
];
