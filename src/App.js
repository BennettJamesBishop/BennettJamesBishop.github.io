import React from 'react';
import './App.css';
function App() {
  return (
    <div className="App">
    <div class='flex-row'>
      <header className="App-header">
        <h1>Bennett Bishop</h1> 
        <p>Hi! My name is Bennett Bishop. I am a third year student at UC Santa Barbara studying Statistics and Data Science, 
        Philosophy, and Technology Management. Apart from that, I am a pianist, rugby player, software developer, data analyst, and more!
        Thanks for checking out my site.</p>
       
     <img className='personal-photo' src={'self_photo.JPG'} alt={`${'self_photo'}`} />
      </header>
      </div>
      <main>
      <ResumeSection />
      <Section
          id="Machine Learning Project"
          title="UFC Fight Prediction Machine Learning Project"
          description="This is my machine learning project, which uses UFC dat to predict the outcome of UFC fights!"
          images={[
            'mlpic1.png',
            'mlpic2.png',
          ]}
        />
        <Section
          id="Data Science UCSB"
          title="Data Science UCSB"
          description="This is my project for Data Science Club. Using Python, GIS Data, and simmulated annealing, we optimized public transport in the San Diego area."
          images={[
            './DSUCSBProject/DCUCSB1.JPG',
            './DSUCSBProject/DCUCSB2.JPG',
            './DSUCSBProject/DCUCSB3.JPG'
          ]}
        />
          <Section
          id="Brainsink"
          title="Brainsink"
          description="This is my full stack project, Brainsink!"
          images={[
            './brainsink/brainsink1.png',
            './brainsink/brainsink2.png',
          ]}
        />
        <Section
          id="The Wenliang Initiative"
          title="The Wenliang Initiative"
          description="This is The Wenliang Initative, a non-profit grocery delivery service!"
          images={[
            './wenliangInitiative/wenliang1.jpg',
            './wenliangInitiative/wenliang2.jpg',
          ]}
        />
        <Section
          id="Boy Scouts of America"
          title="Boy Scouts of America"
          description="I am an Eagle Scout! Check out some photos from my journey below."
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
