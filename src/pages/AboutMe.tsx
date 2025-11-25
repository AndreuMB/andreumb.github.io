import { Trans } from "@lingui/react/macro";
import portrait from "/src/assets/portrait.jpg";
import TabPanelJobs from "../components/TabPanelJobs";

interface AboutMeProps {
  onShowPortrait?: () => void;
}

function AboutMe({ onShowPortrait }: AboutMeProps) {
  return (
    <>
      <header className="flex items-center border-b-2 border-secondary w-auto h-44 p-6 gap-10 text-lg">
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
      <div className="p-5 about-me-body flex flex-col gap-4">
        <Trans>
          Hey! I'm Andreu, a web developer and a game developer in process!
        </Trans>
        <div>
          <TabPanelJobs></TabPanelJobs>
          <div>
            <Trans>Do you like what you read? send me an email at</Trans>{" "}
            <a href="mailto:andreuolleria@gmail.com" rel="email">
              andreuolleria@gmail.com
            </a>
            ! :)
          </div>
        </div>

        <div>
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
        </div>

        <div>
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
        </div>

        <div>
          <h3 className="font-mono font-semibold text-xl">
            <Trans>LANGUAGE PROFICIENCY</Trans>
          </h3>
          <div className="my-2 border-l-4 pl-3 border-gray-lightest">
            <p>
              <Trans>I have native fluency in</Trans>{" "}
              <span>
                <Trans>Spanish</Trans>
              </span>{" "}
              <Trans>and</Trans>{" "}
              <span>
                <Trans>Catalan (Valencià)</Trans>
              </span>
              , <Trans>and can speak in conversational</Trans>{" "}
              <span>
                <Trans>English</Trans>
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
