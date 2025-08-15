import useSound from 'use-sound';
import Project from './Project';
import key1 from '/src/assets/sounds/key1.mp3';
import key2 from '/src/assets/sounds/key2.mp3';
import key3 from '/src/assets/sounds/key3.mp3';
import key4 from '/src/assets/sounds/key4.mp3';
import key5 from '/src/assets/sounds/key5.mp3';
import myvideogamelistImg from '/src/assets/MVL_banner.png'
import pianetImg from '/src/assets/pianet_icon2.png'
import STC2Img from '/src/assets/STC2-logo.png'
import egonismImg from '/src/assets/Egonism1.png'

function Projects() {
  const toolsList = [
    'Git',
    'Docker',
    'Postman',
    'Supabase',
    'Unity',
    'Godot',
    'Photoshop',
    'Blender',
    'Linux',
    'Windows',
    'Mac',
  ];
  const skillsList = [
    'TypeScript',
    'Vue.js',
    'MySql',
    'React',
    'Next.js',
    'NestJS',
    'Ionic',
    'Tailwind',
    'C#',
    'PHP',
    'GDScript',
    'Netcode',
    'XRTools',
    'Vuforia',
  ];

  const [playKey1] = useSound(key1)
  const [playKey2] = useSound(key2)
  const [playKey3] = useSound(key3)
  const [playKey4] = useSound(key4)
  const [playKey5] = useSound(key5)

  const keysSound = [playKey1, playKey2, playKey3, playKey4, playKey5]

  const playRandomKey = () => {
    keysSound[Math.floor(Math.random() * keysSound.length)]()
  }

  return (
    <div className="p-5 flex flex-col gap-6">
      <div className="flex gap-6 skills-list">
        <div className="w-1/2">
          <h2>TOOLS</h2>
          <ul className="list flex gap-2 flex-wrap">
            {toolsList.map((tool) => (
              <li
                key={tool}
                onMouseEnter={playRandomKey}
                className="px-1 bg-secondary rounded-md transition-all duration-100 hover:translate-x-[3px] hover:translate-y-[3px]"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-1/2 ">
          <h2>SKILLS</h2>
          <ul className="list flex gap-2 flex-wrap">
            {skillsList.map((skill) => (
              <li
                key={skill}
                onMouseEnter={playRandomKey}
                className="px-1 bg-secondary rounded-md transition-all duration-100 hover:translate-x-[3px] hover:translate-y-[3px]"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2>WEBAPPS</h2>
        <p className="mb-2"> Click the images to visit their site!</p>
        <div className="flex flex-col gap-4">
          <Project
            name="MYVIDEOGAMELIST"
            img={myvideogamelistImg}
            img_link="https://my-videogamelist.netlify.app/"
          >
            <p>
              Organize, track, and share your video game journey. Fun project
              made with Vue.js with a cute BeeStyle. Check it on github
              <a
                target="_blank"
                href="https://github.com/AndreuMB/MyVideogameList"
              >
                {' '}
                here
              </a>
              .
            </p>
          </Project>
          <Project
            name="PIANET"
            img={pianetImg}
            img_link="https://pianet.netlify.app/"
          >
            <p>
              Create and share music sheets with the world. This was my final
              degree project in 2022, and I was very proud of it.
            </p>
            <p>
              It's cool to see how much I've grown since then. Check it out on
              GitHub
              <a target="_blank" href="https://github.com/AndreuMB/PianetVue">
                {' '}
                here
              </a>
              .
            </p>
          </Project>
        </div>
      </div>

      <div>
        <h2>GAMES</h2>
        <div className="flex flex-col gap-4 mb-2">
          <Project
            name="SQUASH THE CREEPS 2"
            img={STC2Img}
            img_link="https://andreum.itch.io/squash-the-creeps-2"
          >
            <p>
              Jump above the Creeps and squash them, but don't let them squash
              you! Game made in Godot to learn the basics of it.
            </p>
            <p>
              I used their official tutorial game, end up preatty well. You can
              even check the trailer I made{' '}
              <a target="_blank" href="https://youtu.be/_5tuvh0qriY">
                {' '}
                here
              </a>{' '}
              and check it on GitHub
              <a
                target="_blank"
                href="https://github.com/AndreuMB/Squash-the-Creeps-2"
              >
                {' '}
                here
              </a>
              .
            </p>
          </Project>

          <Project
            name="EGONISM"
            img={egonismImg}
            img_link="https://andreum.itch.io/egonism"
          >
            <p>
              Play as a dwarf and farm crystals to claim your deepest desire.
              Made with Unity, the game engine I've used the most.
            </p>
            <p>
              This game was showcased at IES Simarro's conference as my final
              master's project. Check it out on GitHub
              <a
                target="_blank"
                href="https://github.com/AndreuMB/GameFinalCEVRV"
              >
                {' '}
                here
              </a>
              .
            </p>
          </Project>
        </div>
        <p> You can check all the projects on my <a
          target="_blank"
          href="https://github.com/AndreuMB/"
        >
          {' '}
          GitHub
        </a> and the released games on my <a
          target="_blank"
          href="https://andreum.itch.io/"
        >
            {' '}
            itch.io
          </a>.</p>
      </div>
    </div>
  );
}

export default Projects;
