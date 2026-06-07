export interface Elder {
    id: string;
    name: string;
    quote: string;
    imageUrl?: string; // Optional, will display clean placeholder if not provided
}

export const eldersData: Elder[] = [
    {
        id: '1',
        name: 'Elder Name 1',
        quote: '"This is a placeholder quote for the first member of the Circle of Elders. Once provided, the actual quote will be displayed here."',
        imageUrl: '' // Will use fallback placeholder styling
    },
    {
        id: '2',
        name: 'Elder Name 2',
        quote: '"This is a placeholder quote for the second member of the Circle of Elders. Once provided, the actual quote will be displayed here."',
        imageUrl: ''
    },
    {
        id: '3',
        name: 'Elder Name 3',
        quote: '"This is a placeholder quote for the third member of the Circle of Elders. Once provided, the actual quote will be displayed here."',
        imageUrl: ''
    },
    {
        id: '4',
        name: 'Elder Name 4',
        quote: '"This is a placeholder quote for the fourth member of the Circle of Elders. Once provided, the actual quote will be displayed here."',
        imageUrl: ''
    }
];
