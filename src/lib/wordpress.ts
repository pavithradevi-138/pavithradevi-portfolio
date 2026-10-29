
const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

export type WordPressPost = {
    id: number;
    date: string;
    slug: string;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
};

export async function getLatestPosts(): Promise<WordPressPost[]> {
    if (!WORDPRESS_API_URL) {
        throw new Error("WORDPRESS_API_URL is missing from .env.local");
    }

    const response = await fetch(
        `${WORDPRESS_API_URL}/posts?per_page=5&_fields=id,date,slug,title,excerpt`,
        { cache: "no-store" }
    );

    if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status}`);
    }

    return (await response.json()) as WordPressPost[];
}
