<script>
    import '../app.css';
    import favicon from '$lib/assets/favicon.svg';
    import { page } from '$app/stores'; 
    
    // 💡 Svelte 5 Syntax: Layout/Component content ko render karne ke liye
    // aapko $props() se 'children' prop leni hogi.
    let { children } = $props(); 
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<header class="bg-white shadow-md p-4 sticky top-0 z-10">
    <div class="max-w-4xl mx-auto flex justify-between items-center">
        <a href="/" class="text-2xl font-bold text-indigo-600">Blog Pro</a>
        <nav>
            <a 
                href="/blog" 
                class="ml-4 font-medium"
                class:text-indigo-600={$page.url.pathname.startsWith('/blog')}
            >
                All Post
            </a>
        </nav>
    </div>
</header>

<main class="min-h-screen max-w-4xl mx-auto p-6">
    {@render children?.()} 
</main>

<footer class="bg-gray-800 text-white p-6 mt-10">
    <div class="max-w-4xl mx-auto text-center">
        <p>&copy; 2025 SvelteKit Blog. All rights reserved.</p>
    </div>
</footer>