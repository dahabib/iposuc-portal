<script>
  import { formatExcerept } from "$lib/helper/postHelper";
    export let post
    import { Calender, Feather } from "$lib/icons"
    const {id, title, content, publishedAt} = post;
</script>

<div class="card card-compact bg-base-100 shadow-xl p-6">
    <h2 class="card-title">{title}</h2>
    <div class="flex justify-between">
        <div class="flex items-center">
            <Feather />
            <span class="ml-1 font-semibold">Author Name</span>
        </div>
        <div class="flex items-center">
            <Calender />
            <span class="ml-1 font-semibold">{publishedAt}</span>
        </div>
    </div>
    <div class="divider"></div>
    <p>{formatExcerept(content)}</p>
    <!-- <div class="card-body">
    </div> -->
    <div class="card-actions justify-end">
        <a href={`/post/${id}`} data-sveltekit-preload-data>
            <button class="btn btn-link text-green-700">Details</button>
        </a>
    </div>
</div>