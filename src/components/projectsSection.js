import  projects_array  from "../projects_array"
  export default function ProjectsGrid() {
    return (
      <div id='projects-section' className="bg-indigo-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl"> My Projects</h2>
            <p className="mt-2 text-lg leading-8 text-white">
              Find my projects below. If you see one you like, click on it to get more information
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects_array.map((project, index) => (
              <article
                key={index}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img alt="" src={project.images[0].url} className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time className="mr-8">
                    {project.date}
                  </time>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={'/projects/' + index}>
                    <span className="absolute inset-0" />
                    {project.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  