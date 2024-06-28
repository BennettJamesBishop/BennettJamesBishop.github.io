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
      <UFCProjectSection />    
        <Section
          id="Data Science UCSB"
          title="Data Science UCSB"
          description="This is my project for Data Science Club. Using Python, GIS Data, and simmulated annealing, we optimized public transport in the San Diego area."
          images={[
            `${process.env.PUBLIC_URL}/DSUCSBProject/DSUCSB1.JPG`,
            `${process.env.PUBLIC_URL}/DSUCSBProject/DSUCSB2.JPG`
          ]}
        />
          <Section
          id="Brainsink"
          title="Brainsink"
          description="This is my full stack project, Brainsink! It uses React, Apollo, AWS s3, TailwindCSS, GraphQL, RedwoodJS and OpenAI,
           to make project management easier."
          images={[
            `${process.env.PUBLIC_URL}/brainsink/brainsink1.png`,
            `${process.env.PUBLIC_URL}/brainsink/brainsink2.png`,
          ]}
        />
        <Section
          id="The Wenliang Initiative"
          title="The Wenliang Initiative"
          description="This is The Wenliang Initative, a non-profit grocery delivery service I cofounded! My best
           friend and I delivered over $30,000 worth of groceries to the elderly in my community, eliminating hundreds of hours of covid exposure."
          images={[
            `${process.env.PUBLIC_URL}/wenliangInitiative/wenliang1.jpg`,
            `${process.env.PUBLIC_URL}/wenliangInitiative/wenliang2.jpg`,
          ]}
        />
        <Section
          id="Boy Scouts of America"
          title="Boy Scouts of America"
          description="I am an Eagle Scout! This was the leading accomplishment of years of volunterr work, leadership experience, and outdoor adventures. 
          Check out some photos from my journey below."
          images={[
            `${process.env.PUBLIC_URL}/boyScouts/boyScouts1.jpg`,
            `${process.env.PUBLIC_URL}/boyScouts/boyScouts2.jpg`,
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
    <p>Take a look at my resume.</p></div>
     
    </section>
  );
}

function UFCProjectSection() {
  return (
    <section className="ufc-section">
     <div> <h2>Machine Learning Project</h2>
    <p>Take a look at my Machine Learning Project. It is written in R and explores five different types machine learning models. The best model takes UFC fighter data, and predicts who will win fights with around 76% accuracy!</p></div>
     <div >
     <iframe className="ufc-display" title='ufc-project' src="UFC-Final-Project.html" />
    </div> 
    </section>
  );
}




export default App;
