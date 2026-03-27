import worshipImg from '../assets/event_images/worship.avif';
import youthImg from '../assets/event_images/youth.webp';
import communityImg from '../assets/event_images/hearthands.avif';
import mensImg from '../assets/event_images/mens.webp';
import womensImg from '../assets/event_images/womens.webp';
import bibleImg from '../assets/event_images/bible.avif';
import serviceImg from '../assets/event_images/service.webp';
import lifegroupImg from '../assets/event_images/lifegroup.webp';
import grupoImg from '../assets/event_images/grupo.webp';

export const keywordImageMap: Record<string, string[]> = {
    worship: [worshipImg],
    youth: [youthImg],
    community: [communityImg],
    men: [mensImg],
    women: [womensImg],
    prayer: [bibleImg],
    bible: [bibleImg],
    service: [serviceImg],
    lifegroup: [lifegroupImg],
    grupo: [grupoImg]
};

export const defaultEventImage = serviceImg;

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
