<!-- <script lang="ts">
  import type { PageServerData } from "./$types";
  import PostCard from "$lib/components/PostCard.svelte";
  import Loading from "$lib/components/Loading.svelte";

	export let data: PageServerData;

</script>

<div class="flex justify-between mt-16">
    {#await data.posts}
      <Loading />
    {:then posts} 
    <div class="w-[75%] space-y-6 h-screen overflow-y-scroll">
      {#each posts as post}
        <PostCard post={post} />
      {/each}
    </div>
    <div class="w-[25%] rounded-xl bg-red-100 p-6">
    <p>
      একটি শীতের সকাল
    </p>
  </div>
    {/await}
</div> -->

<script>
  import Posts from '$lib/components/Posts.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import AddPostForm from '$lib/components/AddPostForm.svelte';

  let showAddPostForm = false;

  function toggleAddPostForm() {
    showAddPostForm = !showAddPostForm;
  }
</script>

<svelte:head>
  <title>IPEA</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div class="flex flex-col md:flex-row gap-8">
    <div class="w-full md:w-4/5">
      <button
        on:click={toggleAddPostForm}
        class="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {showAddPostForm ? 'Hide Add Post Form' : 'Show Add Post Form'}
      </button>

      {#if showAddPostForm}
        <div class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Add New Post</h2>
          <AddPostForm />
        </div>
      {/if}

      <Posts />
    </div>
    <div class="w-full md:w-1/5">
      <Sidebar />
    </div>
  </div>
</div>