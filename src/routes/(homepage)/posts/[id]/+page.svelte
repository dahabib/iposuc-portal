<script>
    import { Calender, Feather } from '$lib/icons';
    export let data;
</script>

<svelte:head>
	<title>{`static title`}</title>
</svelte:head>

<div class="container p-6 lg:p-8 mx-auto my-14 lg:flex space-y-6 lg:space-x-8 ">
    <!-- Post -->
     {#await data.post}
        <p>Loading post...</p>
     {:then post} 
     <div class="w-full lg:w-8/12">
         <article class="prose md:prose-xl">
             <h1 class="text-green-900 dark:text-slate-300">{post.title}</h1>
             <div>
                 <div class="flex justify-between">
                     <div class="flex items-center">
                         <Feather />
                         <span class="ml-1 font-semibold">Author</span>
                     </div>
                 <div class="flex items-center">
                     <Calender />
                     <span class="ml-1 font-semibold">{post.publishedAt}</span>
                 </div>
                 </div>
             </div>
            <span class="px-2 badge-accent shadow-sm rounded-full">{post.slug}</span>

              <div class="divider"></div>

             <p class="text-green-900 dark:text-slate-300">
                 {post.content}
             </p>
         </article>

        <div class="divider"></div>

        <div class="p-3 indicator w-full">
            {#await data.comment}
                <p class="indicator-item indicator-middle indicator-center">Loading comment</p>
            {:then comment} 
                <div class="indicator-item indicator-top indicator-center">
                    <p class="font-semibold text-lg">Comments</p>
                </div>
                <div class="flex space-x-4 justify-between border-t border-slate-500">
                    <img class="w-36 h-36 bg-black rounded-md" src="" alt="">
                    <div class="flex-col p-2 space-y-2">
                        <p class="font-semibold text-green-900"></p>
                        <p class=" p-3">{comment.comment}</p>
                    </div>
                </div>
            {/await}
        </div>
     </div>
     {/await}

    <!-- Author Card -->
    <div class="lg:w-3/12">
        <div class="w-full bg-slate-600 rounded-md px-2 py-1 text-white font-semibold mb-2 text-left lg:text-center">Post by: </div>
        <figure class="flex lg:flex-col bg-slate-100 rounded-xl p-0 lg:p-8 dark:bg-slate-800 items-center">
            <img class="w-24 h-24 lg:w-48 lg:h-auto rounded-none lg:rounded-full lg:mx-auto" src="https://dummyjson.com/image/150" alt="" width="384" height="512">
            <div class="lg:pt-6 px-6 lg:p-8 text-left lg:text-center space-y-4">
                <div class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                        Sarah Dayan
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                        Staff Engineer, Algolia
                    </div>
                </div>
            </div>
        </figure>
    </div>
</div>