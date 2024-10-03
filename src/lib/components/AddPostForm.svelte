<script>
  let title = '';
  let tag = '';
  let audience = '';
  let content = '';

  const audienceOptions = ['Public', 'Admin'];

  function handleSubmit() {
    // Here you would typically send the form data to your backend
    console.log({ title, tag, audience, content });
    // Reset form after submission
    title = '';
    tag = '';
    audience = '';
    content = '';
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-4">
  <div>
    <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
    <input
      type="text"
      id="title"
      bind:value={title}
      required
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    />
  </div>

  <div>
    <label for="tag" class="block text-sm font-medium text-gray-700">Tag/Category</label>
    <input
      type="text"
      id="tag"
      bind:value={tag}
      required
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    />
  </div>

  <div>
    <label for="audience" class="block text-sm font-medium text-gray-700">Audience</label>
    <select
      id="audience"
      bind:value={audience}
      required
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    >
      <option value="">Select an audience</option>
      {#each audienceOptions as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
  </div>

  <div>
    <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
    <textarea
      id="content"
      bind:value={content}
      required
      rows="5"
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    ></textarea>
  </div>

  <div>
    <button
      type="submit"
      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Add Post
    </button>
  </div>
</form>