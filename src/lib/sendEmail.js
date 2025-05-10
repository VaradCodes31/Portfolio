// sendEmails.js
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_po8goel";
const TEMPLATE_ID = "template_vdqw7af";
const PUBLIC_KEY = "XfPGJe68H74Mjvb14";

export const sendEmail = async (name, email, message) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name,
        email,
        message,
        time: new Date().toLocaleString(),
      },
      PUBLIC_KEY
    );
    return response;
  } catch (error) {
    throw error;
  }
};
