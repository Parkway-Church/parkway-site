export interface PhotoGallery {
    id: string;
    title: string;
    coverImage: string;
    googlePhotosUrl: string;
}

export const photoGalleries: PhotoGallery[] = [
    {
        id: 'gallery-1',
        title: 'VBS 2025',
        coverImage: '/images/vbs-main.jpg',
        googlePhotosUrl: 'https://photos.app.goo.gl/Xe9BjmSw6rCG1YNK9'
    }
];
