const sendgrid = require("@sendgrid/mail");

module.exports = (req, res) => {
  const { name, email, message } = JSON.parse(req.body);
  const apiKey = process.env.SENDGRID_KEY;
  sendgrid.setApiKey(apiKey);

  const msg = {
    to: {
      name: 'Amit Friedberg"',
      email: 'amitos80@gmail.com',
    },
    from: {
      name: `${name} (ref:https://amitos80.github.io/)`,
      email: "amitos80@gmail.com",
    },
    replyTo: { name, email },
    subject: "about freelance web project  (ref:https://amitos80.github.io/)",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
  };

  sendgrid.send(msg).then(
    () => res.send("Your email has been sent successfully!"),
    error => {
      console.error(error);
      res.status(500).send(error.response);
    },
  );
};
