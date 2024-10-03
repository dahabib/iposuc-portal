import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const title = form.get("title");
    const tag = form.get("tag");
    const content = form.get("content");

    if (typeof title === "string" && typeof content === "string") {
      // Remember to obfuscate any real, personally identifiable information (PII) from logs,
      // which unauthorised personnel might have access to.
      console.log({ title, tag, content });

      // Add logic here to process the contact form.
    }

    // throw redirect(303, "/post/add-post");
  },
};
