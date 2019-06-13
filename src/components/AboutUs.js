import React from 'react'; 

export default (props) => {
   return (
       <React.Fragment>
            <img src='https://media.giphy.com/media/3o7qDWp7hxhi1N8oF2/giphy.gif' style={{maxHeight: '200px', marginTop: '80px'}} className='right' />
          <div className="col s12 m8 offset-m2 l6 offset-l3" >
        <div className="card-panel grey lighten-5 z-depth-1 ">
        <h3 className='center'>Founders of Cook With Me</h3>
          <div className="row valign-wrapper" style={{marginTop: '90px'}}>
            <div className="col s2">
              <img src={require('../assets/Mie.jpg')} alt="" className="circle responsive-img"/> 
            </div>
            <div className="col s10">
              <span className="black-text">
                
My name is Mielyn Acosta, and I am a new immigrant who was born and raised from the Philippines. 
I’m a QA Engineer for 6 years and still wanted to enhance my skills like developing the application and being innovative and try new things. 
As a developer, I realized, not only was I developing technical skills, but I was feeding my creativity. 
Right now, I’m looking to share my skill set and technological savvy with a dynamic tech company working on innovative and trendsetting technologies.

              </span>
            </div>
          </div>
          <div className="row valign-wrapper">
            <div className="col s2">
              <img src={require('../assets/Nicole.jpg')} alt="" className="circle responsive-img " /> 
            </div>
            <div className="col s10">
              <span className="black-text">
              My name is Nicole Hopkins. I was born and raised in Queens, NY. 
              I have my degree in Political Science and wanted to continue into Law School, but found a 6-figure debt daunting. I work as a paralegal, where I problem solve to help my clients navigate the legal system.
              After joining Pursuit, I have put my problem solving skills to better use by building applications to help people solve problems that matter to them.
              Now, I’m ready to take my programming skills to make web applications that can help communities on a wider scale; connecting people to resources that support their holistic health and wellness.

              </span>
            </div>
          </div>
          <div className="row valign-wrapper">
            <div className="col s2">
              <img src={require('../assets/Tarek.jpg')} alt="" className="circle responsive-img"/> 
            </div>
            <div className="col s10">
              <span className="black-text">
              Hi, my name is Tarek.  I studied computer science at the City College of New York. During College I wanted to find new for myself to solidify my software development skills and be a more marketable engineer.
              While driving for Uber, I discovered Pursuit, a 12 month program that teaches young adults with high need and potential that I can be part of a supportive community and a structured learning environment that promotes learning through problem solving and building dynamic and responsive web applications.
             Now I am looking to share my skill set for a professional community, solving problems relevant to real people in the real world, and enhance my software engineering skills

              </span>
            </div>
          </div>
          <div className="row valign-wrapper">
            <div className="col s2">
              <img src={require('../assets/Kevin.jpg')} alt="" className="circle responsive-img"/> 
            </div>
            <div className="col s10">
              <span className="black-text">
              My name is Kevin Zheng
              I’ve always had a love for engineering and innovative design and when I joined my High School Robotics Team I discovered programming. We competed and placed runner up at FIRST Tech Challenge at Javits Center.
             While studying Computer Science at Queensborough Community College and learning C++, I wanted to see the impact of what I was building.
             So I became a Full Stack Developer I am able to create designs that unite the full user experience and user interactions.

              </span>
            </div>
          </div>
        </div>
      </div>  
       </React.Fragment>
   );
}