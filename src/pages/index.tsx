import {
  CodeIcon,
  ExternalLinkIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import { useEffect } from "react";
import data from "../../data.json";
import { useQueryScreenshot } from "../screenshot";
import Typewriter from "../Typewriter";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      className={className}
    >
      <path
        d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
      >
      </path>
    </svg>
  );
}

function ProjectCard({
  url,
  codeUrl,
  title,
}: {
  url: string;
  codeUrl: string;
  title: string;
}) {
  const query = useQueryScreenshot();

  useEffect(() => {
    query.fetch({ targetUrl: url, timeout: 2000, imageType: "png" });
  }, []);

  return (
    <li
      className="aspect-square col-span-1 flex flex-col text-center bg-zinc-700 text-gray-200 rounded-md"
    >
      <h1 className="text-left p-4 text-2xl font-semibold">
        {title}
      </h1>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        className="block overflow-hidden w-full flex-1"
      >
        {query.state === "success" &&
          (
            <img
              className="w-full h-full hover:opacity-80 object-cover"
              src={query.src}
            />
          )}

        {query.state === "error" &&
          (
            <div
              className="w-full h-full grid items-center text-gray-400"
            >
              Failed to load screenshot
            </div>
          )}

        {query.state === "loading" &&
          (
            <div className="w-full h-full animate-pulse bg-zinc-600">
            </div>
          )}
      </a>
      <div className="-mt-px flex divide-x divide-zinc-600 text-gray-300 ">
        <div className="w-0 flex-1 flex">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={url}
            className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 font-medium border border-transparent rounded-bl-l hover:opacity-80"
          >
            <ExternalLinkIcon
              className="w-5 h-5"
              aria-hidden="true"
            />
            <span className="ml-3">Live</span>
          </a>
        </div>
        <div className="-ml-px w-0 flex-1 flex">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={codeUrl}
            className="relative w-0 flex-1 inline-flex items-center justify-center py-4  font-medium border border-transparent rounded-br-lg hover:opacity-80"
          >
            <CodeIcon
              className="w-5 h-5"
              aria-hidden="true"
            />
            <span className="ml-3">Code</span>
          </a>
        </div>
      </div>
    </li>
  );
}

function Links() {
  const classes = {
    icon: "fill-gray-200 h-12 w-12 mb-1",
    a: "hover:opacity-80 block flex flex-col justify-center items-center",
    span: "text-gray-400 text-sm font-light",
  };

  return (
    <div
      className="grid grid-cols-4 grid-flow-row gap-8 mx-auto"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={data.Github.url}
        className={classes.a}
      >
        <GithubIcon
          className={classes.icon}
          aria-hidden="true"
        />
        <span className={classes.span}>Github</span>
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href={data.Linkedin.url}
        className={classes.a}
      >
        <LinkedinIcon
          className={classes.icon}
          aria-hidden="true"
        />
        <span className={classes.span}>
          Linkedin
        </span>
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`mailto:${data.emailAddress}`}
        className={classes.a}
      >
        <MailIcon className={classes.icon} />
        <span className={classes.span}>
          Email
        </span>
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`callto:${data.phoneNumber}`}
        className={classes.a}
      >
        <PhoneIcon className={classes.icon} />
        <span className={classes.span}>
          Phone
        </span>
      </a>
    </div>
  );
}

export default function Index() {
  return (
    <div
      className="overflow-hidden bg-gradient-to-r from-zinc-800 to-zinc-900"
    >
      <style jsx global>
        {`
          body {
            background-color: rgb(24 24 27);
          }
        `}
      </style>;
      <div className="px-4 m-auto max-w-6xl w-full">
        <div
          className="flex flex-col md:flex-row items-center justify-center mx-auto my-12 "
        >
          <div
            className="flex-1 w-full text-4xl font-extrabold sm:text-5xl md:text-6xl"
          >
            <div className="text-xl text-gray-400 mb-2">
              {"Hi, my name is"}
            </div>
            <div className="block text-gray-200 tracking-tight mb-1">
              Chris Vouga
            </div>

            <span
              className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change text-lime-500 "
            >
              web developer
            </span>
            <span
              className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-lime-500 md:-mb-4 md:h-16 animate-cursor will-change"
            >
            </span>
          </div>
          <Links />
        </div>

        <h2
          className="text-gray-200 mb-6 text-3xl font-extrabold sm:text-4xl md:text-5xl"
        >
          Projects
        </h2>

        <ol
          className="w-full overflow-hidden grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.projects.map((
            project,
          ) => <ProjectCard key={project.url} {...project} />)}
        </ol>
      </div>

      <footer className="p-8 my-12 flex">
        <Links />
      </footer>
    </div>
  );
}
