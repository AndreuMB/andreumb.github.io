import { Trans } from "@lingui/react/macro";
import "./Contact.css";

function Contact() {
  return (
    <div className="p-5 items-center gap-3 flex flex-col h-full justify-center text-center">
      <h1>
        <Trans>Connect with me!</Trans>
      </h1>
      <div className="marquee text-9xl bg-secondary">
        <p className="bg-secondary">
          <Trans>
            SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO!
            SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO!
          </Trans>
        </p>
      </div>
      <div className="space-y-2">
        <p>
          <Trans>
            I have a few years of working experience developing web apps and
            games and I'm still having a lot of fun programming. I'm excited to
            keep learning and building new things!
          </Trans>
        </p>
        <p>
          <Trans>
            Don't be shy, feel free to reach out, I will be glad to answer.
          </Trans>
        </p>
        <p>
          <Trans>You can send me an email at</Trans>{" "}
          <span className="text-secondary">andreuolleria@gmail.com</span>.
        </p>
      </div>

      <a
        className="text-primary!"
        href="mailto:andreuolleria@gmail.com"
        rel="email"
      >
        <button className="bg-secondary! hover:bg-terciary!">
          <Trans>Email me!</Trans>
        </button>
      </a>
    </div>
  );
}

export default Contact;
