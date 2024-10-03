<script>
  export let posts;
</script>

<div class="overflow-x-auto">
  <table class="min-w-full bg-white">
    <thead>
      <tr>
        <th class="py-2 px-4 border-b">ID</th>
        <th class="py-2 px-4 border-b">Title</th>
        <th class="py-2 px-4 border-b">Author</th>
        <th class="py-2 px-4 border-b">Date</th>
        <th class="py-2 px-4 border-b">Status</th>
        <th class="py-2 px-4 border-b">Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each posts as post}
        <tr>
          <td class="py-2 px-4 border-b">{post.id}</td>
          <td class="py-2 px-4 border-b">{post.title}</td>
          <td class="py-2 px-4 border-b">{post.author}</td>
          <td class="py-2 px-4 border-b">{post.date}</td>
          <td class="py-2 px-4 border-b">{post.status}</td>
          <td class="py-2 px-4 border-b">
            <button class="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
            <button class="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
