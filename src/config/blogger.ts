/**
 * Blogger API Configuration
 * 
 * To enable live blog posts, you need to get an API Key and your Blog ID from Google.
 * 
 * 1. Go to the Google Cloud Console (https://console.cloud.google.com/).
 * 2. Create a new project (e.g., "Parkway Website").
 * 3. Enable the "Blogger API v3".
 * 4. Go to "Credentials" and create an "API Key".
 * 5. Paste the API key below.
 * 
 * To find your Blog ID:
 * 1. Go to your Blogger dashboard.
 * 2. Look at the URL in your browser content bar.
 * 3. It will look like: https://www.blogger.com/blog/posts/1234567890123456789
 * 4. The number at the end is your Blog ID.
 */

export const bloggerConfig = {
    // Replace with your actual API Key
    apiKey: '',

    // Replace with your actual Blog ID
    blogId: '',

    // Number of posts to fetch
    maxPosts: 6
};

export interface BlogPost {
    id: string;
    published: string;
    updated: string;
    url: string;
    title: string;
    content: string;
    author: {
        displayName: string;
        image: {
            url: string;
        };
    };
}
