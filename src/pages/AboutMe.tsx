import { Trans } from "@lingui/react/macro";
import portrait from "/src/assets/portrait.jpg";

interface AboutMeProps {
  onShowPortrait?: () => void;
}

function AboutMe({ onShowPortrait }: AboutMeProps) {
  return (
    <>
      <header className="flex items-center border-b-2 w-auto h-44 p-6 gap-10 text-lg">
        <div
          onClick={onShowPortrait}
          className="relative h-full w-31 rounded-full overflow-hidden border border-secondary hover:scale-110 cursor-pointer"
        >
          <img
            src={portrait}
            alt="profile-picture"
            className="h-full w-full object-cover"
          />
          <div className="h-full w-full bg-secondary-shadow absolute left-0 top-0 pointer-events-none" />
        </div>
        <div>
          <h1 className="text-4xl">Andreu Micó</h1>
          <div className="text-sm text-terciary hover:text-terciary-light">
            <p>Web developer</p>
            <p>Wannabe game developer</p>
          </div>
        </div>
      </header>
      <div className="p-5">
        <div>
          <div className="pb-3">
            <Trans>
              Hey! I'm Andreu, a web developer and a game developer in process!
            </Trans>
          </div>
          <ul className="mt-2 pl-6 list-disc space-y-2 list *:bg-primary-light">
            <li>
              <Trans>This days I am focused on </Trans>
              <span>
                <Trans>frontend development</Trans>{" "}
              </span>
              (HTML, CSS, TypeScript, React, Tailwind, etc.).
            </li>
            <li>
              <Trans>I know my things around modern </Trans>
              <span>frameworks</span>
              <Trans> like Next.js, NestJS and Vue.js</Trans>
            </li>
            <li>
              <Trans>I've handled both </Trans>
              <span>
                SQL <Trans>and</Trans> NoSQL
              </span>{" "}
              <Trans>databases, including Firebase and Supabase.</Trans>
            </li>
            <li>
              <Trans>Comfortable using </Trans>
              <span>
                <Trans>version control</Trans>
              </span>
              <Trans>
                {" "}
                softwares like Git to keep projects smooth and organized.
              </Trans>
            </li>
          </ul>

          <div className="py-5">
            <Trans>Do you like what you see? send me an email at</Trans>{" "}
            <a href="mailto:andreuolleria@gmail.com" rel="email">
              andreuolleria@gmail.com
            </a>
            ! :)
          </div>
        </div>
        <h3 className="font-mono font-semibold text-xl">EDUCATION</h3>
        <div className="my-2 border-l-4 pl-3 border-gray-lightest">
          <p>
            <Trans>Post Degree on Game Development</Trans>
          </p>
          <span className="text-sm/6 text-gray-light">
            (<Trans>GRADUATED</Trans> IES ABASTOS 2023)
          </span>
        </div>
        <div className="my-2 border-l-4 pl-3 border-gray-lightest">
          <p>
            <Trans>Higher Education on Web Development</Trans>
          </p>
          <span className="text-sm/6 text-gray-light">
            (<Trans>GRADUATED</Trans> IES SIMARRO 2022)
          </span>
        </div>
        <h3 className="font-mono font-semibold text-xl">
          <Trans>OTHER INTERESTS</Trans> <span>(˶ᵔ ᵕ ᵔ˶)!</span>
        </h3>
        <ul className="my-2 pl-6 list-disc">
          <li>
            <Trans>Game development</Trans>
          </li>
          <li>
            <Trans>Passionate guitar player</Trans>
          </li>
          <li>
            <Trans>Drawing characters</Trans>
          </li>
          <li>
            <Trans>Volleyball</Trans>
          </li>
          <li>
            <Trans>Warframe addict</Trans>
          </li>
        </ul>
        <h3 className="font-mono font-semibold text-xl">
          <Trans>LANGUAGE PROFICIENCY</Trans>
        </h3>
        <div className="my-2 border-l-4 pl-3 border-gray-lightest">
          <p>
            <Trans>I have native fluency in</Trans>{" "}
            <span className="">
              <Trans>Spanish</Trans>
            </span>{" "}
            <Trans>and</Trans>{" "}
            <span className="">
              <Trans>Catalan (Valencià)</Trans>
            </span>
            , <Trans>and can speak in conversational</Trans>{" "}
            <span className="">
              <Trans>English</Trans>
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
