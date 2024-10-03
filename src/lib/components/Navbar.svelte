<!-- <script>
  import ModeSwitch from "./ModeSwitch.svelte";

</script>
<nav class="fixed container shadow-lime-600 mx-auto z-50">
  <div class="navbar border-b border-b-gray-200 bg-base-100 dark:bg-gray-600 lg:rounded-bl-xl lg:rounded-br-xl">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a href="/post">পোস্ট</a></li>
        <li>
          <a href="/">পোস্ট</a>
          <ul class="p-2">
            <li><a href="/post/add-new">নতুন পোস্ট</a></li>
            <li><a href="/">এডিট পোস্ট</a></li>
          </ul>
        </li>
        <li><a href="/">Item 3</a></li>
      </ul>
    </div>
    <a href="/" class="btn btn-ghost text-xl">IPEA</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/">পোস্ট</a></li>
      <li>
        <details>
          <summary>পোস্ট</summary>
          <ul class="p-2">
            <li><a href="/post/add-post">নতুন পোস্ট</a></li>
            <li><a href="/">Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a href="/">Item 3</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <div class="px-3">
      <ModeSwitch />
    </div>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a href="/profile">Profile</a></li>
        <li><a href="/settings">Settings</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </div>
  </div>
</div>
</nav> -->

<script>
  import { Avater } from '$lib/icons';
  import Logo from '$lib/icons/logo.svelte';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let showMenu = false;
  let lastScrollY = 0;
  let showNavbar = true;
  let isInitialLoad = true;

  function toggleMenu() {
    showMenu = !showMenu;
  }

  onMount(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (isInitialLoad) {
        isInitialLoad = false;
        showNavbar = true;
      } else if (currentScrollY < lastScrollY) {
        showNavbar = true;
      } else {
        showNavbar = false;
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<nav class="bg-white shadow-md transition-all duration-300 ease-in-out {showNavbar || isInitialLoad ? 'fixed top-0' : 'fixed -top-full'} left-0 right-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex-shrink-0 flex items-center">
        <div class="w-8 h-8">
          <Logo />
        </div>
        <!-- <img class="h-8 w-auto" src="/logo.svg" alt="Logo" /> -->
      </div>
      <div class="hidden md:flex items-center space-x-4">
        <a href="/posts" class="text-gray-700 hover:text-gray-900">Posts</a>
        <a href="/notice" class="text-gray-700 hover:text-gray-900">Notice</a>
        <a href="/committee" class="text-gray-700 hover:text-gray-900">Committee</a>
      </div>
      <div class="flex items-center">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn m-1 h-8 w-8 rounded-full">
            C
            <!-- <img class="h-8 w-8 rounded-full" src="/avatar.jpg" alt="User avatar" /> -->
          </div>
          <div 
            transition:fly="{{ y: -5, duration: 300 }}"
            class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 dropdown-content menu"
            style="top: 4rem;"
          >
            <a href="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
            <a href="/settings" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
            <a href="/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

<nav class="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md z-50">
  <div class="flex justify-around">
    <a href="/posts" class="flex flex-col items-center py-2">
      <span class="text-2xl">📄</span>
      <span class="text-xs">Posts</span>
    </a>
    <a href="/add-post" class="flex flex-col items-center py-2">
      <span class="text-2xl">➕</span>
      <span class="text-xs">Add Post</span>
    </a>
    <div class="relative">
      <button on:click={toggleMenu} class="flex flex-col items-center py-2">
        <div class="w-8 h-8">
          <Avater />
        </div>
        <!-- <img class="h-8 w-8 rounded-full" src="/avatar.jpg" alt="User avatar" /> -->
        <span class="text-xs">Account</span>
      </button>
      {#if showMenu}
        <div 
          transition:fly="{{ y: 5, duration: 300 }}"
          class="absolute bottom-full right-0 mb-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
        >
          <a href="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
          <a href="/settings" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
          <a href="/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
        </div>
      {/if}
    </div>
  </div>
</nav>