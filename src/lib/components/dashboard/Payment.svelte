<script lang="ts">
    export let payments;
</script>

<h2 class="text-2xl font-semibold mb-4">Payments</h2>
<div class="overflow-x-auto">
    <table class="min-w-full bg-white">
    <thead>
        <tr>
        <th class="py-2 px-4 border-b">ID</th>
        <th class="py-2 px-4 border-b">User ID</th>
        <th class="py-2 px-4 border-b">Amount</th>
        <th class="py-2 px-4 border-b">Date</th>
        </tr>
    </thead>
    <tbody>
        {#each payments as payment}
        <tr>
            <td class="py-2 px-4 border-b">{payment.id}</td>
            <td class="py-2 px-4 border-b">{payment.userId}</td>
            <td class="py-2 px-4 border-b">${payment.amount.toFixed(2)}</td>
            <td class="py-2 px-4 border-b">{payment.date}</td>
        </tr>
        {/each}
    </tbody>
    </table>
</div>