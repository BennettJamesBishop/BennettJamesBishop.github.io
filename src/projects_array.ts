//Keep all project info here, it's referenced in the projects section of the home page, as well as each respective project page
// Declaration
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
  results?: string;
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
    objective:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur undefineda deserunt vel. Iusto corrupti dicta.',
    results: 
    'ededededede',
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
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur undefineda deserunt vel. Iusto corrupti dicta.',
    results: 
      'ededededede',
    demo: undefined,
    tools: [
      {name: 'Python', logo: `${process.env.PUBLIC_URL}/icons/Python.png`},
      {name: 'Pandas', logo: `${process.env.PUBLIC_URL}/icons/Pandas.png`}
    ],
    images: [
      {url: `${process.env.PUBLIC_URL}/DSUCSBProject/DSUCSB1.JPG`},
      {url: `${process.env.PUBLIC_URL}/DSUCSBProject/DSUCSB2.JPG`},
      {url: `${process.env.PUBLIC_URL}/DSUCSBProject/DSUCSB3.png`}
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
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur undefineda deserunt vel. Iusto corrupti dicta.',
    results: 
      'ededededede',
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
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur undefineda deserunt vel. Iusto corrupti dicta.',
    results: 
      'ededededede',
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
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur undefineda deserunt vel. Iusto corrupti dicta.',
    results: 
      'ededededede',
    demo: undefined,
    tools: [],
    images: [
      {url: `${process.env.PUBLIC_URL}/wenliangInitiative/wenliang1.jpg`},
      {url: `${process.env.PUBLIC_URL}/wenliangInitiative/wenliang2.jpg`},
      {url: `${process.env.PUBLIC_URL}/wenliangInitiative/wenliang3.png`},
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
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur undefineda deserunt vel. Iusto corrupti dicta.',
    results: 
      'ededededede',
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
    title: 'Challenging Descartes’ Distinction of Intellect and Imagination',
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
  