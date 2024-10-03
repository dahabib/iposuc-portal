import { variables } from "$lib/variables";

// Send Single SMS
export const sendSingleSms = async (mobile: string, msg: string) => {
  const url = "http://bulksmsbd.net/api/smsapi";
  const apiKey = variables.bulk_sms_api_key;
  const data = {
    api_key: apiKey,
    senderid: "8809604902431",
    number: mobile,
    message: msg,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Error fetching balance:", error);
  }
};

// Check SMS balance
export const getBalance = async () => {
  const url = "http://bulksmsbd.net/api/getBalanceApi";
  const apiKey = variables.bulk_sms_api_key;
  const data = {
    api_key: apiKey,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data), // Format as URL-encoded form data
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Error fetching balance:", error);
  }
};