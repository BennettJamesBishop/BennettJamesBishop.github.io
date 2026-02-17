export default function AboutMeSection() {
  return (
    <div id="about-me" className=" py-24 sm:py-32 bg-blue-700">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About Me</h2>
                <p className="mt-6 text-xl leading-8 text-white">
                Hi, I'm Bennett! I'm an AI Engineer in San Francisco, most recently working for a startup building AI agents for FP&A. I'm in charge of building new agents, maintaining evals, and building various add-ins to make our agents more accessible. I'm a recent UCSB graduate who previously worked at the UCSB "Big Bee" Lab, where I built a multimodal entomology chatbot by indexing their massive database of text, image, and tabular data. At the UCSB Alumni Association, I automated hundreds of hours of manual data processing, enabling time for more strategic initiatives. I also built and deployed a full-stack, AI-assisted document sharing app called Brainsink. Before then, I got my start in 2022 helping Amotions AI migrate their no-code platform to a modern web stack and secure their first client.
                </p>
                 <p className="mt-6 text-base leading-7 text-white">
                {/*I'm recently completed my degrees in Statistics and Data Science & Philosophy, as well as a certificate in Technology Management. My academic work ranged from Thomas Bayes to Reneé Descartes, and I am fortunate enough to find it all (varying degrees of) interesting. I find the most interest in Web Development, Machine Learning, and Metaphysics. Thanks for checking out my portfolio, enjoy! */}
                Apart from studying SWE, ML, and AI, I do other cool stuff, too! This summer, I rode a motorcycle 200 miles around Vietnam.  I'm a proud Eagle Scout. I've played Trombone at the Monterey Jazz Festival and played Euphonium at Carnegie Hall. I played D1 Rugby at UCSB, and last year my grandpa and I flew a single engine plane down to Mexico! I enjoy fishing, basketball, and piano. Thanks for checking out my site!

                </p> 

              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    alt=""
                    src={`${process.env.PUBLIC_URL}/aboutMe/tuna_pic.jpg`}
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      alt=""
                      src={`${process.env.PUBLIC_URL}/aboutMe/rugby_pic.jpg`}
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      alt=""
                      src={`${process.env.PUBLIC_URL}/aboutMe/pyramids_pic.JPG`}
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      alt=""
                      src={`${process.env.PUBLIC_URL}/aboutMe/vietnam_pic.JPG`}
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

   
        </div>
     
  )
}
