//Keep all project info here, it's referenced in the projects section of the home page, as well as each respective project page
// Declaration

type Result = {
  paragraph: string;
}

type Tool = {
  name: string;
  logo: string;
};

type Image = {
  url: string;
};

type Link = {
  name: string;
  link: string;
};

type Demo = {
  title: string;
  url: string;
}

type Project = {
  title: string;
  subtitle: string;
  type: string;
  objective?: string;
  results?: Result[];
  demo?: Demo;
  tools: Tool[];
  images: Image[];
  links: Link[];
  date: string;
};

type Projects_Array = Project[];

export const projects_array: Projects_Array = [
  
  //Brainsink
  {
    title: 'Brainsink',
    subtitle: 'Full stack project for project collaboration.',
    type: 'Full Stack SWE Project',
    objective: 'deded',
    results: [
      {paragraph: 'A friend of mine presented an idea for a full-stack SWE project in order to solve a problem he had been facing. While renovating his house, he\'d had problems communicating with the designers, contractors, and structural engineers. He would be on the receiving end of an email containing a 40 page PDF, filled with tile samples or blueprints. It was hard to communicate about specific parts of the PDF, and eventually, a number of his requests were never met. This birthed the idea of Brainsink, a SaaS designed to enhance collaboration in construction projects.'}, 
      {paragraph: 'Brainsink now features an teammate invitation system using the Resend mailer API, shared \'project\' spaces to share and annotate documents, conversation summaries via the OpenAI API, and a settings page in which users may customize their profile. I engineered full-stack solutions and unit testing for 20+ dynamic pages, 25+ complex components, and 30+ mutations and queries. This app is built on a stack of React, TypeScript, GraphQL, PostgreSQL, Prisma, and RedwoodJS.'},
      {paragraph: 'This project taught me most of what I know about full-stack web development. Although I had previously held a position as a SWE Intern, taking on a project (mostly) on my own forced me to problem solve and push the boundaries of what I thought I could do. I\'ll always be grateful for Brainsink and the ways it challenged me as an engineer.'},
    ],
    demo: undefined,
    tools: [
      {name: 'AWS', logo: `${process.env.PUBLIC_URL}/icons/AWS.png`},
      {name: 'React', logo: `${process.env.PUBLIC_URL}/icons/React.png`},
      {name: 'TailwindCSS', logo: `${process.env.PUBLIC_URL}/icons/Tailwind CSS.png`},
      {name: 'GraphQL', logo: `${process.env.PUBLIC_URL}/icons/GraphQL.png`},
      {name: 'PostgresSQL', logo: `${process.env.PUBLIC_URL}/icons/PostgresSQL.png`},
      {name: 'Jest', logo: `${process.env.PUBLIC_URL}/icons/Jest.png`}
    ],
    images: [
      {url: `${process.env.PUBLIC_URL}/brainsink/brainsink1.png`},
      {url: `${process.env.PUBLIC_URL}/brainsink/brainsink2.png`},
      {url: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
    ],
    links: [],
    date: 'July 2023 - Present',
  },

  //Public Transport Project
  {
    title: 'Optimizing Public Transport',
    subtitle: '1st place project at Data Science UCSB Spring Project Showcase 2023.',
    type: 'Data Science Project',
    objective:
      'Optimize public transportation in San Diego County to better serve overpopulated/poorer areas.',
    results: [
      {paragraph: 'I joined Data Science UCSB at the beginning of my second year of college looking for more opportunities to explore the world of data science. I was unsure of what I had gotten myself into but I found a group. We decided we would try and tackle the problem of inefficient public transportation. Originally, we wanted to create a sort of maps app where a user could select an area of the map, and it would optimize that area\'s transportation using public/geo data. We realized that was far out of the scope of our project, and instead decided we would focus on the city of San Diego. We worked on the project intermittently throughout the year.'},
      {paragraph: 'Using GIS Data, Public Census Data, and Python, our team successfully reoptimized public transportation for San Diego county! Using simulated annealing techniques, we were able to redistribute the total number of stops in order to better serve neighborhoods with higher population density and lower average income. Then, we repurposed open source code meant to solve the Travelling Salesman Problem, and were able to find the shortest routes for buses to travel in between stops. With a new distribution of stops and new routes, we found a solution which would take San Diego\'s current public transportation resources and more appropriately serve underserved neighborhoods.'},
      {paragraph: 'Our project was awarded First Place at the 2023 Spring Project Showcase, outperforming 26 competing projects and highlighting our project\'s tangible potential to help underserved communities.'},
    ],
    demo: {
        title: "Public Transport Project",
        url: `${process.env.PUBLIC_URL}/DSUCSBProject/DSUCSB-Presentation.pdf`,
    },
    tools: [
      {name: 'Python', logo: `${process.env.PUBLIC_URL}/icons/Python.png`},
      {name: 'Pandas', logo: `${process.env.PUBLIC_URL}/icons/Pandas.png`}
    ],
    images: [
      {url: `${process.env.PUBLIC_URL}/DSUCSBProject/DSUCSB1.JPG`},
    ],
    links: [
      {name: 'Github', link: 'https://github.com/BennettJamesBishop/SDPublicTransportProject'},
    ],
    date: 'Oct 2022 - May 2023',
  },

  //UFC App
  {
    title: 'UFC Prediction App',
    subtitle: 'Python/Streamlit app using Machine Learning and OpenAI to predict the outcome of UFC Fights.',
    type: 'Machine Learning App',
    objective:
      'Create an interactive app in which a user may select two fighters, view the prediction of who will win, and view an AI generated explanation of the app\'s prediction.',
    results: 
      [
        {paragraph: 'It turns out I had already completed the real heavy work throughout the process of the original UFC ML Project (featured on this site, as well). In order to create this app, I rewrote my most successful model from my UFC ML Project in Python (it was originally written in R), found a second data set containing fighter data, and utilized Streamlit.io in order to build/host the app.'},
        {paragraph: 'The app itself is pretty simple. The two drop down menus contain unique fighter names, corresponding to individual rows in the fighters data set. When a user presses “Predict Winner,” a data frame containing each fighter\'s data is passed into my ML Model, my model then returns a prediction as well as each fighter\'s probability of winning.'},
        {paragraph: 'Then, each fighter\'s name and data, as well as who the predicted \'winner\' is, is passed to an OpenAI API. With the help of some prompt engineering (including variable importance rankings from the model), a meaningful explanation as to the model\'s prediction is generated.'},
        {paragraph: 'I am happy with how this app has turned out, and plan on using Streamlit for more apps in the future. I also plan on building a pipeline which will rescrape the UFC website more frequently, providing more data for the model to train itself on.'},
      ],
    demo: {
      title: "UFC Prediction App",
      url: 'https://ufcprediction.streamlit.app/?embedded=true',
    },
    tools: [
      {name: 'Python', logo: `${process.env.PUBLIC_URL}/icons/Python.png`},
      {name: 'Streamlit', logo: `${process.env.PUBLIC_URL}/icons/Streamlit.png`},
      {name: 'Scikit-Learn', logo: `${process.env.PUBLIC_URL}/icons/scikit-learn.png`},
      {name: 'Pandas', logo: `${process.env.PUBLIC_URL}/icons/Pandas.png`}
    ],
    images: [
      {url: `${process.env.PUBLIC_URL}/ufcApp/ufcApp1.png`},
    ],
    links: [
      {name: 'Github', link: 'https://github.com/BennettJamesBishop/UFC-Prediction-App'},
      {name: 'Live Site', link: 'https://ufcprediction.streamlit.app/'},
    ],
    date: 'July 2024',
  },

  //UFC ML Project
  {
    title: 'UFC Prediction ML Project',
    subtitle: 'R Project using Machine Learning to predict the outcome of UFC.',
    type: 'Machine Learning Project',
    objective:
      'Create a machine learning model which could predict the outcome of UFC fights based on each individual fighter\'s career statistics.',
    results: [
      {paragraph: 'In one of my Statistics classes we were asked to create a machine learning project based off of any data set we wanted. I wanted it to be focused on something I am genuinely interested in, as this would make the 10-week process much more enjoyable. I decided to make a model which could predict the outcome of UFC fights based on each individual fighter\'s career statistics. I found a large data set with all of the relevant data, and decided to get to work. Over the course of the ten week period, I experimented with various machine learning models (Logistic Regression, Linear Discriminant Analysis, Decision Trees, Random Forests, and K-Nearest Neighbors), eventually finding the best model (based off of its ROC_AUC metric).'},
      {paragraph: 'My UFC Machine Learning Project (which earned me an A in the class!) is made entirely with R and various packages (ggplot, tidyverse, tidymodels, randomForest), and is able to predict the outcome of UFC fights with an ROC_AUC metric of around 80% (also, an accuracy of around 75% on the testing data).'},
      {paragraph: 'This project was a lot of fun, and it allowed me to really deep dive into the mechanics of Machine Learning.'},
    ],
    demo: {
        title: "UFC Prediction ML Project",
        url: `${process.env.PUBLIC_URL}/ufcML/UFC-Final-Project.html`,
    },
    tools: [
      {name: 'R', logo: `${process.env.PUBLIC_URL}/icons/R.png`},
      {name: 'RStudio', logo: `${process.env.PUBLIC_URL}/icons/RStudio.png`},
      {name: 'Kaggle', logo: `${process.env.PUBLIC_URL}/icons/Kaggle.png`}
    ],
    images: [
      {url: `${process.env.PUBLIC_URL}/ufcML/ufcML2.png`},
    ],
    links: [],
    date: 'June 2024',
  },

  //The Wenliang Initiative
  {
    title: 'The Wenliang Initiative',
    subtitle: 'Non-Profit Grocery Delivery service I co-founded with my best friend during Covid.',
    type: 'Non-Profit Service',
    objective:
      'Help the elderly population of my community avoid COVID exposure by creating a Non-Profit Grocery Delivery Service.',
    results: [
      {paragraph: 'The Wenliang Initiative started as a response to the challenges faced by the elderly in my community during the pandemic. I co-founded a nonprofit grocery delivery service aimed at reducing COVID-19 exposure risks by ensuring safe access to essential items. Over time, we successfully delivered groceries to more than 100 unique households, translating to over 350 hours of potential exposure avoided and distributing more than $30,000 worth of groceries. To facilitate the process, I designed and implemented a user-friendly website (in my pre-SWE days, so I used Wix!), streamlining the ordering system. Twice a week, my best friend and I would print out pages of grocery lists and set out on hours-long delivery operations. As demand grew, I scaled the service by recruiting and managing a team of dedicated volunteers, which was an incredibly rewarding experience. We even ended up on the news (link below)!'},
      {paragraph: 'I am very proud of my quarantine project, and learned valuable lessons about logistics, public relations, and the importance of community because of it.'},
    ],
    demo: {
      title: 'Local News Article',
      url: 'https://stevensonschool.org/news-features-for-td/special-delivery/'},
    tools: [],
    images: [
      // {url: `${process.env.PUBLIC_URL}/wenliangInitiative/wenliang1.jpg`},
      {url: `${process.env.PUBLIC_URL}/wenliangInitiative/wenliang2.jpg`},
      // {url: `${process.env.PUBLIC_URL}/wenliangInitiative/wenliang3.png`},
    ],
    links: [
      {name: 'Local News', link: 'https://www.ksbw.com/article/2-stevenson-students-deliver-groceries-for-free-to-their-neighbors/32023134'},
      {name: 'School Article', link: 'https://stevensonschool.org/news-features-for-td/special-delivery/'}
    ],
    date: 'April 2020 - Feb 2021',
  },

  //Eagle Scout
  {
    title: 'Eagle Scout',
    subtitle: 'After a life time of scouting, I achieved the rank of Eagle Scout at age 16.',
    type: 'Boy Scouts of America',
    objective:
      'When I first started the scouting process, as a \'Little Scout Buddy,\' years before I could even officially join, I did not have any objectives. I simply wanted to do everything my older brother was doing.',
    results: [
      {paragraph: 'Achieving the rank of Eagle Scout at the age of 16 was a culmination of over a decade of dedication and perseverance within the Boy Scouts. This journey was filled with countless meetings, exhilarating camping trips, challenging backpacking adventures, and enriching summer camps which shaped me profoundly. I am incredibly grateful to the Boy Scouts of America for the handful of unforgettable experiences they provided, allowing me to spend hundreds of days and nights immersed in the great outdoors, pushing myself beyond my comfort zone.'},
      {paragraph: 'This journey afforded me invaluable leadership experience, with hundreds of hours dedicated to honing my skills. From meticulously planning camping trips to leading my troop through impactful community service projects, each opportunity helped me grow. The Boy Scouts instilled in me a deep sense of discipline, accountability, and respect for others. These experiences have left a lasting impact on my life, equipping me with skills and values that continue to guide me in all my endeavors.'},
    ],
    demo: undefined,
    tools: [],
    images: [
      {url: `${process.env.PUBLIC_URL}/boyScouts/boyScouts1.JPG`},
      {url: `${process.env.PUBLIC_URL}/boyScouts/boyScouts2.JPG`},
      {url: `${process.env.PUBLIC_URL}/boyScouts/boyScouts3.JPG`},
    ],
    links: [
      {name: 'More Info', link: 'https://nesa.org/'},
  ],
    date: 'Dec 2019',
  },

  //Descartes Paper
  {
    title: 'Challenging Descartes\' Distinction of Intellect and Imagination',
    subtitle: 'This paper challenges the success of Descartes claim that the intellect and the imagination are entirely seperate powers. .',
    type: 'Philosophy Paper',
    objective: undefined,
    results: undefined,
    demo: {
        title: "Finding a Philosophically Naturalistic Account of Color",
        url: `${process.env.PUBLIC_URL}/descartesPaper/descartes.pdf`,
    },
    tools: [],
    images: [
      {url: `${process.env.PUBLIC_URL}/descartesPaper/descartes.png`},
    ],
    links: [],
    date: 'Dec 2023',
  },

    //Color Paper
    {
      title: 'Finding a Philosophically Naturalistic Account of Color',
      subtitle: 'This paper explores various philisophical theories of color, searching for one which may be most backed by science..',
      type: 'Philosophy Paper',
      objective: undefined,
      results: undefined,
      demo: {
          title: "Finding a Philosophically Naturalistic Account of Color",
          url: `${process.env.PUBLIC_URL}/colorPaper/color.pdf`,
      },
      tools: [],
      images: [
        {url: `${process.env.PUBLIC_URL}/colorPaper/color.png`},
      ],
      links: [],
      date: 'Dec 2023',
    },
];
  