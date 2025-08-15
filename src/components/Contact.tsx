import './Contact.css';

function Contact() {
  return (
    <div className="p-5 items-center gap-5 flex flex-col h-full justify-center text-center">
      <h1>Connect with me!</h1>
      <div className="marquee text-9xl bg-secondary">
        <p className='m-auto'>
          SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO!
        </p>
      </div>
      <div className='space-y-2'>
        <p>I have a few years of working experience developing web apps and I'm still having a lot of fun programming. I'm
          excited to keep learning and building new things!
        </p>
        <p>Don't be shy—feel free to reach out, I'd be glad to answer.</p>
        <p>You can send me an email at <span className='text-secondary'>andreuolleria@gmail.com</span>.</p>
      </div>

      <a
        className="text-primary!"
        href="mailto:andreuolleria@gmail.com"
        rel="email"
      >
        <button className="bg-secondary! hover:bg-terciary!">Email me!</button>
      </a>
    </div>
  );
}

export default Contact;
