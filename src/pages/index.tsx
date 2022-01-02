import { useEffect } from "react";
import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import data from "../../data.json";
import { useQueryScreenshot } from "../screenshot";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

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
      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
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
    <a target="_blank" rel="noopener noreferrer" href={url}>
      <li className="col-span-1 flex flex-col text-center bg-zinc-300 rounded-sm shadow-lg divide-y divide-gray-200">
        <div>
          <h1 className="text-left p-4 text-gray-700 text-2xl font-semibold">
            {title}
          </h1>

          {query.state === "success" && (
            <img className="aspect-video object-cover" src={query.src} />
          )}
          {query.state === "error" && (
            <div className="aspect-video bg-gray-300 grid items-center text-gray-600">
              Failed to get screenshot
            </div>
          )}
          {query.state === "loading" && (
            <div className="aspect-video w-full animate-pulse bg-zinc-500"></div>
          )}

          <div className="-mt-px flex divide-x divide-zinc-400 ">
            <div className="w-0 flex-1 flex">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={url}
                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-bl-lg text-gray-700 "
              >
                <ExternalLinkIcon
                  className="text-inherit w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-3">Live Site</span>
              </a>
            </div>
            <div className="-ml-px w-0 flex-1 flex">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={codeUrl}
                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <CodeIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-3">Code</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    </a>
  );
}

function Links() {
  return (
    <div className="mx-auto flex items-center justify-center my-12">
      <a target="_blank" rel="noopener noreferrer" href={data.Github.url}>
        <GithubIcon className="fill-white h-12 w-12 mr-8" aria-hidden="true" />
      </a>

      <a target="_blank" rel="noopener noreferrer" href={data.Linkedin.url}>
        <LinkedinIcon
          className="fill-white h-12 w-12 mr-8"
          aria-hidden="true"
        />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`mailto:${data.emailAddress}`}
      >
        <MailIcon className="fill-white h-16 w-16" />
      </a>
    </div>
  );
}

export default function Index() {
  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-r from-zinc-800 to-zinc-900">
        <main className="mt-16 mx-auto max-w-3xl px-4 sm:mt-24 text-center">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block xl:inline text-gray-200">
              Hi, I'm Chris Vouga
            </span>{" "}
            <span className="block text-lime-500 xl:inline">
              software developer
            </span>
          </h1>
        </main>

        <Links />

        <div className="m-auto max-w-6xl text-center w-full">
          <h2 className="text-gray-200 mb-2 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            Projects
          </h2>

          <li className="w-full overflow-hidden grid p-4 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data.projects.map((project) => (
              <ProjectCard key={project.url} {...project} />
            ))}
          </li>
        </div>

        <footer>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <Links />
          </div>
        </footer>
      </div>
    </>
  );
}
