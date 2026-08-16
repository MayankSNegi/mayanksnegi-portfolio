import siteConfig from "../data/siteConfig";

/**
 * Submits the contact form to the FastAPI backend.
 * Throws an Error with a user-friendly message on failure.
 */
export async function submitContactForm(formData) {
  const response = await fetch(`${siteConfig.apiUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone || null,
      company: formData.company || null,
      subject: formData.subject,
      message: formData.message,
    }),
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    // no-op — some errors won't have a JSON body
  }

  if (!response.ok) {
    const detail =
      (data && data.detail) ||
      "We couldn't send your message right now. Please try again later.";
    throw new Error(detail);
  }

  return data;
}
