import { variables } from '$lib/variables';

// Send Single SMS
export const sendSingleSms = async (mobile: string, msg: string) => {
	const url = 'http://bulksmsbd.net/api/smsapi';
	const apiKey = variables.bulk_sms_api_key;
	const data = {
		api_key: apiKey,
		senderid: '8809604902431',
		number: mobile,
		message: msg
	};

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams(data)
		});

		const result = await response.json();

		if (result.response_code !== 202) {
			throw new Error(`HTTP error! status: ${result.status}`);
		}

		const { response_code, success_message, error_message } = result;

		return { response_code, success_message, error_message };
	} catch (error) {
		console.error('Error fetching balance:', error);
	}
};

// Check SMS balance
export const checkBalance = async () => {
	const apiKey = variables.bulk_sms_api_key;
	const url = 'http://bulksmsbd.net/api/getBalanceApi?api_key=';

	try {
		const response = await fetch(url + apiKey);
		const data = await response.json();

		if (data.response_code !== 202) {
			throw new Error(`HTTP error! status: ${data.status}`);
		}

		const balance = data.balance;
		return balance;
	} catch (error) {
		console.error('Error fetching balance:', error);
	}
};
