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
    subtitle: 'Full stack project for project collaboration. Got too expensive to host, finding a new solution.',
    type: 'Full Stack SWE Project',
    objective:  'A friend of mine presented an idea for a full-stack SWE project in order to solve a problem he had been facing. While renovating his house, he\'d had problems communicating with the designers, contractors, and structural engineers. He would be on the receiving end of an email containing a 40 page PDF, filled with tile samples or blueprints. It was hard to communicate about specific parts of the PDF, and eventually, a number of his requests were never met. This birthed the idea of Brainsink, a SaaS designed to enhance collaboration in construction projects.',
    results: [
      {paragraph: 'Brainsink now features an teammate invitation system using the Resend mailer API, shared \'project\' spaces to share and annotate documents, conversation summaries via the OpenAI API, and a settings page in which users may customize their profile. I engineered full-stack solutions and unit testing for 20+ dynamic pages, 25+ complex components, and 30+ mutations and queries. This app is built on a stack of React, TypeScript, GraphQL, PostgreSQL, Prisma, and RedwoodJS.'},
      {paragraph: 'This project taught me most of what I know about full-stack web development. Although I had previously held a position as a SWE Intern, this massive project forced me to problem solve and push the boundaries of what I thought I could do. I\'ll always be grateful for Brainsink and the ways it challenged me as a full stack engineer.'},
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
    ],
    links: [],
    date: 'July 2023 - Present',
  },

    //UFC App
    {
      title: 'UFC Prediction App',
      subtitle: 'Python app using Machine Learning to predict the outcome of UFC Fights.',
      type: 'Machine Learning App',
      objective:
        'My UFC ML Project (featured on my personal site, as well) was really fun to build, however I wanted to do more with my model. I became invested in creating an interactive app in which a user could match up two fighters and recieve both a calculated prediction of who would win as well as an AI generated explanation of the model\'s prediction.',
      results: 
        [
          {paragraph: 'It turns out I had already completed the real heavy work throughout the process of the original UFC ML Project. In order to create this app, I rewrote my most successful model from my UFC ML Project in Python (it was originally written in R), found a second data set containing fighter data, and utilized Streamlit.io in order to build/host the app.'},
          {paragraph: 'The app itself is pretty simple. The two drop down menus contain unique fighter names, corresponding to individual rows in the fighters data set. When a user presses “Predict Winner,” a data frame containing each fighter\'s data is passed into my ML Model, my model then returns a prediction as well as each fighter\'s probability of winning.'},
          {paragraph: 'Next, each fighter\'s name and data, as well as the predicted winner, is passed to an OpenAI API. With the help of some prompt engineering (including variable importance rankings from the model), a meaningful explanation as to the model\'s prediction is generated.'},
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
      subtitle: 'R Project using Machine Learning to predict the outcome of UFC Fights.',
      type: 'Machine Learning Project',
      objective: 'In one of my Statistics classes we were asked to create a machine learning project based off of any data set we wanted. I wanted it to be focused on something I am genuinely interested in, as this would make the 10-week process much more enjoyable. I decided to make a model which could predict the outcome of UFC fights based on each individual fighter\'s career statistics.',
      results: [
        {paragraph: 'My UFC Machine Learning Project (which earned me an A in the class!) is made entirely with R and various packages (ggplot, tidyverse, tidymodels, randomForest), and is able to predict the outcome of UFC fights with an ROC_AUC metric of around 80% (also, an accuracy of around 75% on the testing data).'},
        {paragraph: ' I found a large data set with all of the relevant data, and decided to get to work. Over the course of the ten week period, I experimented with various machine learning models (Logistic Regression, Linear Discriminant Analysis, Decision Trees, Random Forests, and K-Nearest Neighbors), eventually finding the best model (based off of its ROC_AUC metric).'},
        {paragraph: 'This ML project laid the foundation for the interactive UFC Fight Prediction app I built using Python. Visit my Projects page to try it out!'},
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

    //Public Transport Project
    {
      title: 'Optimizing Public Transport',
      subtitle: '1st place project at Data Science UCSB Project Showcase 2023.',
      type: 'Data Science Project',
      objective:
        'My team and I united with the goal of building a system to optimize urban area\'s public transportation. Optimization in this case means redistributing public transit resources to better serve overpopulated, low income neighborhoods. We worked on this project intermittently throughout the 2022-2023 school year.',
      results: [
        {paragraph: 'Using GIS Data, Public Census Data, and Python, our team successfully reoptimized public transportation for San Diego county! Using simulated annealing techniques, we were able to redistribute the total number of stops in order to better serve neighborhoods with higher population density and lower average income. Then, we repurposed open source code meant to solve the Travelling Salesman Problem, and were able to find the shortest routes for buses to travel in between stops. With a new distribution of stops and new routes, we found a solution which would take San Diego\'s current public transportation resources and more appropriately serve underserved neighborhoods.'},
        {paragraph: 'Our project was awarded First Place at the 2023 Spring Project Showcase, outperforming 26 competing projects and highlighting our project\'s tangible potential to help underserved communities.'},
      ],
      demo: {
          title: "Public Transport Project",
          url: `${process.env.PUBLIC_URL}/DSUCSBProject/DSUCSB-Poster.pdf`,
      },
      tools: [
        {name: 'Python', logo: `${process.env.PUBLIC_URL}/icons/Python.png`},
        {name: 'Pandas', logo: `${process.env.PUBLIC_URL}/icons/Pandas.png`}
      ],
      images: [
        {url: `${process.env.PUBLIC_URL}/DSUCSBProject/DSUCSB1.png`},
      ],
      links: [
        {name: 'Github', link: 'https://github.com/BennettJamesBishop/SDPublicTransportProject'},
      ],
      date: 'Oct 2022 - May 2023',
    },

  //Descartes Paper
  // {
  //   title: 'Challenging Descartes\' Distinction of Intellect and Imagination',
  //   subtitle: 'This paper challenges the success of Descartes claim that the intellect and the imagination are entirely seperate powers. .',
  //   type: 'Philosophy Paper',
  //   objective: undefined,
  //   results: undefined,
  //   demo: {
  //       title: "Finding a Philosophically Naturalistic Account of Color",
  //       url: `${process.env.PUBLIC_URL}/descartesPaper/descartes.pdf`,
  //   },
  //   tools: [],
  //   images: [
  //     {url: `${process.env.PUBLIC_URL}/descartesPaper/descartes.png`},
  //   ],
  //   links: [],
  //   date: 'Dec 2023',
  // },

  //   //Color Paper
  //   {
  //     title: 'Finding a Philosophically Naturalistic Account of Color',
  //     subtitle: 'This paper explores various philisophical theories of color, searching for one which may be most backed by science..',
  //     type: 'Philosophy Paper',
  //     objective: undefined,
  //     results: undefined,
  //     demo: {
  //         title: "Finding a Philosophically Naturalistic Account of Color",
  //         url: `${process.env.PUBLIC_URL}/colorPaper/color.pdf`,
  //     },
  //     tools: [],
  //     images: [
  //       {url: `${process.env.PUBLIC_URL}/colorPaper/color.png`},
  //     ],
  //     links: [],
  //     date: 'Dec 2023',
  //   },
];
  