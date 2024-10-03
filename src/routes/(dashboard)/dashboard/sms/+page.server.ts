import {
  checkBalance,
  getBalance,
  sendSingleSms,
} from "$lib/services/smsService";
import type { Actions } from "./$types";
import { redirect, fail } from "@sveltejs/kit";

export const actions: Actions = {
  sendSms: async ({ request }) => {
    const data = await request.formData();
    const mobile = data.get("mobile") as string;
    const msg = data.get("msg") as string;

    console.log(mobile, msg);

    // Ensure mobile and msg are provided
    if (!mobile || !msg) {
      return fail(400, { message: "Mobile number and text are required." });
    }

    const response = await sendSingleSms(mobile, msg);

    console.log("SMS Response: ", response);

    throw redirect(302, "/dashboard");
  },

  checkSmsBalance: async () => {
    const response = await getBalance();

    return Response.json(response);
    console.log("SMS Response: ", response);
    // Check if user exists
    // if (!response) {
    //   return fail(404, {
    //     incorrect: true,
    //     message: "No user found with this mobile number.",
    //   });
    // }

    // Redirect to dashboard after successful login
    throw redirect(302, "/dashboard");
  },
};
