<script lang="ts">
    export let comments;
</script>

<h2 class="text-2xl font-semibold mb-4">Comments</h2>
<div class="overflow-x-auto">
    <table class="min-w-full bg-white">
        <thead>
            <tr>
            <th class="py-2 px-4 border-b">ID</th>
            <th class="py-2 px-4 border-b">Post ID</th>
            <th class="py-2 px-4 border-b">Author</th>
            <th class="py-2 px-4 border-b">Content</th>
            <th class="py-2 px-4 border-b">Date</th>
            </tr>
        </thead>
        <tbody>
            {#each comments as comment}
            <tr>
                <td class="py-2 px-4 border-b">{comment.id}</td>
                <td class="py-2 px-4 border-b">{comment.postId}</td>
                <td class="py-2 px-4 border-b">{comment.author}</td>
                <td class="py-2 px-4 border-b">{comment.content}</td>
                <td class="py-2 px-4 border-b">{comment.date}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>