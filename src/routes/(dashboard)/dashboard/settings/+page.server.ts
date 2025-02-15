import { uploadAvatar } from '$lib/services/avatarService';
import { updateAvatar } from '$lib/services/users';
import type { Actions } from './$types';

export const actions: Actions = {
	uploadAvatar: async ({ request }) => {
		const data = (await request.formData()) as FormData;
		const file = data.get('avatar') as File;
		const userId = data.get('userId') as string;

		const upload = await uploadAvatar(file);

		let uploadResponse;

		if (upload.success) {
			const update = await updateAvatar(userId, upload.imageUrl);
			uploadResponse = await update.json();
		}

		return Response.json(
			{ data: uploadResponse },
			{ status: 200, statusText: 'Profile picture updated!' }
		);
	}
} satisfies Actions;
