import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.org/posts");
    const data = await response.json();
    return await data;
  };

  return {
    posts: getPosts(),
  };
};
