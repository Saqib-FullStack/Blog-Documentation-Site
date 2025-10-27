<script>
    // Step 3b: Data import karein
    import { posts } from '$lib/data/posts.js';
</script>

<h1 class="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-2">All Blog Posts</h1>

<div class="space-y-6">
    {#each posts as post}
        <a href={`/blog/${post.slug}`} class="block p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 class="text-3xl font-bold text-indigo-700 mb-2 hover:underline">
                {post.title}
            </h2>
            <p class="text-gray-600 mb-4">{post.summary}</p>
            <div class="flex justify-between items-center text-sm text-gray-500">
                <span>
                    **Date:** {post.date}
                </span>
                <span class="font-semibold text-indigo-500">
                    Read Post →
                </span>
            </div>
        </a>
    {/each}
</div>