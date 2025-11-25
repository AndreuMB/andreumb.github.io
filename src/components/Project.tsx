import type { ReactNode } from "react";

interface ProjectProps {
  name: string;
  img: string;
  img_link: string;
  children: ReactNode;
}
function Project({ name, img, children, img_link }: ProjectProps) {
  return (
    <div className="bg-primary-light p-2">
      <h3 className="text-secondary text-lg">{name}</h3>
      <div className="flex gap-4">
        <a
          target="_blank"
          className="w-2/6 hover:scale-103 hover:rounded transition"
          href={img_link}
        >
          <img
            src={img}
            alt={img}
            className="object-cover h-36 w-full flex-shrink-0"
          />
        </a>

        <div className="w-4/6">{children}</div>
      </div>
    </div>
  );
}

export default Project;
