import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
	const getPost = async () => {
		const res = await fetch(`https://jsonplaceholder.org/posts/${params.id}`);
		const post = await res.json();
		if (post) {
			return post;
		}
		throw error(404, 'No post found.');
	};

	const getComment = async () => {
		const res = await fetch(`https://jsonplaceholder.org/comments/${params.id}`);
		const comment = await res.json();

		if (comment) {
			return comment;
		}
		throw comment(404, 'No comment found.');
	};

	const getUser = async () => {
		const post = await getPost();
		const res = await fetch(`https://jsonplaceholder.org/users/${post.userId}`);
		const user = await res.json();
		return user;
	};

	return {
		post: getPost(),
		comment: getComment(),
		user: getUser()
	};
}
