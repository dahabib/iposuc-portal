<script>
  let recentPosts = [
    { id: 1, title: 'Recent Post 1', date: '2023-06-15' },
    { id: 2, title: 'Recent Post 2', date: '2023-06-14' },
    { id: 3, title: 'Recent Post 3', date: '2023-06-13' },
  ];

  let notices = [
    { id: 1, title: 'Important Notice 1', date: '2023-06-15' },
    { id: 2, title: 'Important Notice 2', date: '2023-06-14' },
  ];
</script>

<div class="space-y-8">
  <div class="bg-white shadow-md rounded-lg p-6">
    <h3 class="text-lg font-semibold mb-4">Recent Posts</h3>
    <ul class="space-y-2">
      {#each recentPosts as post}
        <li>
          <a href="/post/{post.id}" class="text-blue-600 hover:underline">{post.title}</a>
          <div class="text-xs text-gray-500">{post.date}</div>
        </li>
      {/each}
    </ul>
  </div>

  <div class="bg-white shadow-md rounded-lg p-6">
    <h3 class="text-lg font-semibold mb-4">Notices</h3>
    <ul class="space-y-2">
      {#each notices as notice}
        <li>
          <a href="/notice/{notice.id}" class="text-blue-600 hover:underline">{notice.title}</a>
          <div class="text-xs text-gray-500">{notice.date}</div>
        </li>
      {/each}
    </ul>
  </div>
</div>