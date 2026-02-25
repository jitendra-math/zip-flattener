<script>
    import { flattenZip } from '$lib/utils/zipHandler';
    
    let isDragging = false;
    let processing = false;
    let status = ''; // 'success', 'error', or ''

    const handleFile = async (file) => {
        if (!file.name.endsWith('.zip')) {
            status = 'error';
            alert("Bhai, sirf .zip file allowed hai!");
            return;
        }

        processing = true;
        status = '';
        
        const result = await flattenZip(file);
        
        if (result.success) {
            status = 'success';
        } else {
            status = 'error';
        }
        processing = false;
    };

    const onDrop = (e) => {
        isDragging = false;
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
    };

    const onFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) handleFile(file);
    };
</script>

<div 
    class="relative group w-full max-w-2xl mx-auto p-12 border-2 border-dashed rounded-3xl transition-all duration-300 flex flex-col items-center justify-center
    {isDragging ? 'border-blue-500 bg-blue-50/50 scale-[1.02]' : 'border-gray-200 bg-white hover:border-gray-300'}"
    on:dragover|preventDefault={() => isDragging = true}
    on:dragleave={() => isDragging = false}
    on:drop|preventDefault={onDrop}
>
    <input 
        type="file" 
        accept=".zip" 
        class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        on:change={onFileSelect}
        disabled={processing}
    />

    {#if processing}
        <div class="text-center animate-pulse">
            <div class="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p class="text-lg font-medium text-gray-700">Flattening your ZIP... Hold on!</p>
        </div>
    {:else}
        <div class="text-center">
            <div class="mb-4 text-4xl">📦</div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
                Drop your ZIP here
            </h3>
            <p class="text-gray-500">or click to browse from your computer</p>
        </div>
    {/if}

    {#if status === 'success'}
        <p class="mt-4 text-green-600 font-medium">✨ Done! Check your downloads.</p>
    {:else if status === 'error'}
        <p class="mt-4 text-red-600 font-medium">❌ Something went wrong. Try again.</p>
    {/if}
</div>

<style>
    /* Premium glass-morphism effects could go here if needed */
</style>
