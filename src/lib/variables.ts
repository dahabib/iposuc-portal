import { env } from '$env/dynamic/private';

export const variables = {
	private_key: env.JWT_SECRET,
	refresh_key: env.JWT_REFRESH_SECRET,
	bulk_sms_api_key: env.BULK_SMS_API_KEY,
	tinymce_api_key: env.TINYMCE_API_KEY
};
