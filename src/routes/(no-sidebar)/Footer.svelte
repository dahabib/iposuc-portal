<footer class="px-4 py-6 md:flex md:items-center md:justify-between md:py-10 2xl:px-0">
	<p class="mb-4 text-center text-sm text-gray-500 md:mb-0">
		© 2024 <a href="/" class="hover:underline" target="_blank">
			IDEA-2 Project Officer-Staff Unity Council
		</a>. All rights reserved
	</p>
	<ul class="flex flex-wrap items-center justify-center gap-6">
		{#each ['Terms', 'Licensing', 'Cookie Policy', 'Contact'] as elem}
			<li>
				<a href="/" class="text-sm font-normal text-gray-500 hover:underline dark:text-gray-400"
					>{elem}</a
				>
			</li>
		{/each}
	</ul>
</footer>
