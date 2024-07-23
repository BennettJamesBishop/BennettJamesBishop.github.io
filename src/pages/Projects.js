import { useParams } from 'react-router-dom';
import { projects_array } from '../projects_array';
export default function Projects() {
    const { index } = useParams();
    const project = projects_array[index]
      return (
        <div>
          {/* Add github link?? And link to production? And three images?  */}
          <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{project.title}</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {project.images.map((image, index) => (
            <article key={index} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  alt=""
                  src={image.url}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </article>
          ))}

          </div>
          </div>
             {/* Project Details */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-8">
            <section className="lg:col-span-1">
              <h2 className="text-2xl tracking-tight text-gray-900 sm:text-4xl">Objective</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">{project.objective}</p>
            </section>

            <section className="lg:col-span-1 lg:row-span-2">
              <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">Results</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">{project.results}</p>
            </section>

            <section className="lg:col-span-1 lg:row-start-2">
              <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">Tools</h2>
              <div className="mt-4 flex flex-wrap gap-4">
                {project.tools.map((tool, index) => (
                  <div key={index} className="flex items-center">
                    <img
                      alt={tool.name}
                      src={tool.logo}
                      className="h-12 w-12 rounded-full bg-gray-100 object-cover mr-4"
                    />
                    <span className=" sr-only text-lg leading-8 text-gray-600">{tool.name}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-12">
            <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">Links</h2>
            <div className="mt-4 flex flex-wrap gap-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  GitHub
                </a>
              )}
              {project.productionLink && (
                <a
                  href={project.productionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Live Site
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
        </div>
        </div>
     
      ); }
