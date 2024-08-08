export default function AboutMeSection() {
  return (
    <div id="about-me" className=" py-24 sm:py-32 bg-white">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                Hi, I'm Bennett! Welcome to my personal website. I am currently a student at UCSB, but I am also much more than that. In highschool, I joined just about every band and orchestra I could. I’ve performed multiple times at the Monterey Jazz Festival (playing Trombone) and even flew to New York and performed at Carnegie Hall (playing Euphonium)! Since coming to college, I have broadened my horizons and have played for the school's D1 Rugby team, taught myself to program full stack applications, spent many sunny days on the beach, and slowly figured out how to get better grades (4.0 GPA last quarter)!
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                I'm now a fourth year student pursuing degrees in Statistics and Data Science & Philosophy, as well as a certificate in Technology Management. My academic work ranges from Thomas Bayes to Reneé Descartes, and I am fortunate enough to find it all (varying degrees of) interesting. I find the most interest in Web Development, Machine Learning, and Metaphysics. Thanks for checking out my portfolio, enjoy! 
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    alt=""
                    src={`${process.env.PUBLIC_URL}/aboutMe/ab1.JPG`}
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      alt=""
                      src={`${process.env.PUBLIC_URL}/aboutMe/ab2.JPG`}
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      alt=""
                      src={`${process.env.PUBLIC_URL}/aboutMe/ab3.JPG`}
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      alt=""
                      src={`${process.env.PUBLIC_URL}/aboutMe/ab4.JPG`}
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
