<script>
  import { slide } from 'svelte/transition';
  import { clickOutside } from './clickOutside.js';

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function closeMenu() {
    isOpen = false;
  }
</script>

<div class="fixed top-24 w-52 text-right">
  <div class="relative">
    <button
      on:click={toggleMenu}
      class="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-700 focus:bg-gray-700 focus:outline-1 focus:outline-white"
    >
      Options
      <svg xmlns="http://www.w3.org/2000/svg" class="size-4 fill-white/60" viewBox="0 0 16 16">
        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
      </svg>
    </button>

    {#if isOpen}
      <div
        transition:slide="{{ duration: 100, axis: 'y' }}"
        use:clickOutside on:clickoutside={closeMenu}
        class="absolute right-0 mt-2 w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white shadow-lg focus:outline-none"
      >
        <button class="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 fill-white/30" viewBox="0 0 16 16">
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
          </svg>
          Edit
          <kbd class="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘E</kbd>
        </button>
        <button class="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 fill-white/30" viewBox="0 0 16 16">
            <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1-1-1V3zm2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3z"/>
          </svg>
          Duplicate
          <kbd class="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘D</kbd>
        </button>
        <div class="my-1 h-px bg-white/5"></div>
        <button class="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 fill-white/30" viewBox="0 0 16 16">
            <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
          </svg>
          Archive
          <kbd class="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘A</kbd>
        </button>
        <button class="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 fill-white/30" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
          Delete
          <kbd class="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘D</kbd>
        </button>
      </div>
    {/if}
  </div>
</div>

<style>
  /* Add any component-specific styles here if needed */
</style>