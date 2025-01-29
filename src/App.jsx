import { useState, useEffect, useRef } from 'react'

import './App.css'
import images from './images/newPP.png'

import Close from './images/close.png'
import Menu from './images/menu.png'

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// ---------About-------------
import Skills from './About/Skills';
import Education from './About/Education';
import Achievements from './About/Achievements';
// ----------project videos-------------
import NetflixClone from './playbackVideos/NetflixClone.jsx';
import YoutubeClone from './playbackVideos/YoutubeClone.jsx';
import Game from './playbackVideos/Game.jsx';
import Form_user from './Form_user.jsx';
import Resume from './images/Resume.pdf';

// -------------Achievements--------------
import image1 from './images/roots.jpg';
import image2 from './images/solidworks.jpeg'
import image3 from './images/zoho.jpg'
import image4 from './images/novitech.png'



function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {      
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openmenu = () => setIsMenuOpen(true);
  const closemenu = () => setIsMenuOpen(false);

  // ----------------projects scroll-----------------

  const projects_scrollRef = useRef(null);

  const projects_scroll = (direction) => {
    if (projects_scrollRef.current) {
      const { scrollLeft, clientWidth } = projects_scrollRef.current;
      const scrollAmount = clientWidth;
      projects_scrollRef.current.scrollTo({
        left: direction === 'right' ? scrollLeft + scrollAmount : scrollLeft - scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const services_scrollRef = useRef(null);

  const services_scroll = (direction) => {
    if (services_scrollRef.current) {
      const { scrollLeft, clientWidth } = services_scrollRef.current;
      const scrollAmount = clientWidth;
      services_scrollRef.current.scrollTo({
        left: direction === 'right' ? scrollLeft + scrollAmount : scrollLeft - scrollAmount,
        behavior: 'smooth',
      });
    }
  };


    const achievements_scrollRef = useRef(null);

    const achievements_scroll = (direction) => {
      if (achievements_scrollRef.current) {
        const { scrollLeft, clientWidth } = achievements_scrollRef.current;
        const scrollAmount = clientWidth;
        achievements_scrollRef.current.scrollTo({
          left: direction === "right" ? scrollLeft + scrollAmount : scrollLeft - scrollAmount,
          behavior: "smooth",
        });
      }
    };
  

  

  return (
    <>
      <div className="my-font-class">
      {/* <div className='container'> */}
          <div id='home'>
          <nav>
            <ul id='sidemenu' style={{
                right: isMenuOpen ? "0" : "-200px",
                transition: "0.3s ease",
              }} >
              <li><a href="#home"><button onClick={closemenu}>Home</button></a></li>
              <li><a href="#about"><button onClick={closemenu}>About</button></a></li>
              <li><a href="#services"><button onClick={closemenu}>Services</button></a></li>
              <li><a href="#projects"><button onClick={closemenu}>Projects</button></a></li>
              <li><a href="#achievements"><button onClick={closemenu}>Achievements</button></a></li>
              <li><a href="#contact"><button onClick={closemenu}>Contact</button></a></li>
              
              <a className='download1 btn2' href={Resume} download onClick={closemenu}>
              <button className='download2'>Download CV</button>
              </a>
              <img src={Close} onClick={closemenu} className='close'alt="" />
            </ul>
            <img src={Menu} onClick={openmenu} className='menu' alt="" />
          </nav>
          </div>
          
        
        <p className='intro'>Hi, I'm <span className='name'>T</span>hirumalaivasan</p>
        <p className='intro2'><span className='name'>F</span>ull Stack Developer</p>
    </div>

      {/* ---------------ABOUT ME------------------------- */}

      <div className="my-font-class" id="about">
        <div className="container1">
          <div className="row">
            <div className="about-col-1">
              <img src={images} style={{height:"300px",borderRadius:"10px",marginLeft:"10%"}}/>
            </div>
            <div className="about-col-2">
              <h1 className='about-title' style={{fontSize:"x-large"}}>About Me</h1>
              <p className='description' style={{width:"100%"}}>Welcome to my portfolio! I am Thirumalaivasan N, an aspiring Mechatronics Engineer. This website is designed to showcase my skills, projects, and achievements. With hands-on experience in programming, web development, and engineering projects, I have developed a strong foundation in both technical and creative domains. Explore my portfolio to learn more about my journey, accomplishments, and how I aim to contribute meaningfully to the field of engineering and technology.</p>

          <Router>
            <div className="tab-titles">
              <NavLink to="/" className={({ isActive }) => 
              isActive ? "tab-links active-tab" : "tab-links"
              }end><p>Skills</p></NavLink>

              <NavLink to="/education" className={({ isActive }) => 
              isActive ? "tab-links active-tab" : "tab-links"
              }><p>Education</p></NavLink>

              <NavLink to="/achievements" className={({ isActive }) => 
              isActive ? "tab-links active-tab" : "tab-links"
              }><p>Achievements</p></NavLink>
            </div>

              <Routes>
                <Route path="/" element={<Skills></Skills>}></Route>
                <Route path="/education" element={<Education />}></Route>
                <Route path="/achievements" element={<Achievements />}></Route>
              </Routes>
          </Router>
              
              
            </div>
          </div>
        </div>
      </div>

    {/* ---------------------Services---------------------- */}

    <div className="services my-font-class" id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="scroll-buttons">
          <button className="slider-button" onClick={() => services_scroll('left')}>&lt;</button>
          <button className="slider-button" onClick={() => services_scroll('right')}>&gt;</button>
        </div>
        <div className="services-list" ref={services_scrollRef} 
        style={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: "16px",
          padding: "10px",
          width: "100%", 
          boxSizing: "border-box",
        }}>
          <div className="service-item">
            <img src="https://img.icons8.com/ios7/512w/FFFFFF/internet.png" alt="Web Development" />
            <h2>Web Development</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <a href="#" style={{ textDecoration: "underline", color: "wheat" }}>Learn more</a>
          </div>

          <div className="service-item">
            <img src="https://img.icons8.com/Dusk_Wired/512/FFFFFF/solidworks.png" alt="SolidWorks" />
            <h2>SolidWorks</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <a href="#" style={{ textDecoration: "underline", color: "wheat" }}>Learn more</a>
          </div>

          <div className="service-item">
            <img src="https://img.icons8.com/p1em/512w/FFFFFF/sheets.png" alt="SolidWorks" />
            <h2>MERN Stack</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <a href="#" style={{ textDecoration: "underline", color: "wheat" }}>Learn more</a>
          </div>

          <div className="service-item">
            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="SolidWorks"/>
            <h2>JAVA</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <a href="#" style={{ textDecoration: "underline", color: "wheat" }}>Learn more</a>
          </div>

          <div className="service-item">
            <img src="https://png.pngtree.com/png-clipart/20230609/ourmid/pngtree-logo-html-css-icone-and-png-image_7123436.png" alt="SolidWorks" style={{height:"70px"}}/>
            <h2>HTML & CSS</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <a href="#" style={{ textDecoration: "underline", color: "wheat" }}>Learn more</a>
          </div>

          <div className="service-item">
          <img src="https://www.freeiconspng.com/uploads/github-icon-9.png" alt="SolidWorks" style={{height:"70px"}}/>
            <h2>GitHub</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <a href="#" style={{ textDecoration: "underline", color: "wheat" }}>Learn more</a>
          </div>

          <div className="service-item">
            <img src="https://img.icons8.com/?size=512&id=40670&format=png" alt="SolidWorks" />
            <h2>C language</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <a href="#" style={{ textDecoration: "underline", color: "wheat" }}>Learn more</a>
          </div>

          <div className="service-item">
            <img src="https://img.icons8.com/color/512/python.png" alt="SolidWorks" />
            <h2>Basics of Python</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <a href="#" style={{ textDecoration: "underline", color: "wheat" }}>Learn more</a>
          </div>

          <div className="service-item">
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-1-pack-logos-icons-3030025.png" alt="SolidWorks" />
            <h2>LeetCode</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <a href="#" style={{ textDecoration: "underline", color: "wheat" }}>Learn more</a>
          </div>
          
        </div>
      </div>
    </div>


      {/* --------------My work------------------ */}

      <div className='my-font-class portfolio' id='projects'>
      <div className='container'>
        <h1 className='sub-tittle'>My Work</h1>
        <div className="slider-buttons">
          <button className="slider-button" onClick={() => projects_scroll('left')}>&lt;</button>
          <button className="slider-button" onClick={() => projects_scroll('right')}>&gt;</button>
        </div>
        <div className="work-list" ref={projects_scrollRef} 
        style={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: "16px",
          padding: "10px",
          width: "100%", 
          boxSizing: "border-box",
        }}>
          <div className="work">
            <NetflixClone />
            <div className='layer'>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a style={{ textDecoration: "none", color: "inherit" }} href="https://github.com/THIRUMALAIVASAN1209/Netflix-Clone" target="_blank" rel="noopener noreferrer">
                        <h3>Netflix Clone</h3>
                      </a>
                    </td>
                    <td>
                      <a href="https://github.com/THIRUMALAIVASAN1209/Netflix-Clone" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="" style={{ height: "35px", width: "40px", paddingLeft: "10px" }} />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>This project is mainly focused on the design of the Netflix Home page by using HTML and CSS</p>
            </div>
          </div>
          <div className="work">
            <YoutubeClone />
            <div className='layer'>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a style={{ textDecoration: "none", color: "inherit" }} href="https://github.com/THIRUMALAIVASAN1209/Youtube-clone" target="_blank" rel="noopener noreferrer">
                        <h3>Youtube Clone</h3>
                      </a>
                    </td>
                    <td>
                      <a href="https://github.com/THIRUMALAIVASAN1209/Youtube-clone" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="" style={{ height: "35px", width: "40px", paddingLeft: "10px" }} />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>This project is mainly focused on the design of Youtube theme by using HTML and CSS</p>
            </div>
          </div>
          <div className="work">
            <Game />
            <div className='layer'>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a style={{ textDecoration: "none", color: "inherit" }} href="https://github.com/THIRUMALAIVASAN1209/Rock-paper-Scissors" target="_blank" rel="noopener noreferrer">
                        <h3>Rock Paper Scissor Game</h3>
                      </a>
                    </td>
                    <td>
                      <a href="https://github.com/THIRUMALAIVASAN1209/Rock-paper-Scissors" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="" style={{ height: "35px", width: "40px", paddingLeft: "10px" }} />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>This project is created by using HTML, CSS and JavaScript</p>
            </div>
          </div>
          
          <div className="work">
            <NetflixClone />
            <div className='layer'>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a style={{ textDecoration: "none", color: "inherit" }} href="https://github.com/THIRUMALAIVASAN1209/Netflix-Clone" target="_blank" rel="noopener noreferrer">
                        <h3>Netflix Clone</h3>
                      </a>
                    </td>
                    <td>
                      <a href="https://github.com/THIRUMALAIVASAN1209/Netflix-Clone" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="" style={{ height: "35px", width: "40px", paddingLeft: "10px" }} />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>This project is mainly focused on the design of the Netflix Home page by using HTML and CSS</p>
            </div>
          </div>

          <div className="work">
            <NetflixClone />
            <div className='layer'>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a style={{ textDecoration: "none", color: "inherit" }} href="https://github.com/THIRUMALAIVASAN1209/Netflix-Clone" target="_blank" rel="noopener noreferrer">
                        <h3>Netflix Clone</h3>
                      </a>
                    </td>
                    <td>
                      <a href="https://github.com/THIRUMALAIVASAN1209/Netflix-Clone" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="" style={{ height: "35px", width: "40px", paddingLeft: "10px" }} />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>This project is mainly focused on the design of the Netflix Home page by using HTML and CSS</p>
            </div>
          </div>

        </div>
      </div>
    </div>  

    {/* ---------------My Achievements-------------- */}

    <div className="my-font-class achievements">
      <div className="achievements">
        <h1 className="sub-title">My Achievements</h1>

        <div className="scroll-buttons">
          <button className="slider-button" onClick={() => achievements_scroll("left")}>&lt;</button>
          <button className="slider-button" onClick={() => achievements_scroll("right")}>&gt;</button>
        </div>

        <div
          className="achievements-list"
          ref={achievements_scrollRef}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: "16px",
            padding: "10px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div className="achievements-item" >
            <img src={image1} alt="Roots Industries"/>
            <h3>Roots Industries</h3>
            <p>Gifted a professional artwork to Roots Industries' director during a motivational event.</p>
            <a href="#" style={{ textDecoration: "underline", color: "wheat" }}>Learn more</a>
          </div>

          <div className="achievements-item" >
            <img src={image2} alt="SolidWorks Certification" />
            <h3>SolidWorks International Certification</h3>
            <p>Earned an internationally recognized certification in SolidWorks CAD Design, reflecting my proficiency in 3D modeling and engineering design.</p>
            <a href="#" style={{ textDecoration: "underline", color: "wheat" }}>Learn more</a>
          </div>

          <div className="achievements-item">
            <img src={image3} alt="ZOHO Co-Founder" />
            <h3>Co-Founder of Zoho Corporation</h3>
            <p>Presented a personalized artwork to Mr. Sridhar Vembu, Co-Founder of Zoho Corporation, during an entrepreneurship forum at Kongu Engineering College.</p>
            <a href="#" style={{ textDecoration: "underline", color: "wheat" }}>Learn more</a>
          </div>

          <div className="achievements-item">
            <img src={image4} alt="NoviTech Internship"/>
            <h3>Internship at NoviTech Pvt Ltd</h3>
            <p>Completed a one-month full-stack development internship, gaining hands-on experience in modern web technologies and application development.</p>
            <a href="#" style={{ textDecoration: "underline", color: "wheat" }}>Learn more</a>
          </div>
        </div>
      </div>
    </div>

    



    {/* -----------contact----------- */}

    <div className="contact my-font-class" id='contact'>
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="contact-title">Contact Me</h1>
            <table>
              <tbody>
              <tr>               
                <td><img style={{height:"30px",marginRight:"5px",marginBottom:"-10px"}} src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/email-envelope-line-white-icon.png" alt="" /></td>
                <td><p>thirumalaivasann.22mts@kongu.edu</p></td>
              </tr>
              </tbody>
            </table>
            <table>
              <tbody>
              <tr>
                <td><img className='phone'  src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/phone-call-white-icon.png" alt="" /></td>
                <td><p>+91-8668125089</p></td>
              </tr>
              </tbody>
            </table>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/thiru1209/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" /></a>
              <a href="https://github.com/THIRUMALAIVASAN1209" target="_blank"><img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt=""/></a>
              <a href="https://www.instagram.com/thiru_art_1209/?next=%2F" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png" alt=""/></a>
                
            </div>
            
          </div>

          <Form_user />


        </div>
      </div>
    </div>
    
    

    <footer className='my-font-class'>
      <p>© Copyright - 2025</p>
    </footer>

    </>
  )
}

export default App