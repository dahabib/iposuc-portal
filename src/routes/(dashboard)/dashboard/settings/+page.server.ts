import { uploadAvatar } from '$lib/services/avatarService';
import { updateAvatar } from '$lib/services/users';
import type { Actions } from './$types';

export const actions: Actions = {
	uploadAvatar: async ({ request }) => {
		const data = (await request.formData()) as FormData;
		const file = data.get('avatar') as File;
		const userId = data.get('userId') as string;

		const upload = await uploadAvatar(file);

		if (upload.success) {
			const update = await updateAvatar(userId, upload.imageUrl);
			const data = await update.json();
			console.log(data);
		}

		return { success: true };
	}
} satisfies Actions;
