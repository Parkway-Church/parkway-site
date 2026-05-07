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
        id: 'PLhqUSkvwvUDbDEeLa2A1Iv_gdQ_IOiWkE',
        title: 'Shorts',
        description: 'A collection of inspiring short messages.'
    },
    {
        id: 'PLNHewxce_fZfJ3nmQN_uNM2ZIz7TRvUKH',
        title: 'Monthly Messages',
        description: 'Monthly messages from our Pastor.'
    }
];
