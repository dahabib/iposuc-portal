import { variables } from '$lib/variables';
import { error } from '@sveltejs/kit';

// update avatar
export const uploadAvatar = async (image) => {
	const apiKey = variables.img_bb_api_key;
	const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

	const buffer = await image.arrayBuffer();
	const base64Image = Buffer.from(buffer).toString('base64');

	const imgbbFormData = new URLSearchParams();
	imgbbFormData.append('image', base64Image);

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: imgbbFormData.toString()
		});

		const responseData = await response.json();

		if (!response.ok) {
			console.error(responseData);
			throw error(500, 'Image upload failed');
		}

		const imageUrl = responseData.data.url;

		// Redirect to a success page or return success status
		return { success: true, imageUrl };
	} catch (err) {
		console.error('Error uploading image:', err);
		throw error(500, 'Error uploading image');
	}
};
