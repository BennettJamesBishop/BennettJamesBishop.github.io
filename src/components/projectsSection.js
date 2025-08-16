import { projects_array } from "../projects_array.ts"

export default function ProjectsGrid() {
  return (
    <div id="projects-section" className="relative bg-indigo-600 py-24 sm:py-32 overflow-hidden">
      {/* Whole section content blurred */}
      <div className="blur-sm pointer-events-none">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl"> My Projects</h2>
            <p className="mt-2 text-lg leading-8 text-white">
              Find my projects below. If you see one you like, click on it to get more information
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 
                          sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects_array.map((project, index) => (
              <article
                key={index}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl 
                           bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  alt=""
                  src={project.images[0].url}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time className="mr-8">{project.date}</time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="flex gap-x-2.5">{project.type}</div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={'#/projects/' + index}>
                    <span className="absolute inset-0" />
                    {project.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay renovation message */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-indigo-900/70">
        <h3 className="text-3xl font-bold text-white">🚧 August 2025 Update: This project showcase is being refreshed. 🚧</h3>
        <p className="mt-4 text-lg text-indigo-100">
          In the meantime, please check out my{" "}
          <a
            href="https://www.linkedin.com/in/bennett-bishop"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold text-white hover:text-indigo-200"
          >
            LinkedIn
          </a>{" "}
          to see my work, and check back here soon!
        </p>
      </div>
    </div>
  )
}




  