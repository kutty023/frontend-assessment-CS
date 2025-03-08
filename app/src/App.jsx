import './App.css';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import Service from './components/service.jsx';
import Contact from './components/contact.jsx';
import Agency from './components/agency.jsx';
import CaseStudy from './components/caseStudey.jsx';
import Resource from './components/resource.jsx';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Service />
    <Agency />
    <CaseStudy />
    <Resource />
    <Contact />
    </>
  )
}

export default App
