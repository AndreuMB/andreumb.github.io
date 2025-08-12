import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaItchIo } from "react-icons/fa";

function Footer() {
  return (
    <footer className="fixed left-0 bottom-1 w-full justify-center items-center flex flex-col gap-2">
      <div className="flex gap-3">
        <a target="_blank" href="https://github.com/AndreuMB"><FaGithub /></a>
        <a target="_blank" href="https://www.linkedin.com/in/andreumb"><FaLinkedin /></a>
        <a target="_blank" href="https://andreum.itch.io/"><FaItchIo /></a>
      </div>
      <p>&copy; Made by AndreuMB</p>
    </footer>
  );
}

export default Footer;
