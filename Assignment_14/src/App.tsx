
import './App.css';
import HeroImageComponent from './components/HeroImage/HeroImage';
import AboutMeComponent from './components/AboutMe/AboutMe'; // Make sure to create this component
import MyProjectsComponent from './components/MyProjects/MyProjects'; // And this one
import NavBarComponent from './components/NavBar/NavBar';// And this one
import ContactForm from './components/ContactForm/ContactForm';
import MyFooter from './components/Footer/MyFooter';
function App() {
  return (
    <>
      <NavBarComponent>
      </NavBarComponent>
      <HeroImageComponent/>
      <AboutMeComponent
       labelText='Who Am I' 
       aboutText={`As a passionate full-stack web development student at Red River College Polytechnic, I immerse myself in the intricate world of coding and digital solution creation. My journey in the realm of technology is driven by a profound enjoyment of working with computers and an innate love for problem-solving. This enthusiasm not only fuels my academic endeavors but also shapes my approach to developing innovative web solutions. Whether it's tackling front-end aesthetics or wrestling with back-end logic, my comprehensive skill set enables me to bridge the gap between user experience and functional design. I am committed to leveraging my knowledge and skills to create impactful and user-friendly web applications, aspiring to make a significant contribution to the digital landscape.`}
      />
      <MyProjectsComponent/>
      <ContactForm>
      </ContactForm>
      <MyFooter >
      </MyFooter>
    </>
  );
}

export default App;
