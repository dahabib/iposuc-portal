<script lang="ts">
    export let users;
</script>

<h2 class="text-2xl font-semibold mb-4">Users</h2>
<div class="overflow-x-auto">
    <table class="min-w-full bg-white">
    <thead>
        <tr>
        <th class="py-2 px-4 border-b">ID</th>
        <th class="py-2 px-4 border-b">Name</th>
        <th class="py-2 px-4 border-b">Email</th>
        <th class="py-2 px-4 border-b">Join Date</th>
        </tr>
    </thead>
    <tbody>
        {#each users as user}
        <tr>
            <td class="py-2 px-4 border-b">{user.id}</td>
            <td class="py-2 px-4 border-b">{user.name}</td>
            <td class="py-2 px-4 border-b">{user.email}</td>
            <td class="py-2 px-4 border-b">{user.joinDate}</td>
        </tr>
        {/each}
    </tbody>
    </table>
</div>