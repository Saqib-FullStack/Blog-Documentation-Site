import { posts } from '$lib/data/posts';
import { error } from '@sveltejs/kit';

// 💡 SvelteKit ka load function: Yeh URL parameters (params) ko access karta hai
export function load({ params }) {
    // 1. URL se slug (e.g., 'sveltekit-basics') ko pakdein
    const { slug } = params;
    
    // 2. posts array mein us slug se matching post dhoondhe
    const post = posts.find(p => p.slug === slug);
    
    // 3. Agar post mil jaye, toh use page component ko bhej dein
    if (post) {
        return {
            post // yeh data +page.svelte mein 'data' prop ke zariye jayega
        };
    }
    
    // 4. Agar post na mile, toh 404 error throw karein
    throw error(404, 'Post not found!');
}