import { useParams } from 'react-router-dom';
import { projects_array } from '../projects_array.ts';

export default function Projects() {

    const { index } = useParams();
    const project = projects_array[index]

      return (
        <div >
          <div className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{project.title}</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {project.subtitle}
          </p>
        </div>
                  {/* Photos Section */}
         {project.images.length > 1 &&     //All projects have at least one photo, for projects grid
        <div key={index} className="mx-auto my-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
        </div>}

                  {/* Demo Section */}
                  {project.demo && (
            <article className="flex my-4 items-center justify-center">
              <div className="  w-full rounded-2xl ring-1 ring-black relative">
              <iframe
                  title={project.demo.title}
                  src={project.demo.url}
                  width="100%"
                  height="500"
                  className="rounded-2xl"
                />
              </div>
            </article>
          )}
          </div>
          </div>
        

             {/* Project Details */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-8">
          {project.objective && (
            <section className="lg:col-span-1">
              <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">Objective</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">{project.objective}</p>
            </section>)}
            {project.results && (
            <section className="mt-4 lg:mt-0 lg:col-span-1 lg:row-span-2">
              <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">Results</h2>
              {project.results.map((result, index) => (
              <p id={index} className="indent-8 mt-4 text-lg leading-8 text-gray-600">{result.paragraph}</p>))}
            </section>)}

          {/* Tools Section */}
            {project.tools.length > 0 &&
            <section className="mt-4 lg:mt-0 lg:col-span-1 lg:row-start-2">
              <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">Tools</h2>
              <div className="mt-4 flex flex-wrap gap-4">
                {project.tools.map((tool, index) => (
                  <div key={index} title={tool.name} className="flex items-center">
                 <img
                      alt={tool.name}
                      src={tool.logo}
                      className="h-12 w-12 "
                    /> 
                    <span className=" sr-only text-lg leading-8 text-gray-600">{tool.name}</span>
                  </div>
                ))}
              </div>
            </section>}
       
        {/* Links Section */}
          {project.links.length > 0 &&
          <section className="mt-4 lg:mt-0">
            <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">Links</h2>
            <div className="mt-4 flex flex-wrap gap-4">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </section>}
          </div>
        </div>
      </div>
       

     
      ); }
