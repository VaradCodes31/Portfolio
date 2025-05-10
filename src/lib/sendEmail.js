// sendEmails.js
import emailjs from "@emailjs/browser";

// EmailJS configuration constants
const SERVICE_ID = "service_po8goel";
const TEMPLATE_ID = "template_vdqw7af";
const PUBLIC_KEY = "XfPGJe68H74Mjvb14";

// Initialize EmailJS with your public key
emailjs.init(PUBLIC_KEY);

/**
 * Send an email using EmailJS
 * @param {string} name - Sender's name
 * @param {string} email - Sender's email address
 * @param {string} message - Message content
 * @returns {Promise} - Returns the EmailJS response
 */
export const sendEmail = async (name, email, message) => {
  try {
    // Basic validation
    if (!name || !email || !message) {
      throw new Error("Missing required fields");
    }

    const templateParams = {
      name,
      email,
      message,
      time: new Date().toLocaleString(),
    };

    console.log("Sending email with params:", {
      ...templateParams,
      message: templateParams.message.substring(0, 20) + "..." // Truncate for logging
    });

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    console.log("Email sent successfully:", response.status, response.text);
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};