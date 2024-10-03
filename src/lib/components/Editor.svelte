<script>
  import {TINYMCE_API_KEY} from "$env/static/private";
import Editor from '@tinymce/tinymce-svelte';

let conf = {
  height: 500,
  menubar: false,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
  ],
  toolbar: 'undo redo | blocks | ' +
    'bold italic forecolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
}
</script>
<main>
  <Editor
    licenseKey={TINYMCE_API_KEY}
    scriptSrc='tinymce/tinymce.min.js'
    value="This is initial text."
    {conf}
  />
</main>