<script>
    import Dropzone from '$lib/components/Dropzone.svelte';
    import '../../app.css'; // Tailwind import
</script>

<svelte:head>
    <title>Zip Flattener | JSS Originals</title>
    <meta name="description" content="Flatten your ZIP directory structure into a single folder" />
</svelte:head>

<main class="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans antialiased selection:bg-blue-100">
    <nav class="h-16 flex items-center justify-between px-6 lg:px-12 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-xs">JSS</span>
            </div>
            <span class="font-semibold tracking-tight text-lg">Zip Flattener</span>
        </div>
        <div class="hidden md:flex gap-6 text-sm font-medium text-gray-500">
            <a href="/" class="hover:text-black transition-colors">Tools</a>
            <a href="/" class="hover:text-black transition-colors">Docs</a>
            <a href="/" class="hover:text-black transition-colors">About</a>
        </div>
    </nav>

    <section class="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Unfold the mess. <br /> Flatten your ZIPs.
        </h1>
        <p class="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Convert complex folder hierarchies into a single, clean directory with path-preserving filenames. Fast, local, and secure.
        </p>

        <div class="mt-8">
            <Dropzone />
        </div>
    </section>

    <section class="bg-white py-20 border-t border-gray-100">
        <div class="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            <div class="space-y-3">
                <div class="text-blue-600 text-2xl font-bold">01</div>
                <h4 class="font-bold text-lg">Path Encoding</h4>
                <p class="text-gray-500 text-sm">Folders are converted to <code class="bg-gray-100 px-1 rounded">--</code> delimiters, preserving your structure in the name.</p>
            </div>
            <div class="space-y-3">
                <div class="text-blue-600 text-2xl font-bold">02</div>
                <h4 class="font-bold text-lg">Zero Server Uploads</h4>
                <p class="text-gray-500 text-sm">Everything happens in your browser. Your files never touch a server, keeping your data private.</p>
            </div>
            <div class="space-y-3">
                <div class="text-blue-600 text-2xl font-bold">03</div>
                <h4 class="font-bold text-lg">Developer Ready</h4>
                <p class="text-gray-500 text-sm">Perfect for systems that only support flat file uploads or legacy data migrations.</p>
            </div>
        </div>
    </section>

    <footer class="py-12 border-t border-gray-100 text-center text-gray-400 text-sm">
        <p>© 2026 JSS Originals. Built for speed.</p>
    </footer>
</main>

<style>
    /* CSS for custom fonts or animations */
</style>
