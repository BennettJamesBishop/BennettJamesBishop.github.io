import React from 'react';
import './App.css';
function App() {
  return (
    <div className="App">
    <div class='flex-row'>
      <header className="App-header">
      <div><img className='personal-photo' src={'FamilyPic.JPG'} alt={`${'familypic'}`} /></div>
        <h1>Bennett Bishop</h1> 
        <p>Hi! My name is Bennett Bishop. I am a third year student at UC Santa Barbara studying Statistics and Data Science, 
        Philosophy, and Technology Management. Apart from that, I am a pianist, rugby player, software developer, data analyst, and more!
        Thanks for checking out my site.</p>
       
      </header>
      </div>
      <main>
      <ResumeSection />
        <Section
          id="project1"
          title="Project 1"
          description="Description of Project 1"
          images={[
            'familyPic.JPG',
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150'
          ]}
        />
        <Section
          id="project2"
          title="Project 2"
          description="Description of Project 2"
          images={[
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150'
          ]}
        />
        <Section
          id="project3"
          title="Project 3"
          description="Description of Project 3"
          images={[
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150'
          ]}
        />
        <Section
          id="project4"
          title="Project 4"
          description="Description of Project 4"
          images={[
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150'
          ]}
        />
      </main>
    </div>
  );
}

function Section({ id, title, description, images }) {
  return (
    <section id={id} className="project-section">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="image-gallery">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`${title} image ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

function ResumeSection() {
  return (
    <section className="resume-section">
     <div className="resume-display">
     <iframe title='resume' src="resume.pdf" />
    </div>
    <div> <h2>My Resume</h2>
    <p>Take a look at my resume</p></div>
     
    </section>
  );
}



export default App;
