export const keywordImageMap: Record<string, string[]> = {
    worship: [
        "/images/event_images/worship.avif"
    ],
    youth: [
        "/images/event_images/youth.webp"
    ],
    community: [
        "/images/event_images/hearthands.avif"
    ],
    men: [
        "/images/event_images/mens.webp"
    ],
    women: [
        "/images/event_images/womens.webp"
    ],
    prayer: [
        "/images/event_images/bible.avif"
    ],
    bible: [
        "/images/event_images/bible.avif"
    ],
    service: [
        "/images/event_images/worship.avif"
    ]
};

export const defaultEventImage = "/images/event_images/worship.avif";

/**
 * Determines the best image to display based on explicit calendar attachments or title keywords.
 */
export const getEventImage = (title: string, htmlImageUrl: string | null): string => {
    // 1. Explicit calendar image from description has highest priority
    if (htmlImageUrl) {
        return htmlImageUrl;
    }

    // 2. Keyword matching
    const normalizedTitle = title.toLowerCase();

    for (const [keyword, images] of Object.entries(keywordImageMap)) {
        if (normalizedTitle.includes(keyword)) {
            // Pick a random image from the pool, or the first one if only 1 exists
            const randomIndex = Math.floor(Math.random() * images.length);
            return images[randomIndex];
        }
    }

    // 3. Global default
    return defaultEventImage;
};
