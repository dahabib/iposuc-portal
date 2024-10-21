import { env } from '$env/dynamic/private';

export const variables = {
	private_key: env.JWT_SECRET,
	refresh_key: env.JWT_REFRESH_SECRET,
	tinymce_api_key: env.TINYMCE_API_KEY,
	img_bb_api_key: env.IMG_BB_API_KEY,
	bulk_sms_api_url: env.BULK_SMS_API_URL,
	bulk_sms_api_key: env.BULK_SMS_API_KEY,
	bulk_sms_api_default_sender: env.BULK_SMS_API_DEFAULT_SENDER
};
