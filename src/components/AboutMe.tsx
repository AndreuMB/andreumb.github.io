import portrait from '/src/assets/portrait.jpg'

interface AboutMeProps {
  onShowPortrait?: () => void;
}

function AboutMe({ onShowPortrait }: AboutMeProps) {
  return (
    <>
      <header className="flex items-center border-b-2 w-auto h-44 p-6 gap-10 text-lg">
        <div onClick={onShowPortrait} className="relative h-full w-31 rounded-full overflow-hidden border border-secondary hover:scale-110 cursor-pointer">
          <img
            src={portrait}
            alt="profile-picture"
            className="h-full w-full object-cover"
          />
          <div
            className="h-full w-full bg-secondary-shadow absolute left-0 top-0 pointer-events-none"
          />
        </div>
        <div>
          <h1 className="text-4xl">Andreu Micó</h1>
          <div className="text-sm text-terciary hover:text-terciary-light">
            <p>Junior web developer</p>
            <p>Wannabe game developer</p>
          </div>
        </div>
      </header>
      <div className="p-5">
        <div>
          <div className="pb-3">
            Hey! I'm Andreu, a web developer and a game developer in process!
          </div>
          <ul className="mt-2 pl-6 list-disc space-y-2 list *:bg-primary-light">
            <li>
              This days I am focused on <span>frontend development</span>
              (HTML, CSS, TypeScript, React, Tailwind, etc.).
            </li>
            <li>
              I know my things around modern <span>frameworks</span> like
              Next.js, NestJS and Vue.js
            </li>
            <li>
              I've handled both <span>SQL and NoSQL</span> databases, including
              Firebase and Supabase.
            </li>
            <li>
              Comfortable using <span>version control</span> softwares like Git
              to keep projects smooth and organized.
            </li>
          </ul>

          <div className="py-5">
            Do you like what you see? send me an email at{' '}
            <a href="mailto:andreuolleria@gmail.com" rel="email">
              andreuolleria@gmail.com
            </a>
            ! :)
          </div>
        </div>
        <span className="font-mono font-semibold text-xl">EDUCATION</span>
        <div className="my-2 border-l-4 pl-3 border-gray-lightest">
          <p>Post Degree on Game Development</p>
          <span className="text-sm/6 text-gray-light">
            (GRADUATED IES ABASTOS 2023)
          </span>
        </div>
        <div className="my-2 border-l-4 pl-3 border-gray-lightest">
          <p>Higher Education on Web Development</p>
          <span className="text-sm/6 text-gray-light">
            (GRADUATED IES SIMARRO 2022)
          </span>
        </div>
        <h3 className="font-mono font-semibold text-xl">OTHER INTERESTS <span className="text-terciary hover:text-terciary-light">YAY!</span></h3>
        <ul className="my-2 pl-6 list-disc">
          <li>Game development</li>
          <li>Passionate guitar player</li>
          <li>Drawing characters</li>
          <li>Volleyball</li>
          <li>Warframe addict</li>
        </ul>
        <span className="font-mono font-semibold text-xl">
          LANGUAGE PROFICIENCY
        </span>
        <div className="my-2 border-l-4 pl-3 border-gray-lightest">
          <p>
            I have native fluency in{' '}
            <span className="font-bold text-primary">Spanish</span> and{' '}
            <span className="font-bold text-primary">Catalan (Valencià)</span>,
            and can speak in conversational{' '}
            <span className="font-bold text-primary">English</span>.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
