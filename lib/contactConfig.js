export const contactFormConfig = {
  // Set to null unless a real backend/email service is configured.
  //
  // To enable submissions, configure an endpoint that accepts a JSON POST body:
  //   { name, email, subject, message }
  // and returns a JSON response with a `success` boolean.
  //
  // Example (Formspree/other service):
  //   endpoint: "https://formspree.io/f/yourFormId"
  //
  // When null, the form stays purely local and does not attempt to send email.
  endpoint: null,
  method: "POST",
};
