<script>
    // Step 4c: +page.js se bheja gaya data 'data' prop mein receive karein
    export let data;
    
    // Data.post mein hamari single post hai
    const { post } = data;
</script>

<article class="bg-white p-8 rounded-lg shadow-2xl border border-gray-100">
    <h1 class="text-5xl font-extrabold text-gray-800 mb-4">
        {post.title}
    </h1>
    <p class="text-md text-gray-500 mb-8 border-b pb-4">
        Published on **{post.date}**
    </p>

    <div class="prose max-w-none text-lg text-gray-700 leading-relaxed">
        <p>{post.content}</p>
        
        <p>This is where the detailed content of the blog post would go. SvelteKit's dynamic routing makes managing these single pages very easy.</p>
    </div>
</article>

<a href="/blog" class="mt-8 inline-block text-indigo-600 font-semibold hover:underline">
    ← Back to All Posts
</a>