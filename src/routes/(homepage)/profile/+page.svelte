<script lang="ts">
  export let data: { user: { id: string, mobile: string, role: string, name: string } | null };
</script>

{#if data.user}

<div class="my-20 ">
  <p>Welcome, {data.user.name}!</p>
  <p>Your role is: {data.user.role}</p>
</div>
  {:else}

  <div class="container flex-col items-center">
    <p>Please log in.</p>
    <!-- svelte-ignore a11y-no-interactive-element-to-noninteractive-role -->
    <a role="banner" class="btn btn-link" href="/login">Login</a>
  </div>
{/if}
