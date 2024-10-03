<script>
  let posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post...', date: '2023-06-15' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post...', date: '2023-06-14' },
    { id: 3, title: 'Third Post', content: 'This is the content of the third post...', date: '2023-06-13' },
  ];
</script>

<div class="space-y-6">
  {#each posts as post}
    <div class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-xl font-semibold mb-2">{post.title}</h2>
      <p class="text-gray-600 mb-4">{post.content}</p>
      <div class="text-sm text-gray-500">Posted on {post.date}</div>
    </div>
  {/each}
</div>