function Contact() {
  return (
    <div className="p-5 items-center gap-5 flex flex-col h-full justify-center">
      <h1>Connect with me!</h1>
      <img className="h-50" src="/src/assets/profile.png" alt="email_image" />
      <p>You can send me an email at andreuolleria@gmail.com</p>
      <a
        className="text-primary!"
        href="mailto:andreuolleria@gmail.com"
        rel="email"
      >
        <button>Email me!</button>
      </a>
    </div>
  );
}

export default Contact;
