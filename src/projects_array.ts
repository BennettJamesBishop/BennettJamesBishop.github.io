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
      {url: `${process.env.PUBLIC_URL}/brainsink/brainsink1.png`},
      {url: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
    ],
    links: [],
    date: 'Jul 2023 - Present',
  },

  //Public Transport Project
  {
    title: 'Optimizing Public Transport',
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
      {url: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
    ],
    links: [
      {name: 'Github', link: 'https://github.com/BennettJamesBishop/SDPublicTransportProject'},
    ],
    date: 'Sep 2022 - May 2023',
  },

  //UFC App
  {
    title: 'UFC Prediction App',
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
      // {url: `${process.env.PUBLIC_URL}/ufcApp/ufcApp2.png`},
      // {url: `${process.env.PUBLIC_URL}/ufcApp/ufcApp3.png`}
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
      // {url: `${process.env.PUBLIC_URL}/ufcML/ufcML1.png`},
      {url: `${process.env.PUBLIC_URL}/ufcML/ufcML2.png`},
      // {url: `${process.env.PUBLIC_URL}/ufcML/ufcML3.png`}
    ],
    links: [],
    date: 'June 2024',
  },

  //The Wenliang Initiative
  {
    title: 'The Wenliang Initiative',
    objective:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur undefineda deserunt vel. Iusto corrupti dicta.',
    results: 
      'ededededede',
    demo: undefined,
    tools: [
      {name: 'Google', logo: `${process.env.PUBLIC_URL}/icons/Google.png`}
    ],
    images: [
      {url: `${process.env.PUBLIC_URL}/wenliangInitiative/wenliang1.jpg`},
      {url: `${process.env.PUBLIC_URL}/wenliangInitiative/wenliang2.jpg`},
      {url: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
    ],
    links: [
      {name: 'Local News', link: 'https://www.ksbw.com/article/2-stevenson-students-deliver-groceries-for-free-to-their-neighbors/32023134'},
      {name: 'School Article', link: 'https://stevensonschool.org/news-features-for-td/special-delivery/'}
    ],
    date: 'April 2020 - February 2021',
  },

  //Eagle Scout
  {
    title: 'Eagle Scout',
    objective:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur undefineda deserunt vel. Iusto corrupti dicta.',
    results: 
      'ededededede',
    demo: undefined,
    tools: [],
    images: [
      {url: `${process.env.PUBLIC_URL}/boyScouts/boyScouts1.JPG`},
      {url: `${process.env.PUBLIC_URL}/boyScouts/boyScouts2.JPG`},
      {url: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
    ],
    links: [
      {name: 'More Info', link: 'https://nesa.org/'},
  ],
    date: 'December 2019',
  },

  //Descartes Paper
  {
    title: 'Challenging Descartes’ Distinction of Intellect and Imagination',
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
    date: 'December 2023',
  },

    //Color Paper
    {
      title: 'Finding a Philosophically Naturalistic Account of Color',
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
      date: 'December 2023',
    },
];
  