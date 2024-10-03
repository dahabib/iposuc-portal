<script lang="ts">
    import Editor from '@tinymce/tinymce-svelte';
    import type { ActionData } from './$types';
    export let form: ActionData;

    let { title, tag, content, error, message } = form ?? {};
    $: ({ title, tag, content, error, message } = form ?? {
        title: '',
        tag: '',
        content: '',
        error: { field: '', message: '' },
        message: '',
    });

    // TinyMCE Editor configuration

    let conf = {
    height: 500,
    menubar: true,
    plugins: [
        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
        'insertdatetime', 'media', 'table', 'preview', 'wordcount'
    ],
    toolbar: 'undo redo | blocks | ' +
        'bold italic forecolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat',
    }
</script>

<svelte:head>
	<title>নতুন পোস্ট</title>
</svelte:head>

<div class="container mx-auto mt-16">
    <form class="w-full lg:w-8/12 m-6 flex-col space-y-4 mx-auto" method="post">
        <div class="form-control">
            <label for="title">শিরনাম</label>
            <input class=" focus:bg-green-200 focus:ring-0 rounded-md" type="text" name="title" id="title" placeholder="শিরনাম লিখুন">
        </div>

        <div class="form-control">
            <label for="tag">ট্যাগ/ধরণ বাছাই করুন</label>
            <input class="focus:bg-green-200 focus:ring-0 rounded-md" type="search" name="tag" id="tag" placeholder="ট্যাগ/ধরণ বাছাই করুন">
            
            {#if error?.field === 'tag'}
                <small>{error?.message}</small>
            {/if}
        </div>

        <div class="form-control">
            <label for="content">প্রবন্ধ/মেসেজ</label>
            <Editor
                apiKey='7azi6spilzfc7wp7wh8pnodk1einoeuyhbk7xitb89r4o1g9'
                channel='7'
                bind:value={content}
                {conf}
            />
        </div>

        <div class="form-control">
            <button class="btn btn-success text-white   " type="submit">Save</button>
        </div>
    </form>
</div>