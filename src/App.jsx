import reactLogo from './assets/react.svg';
import './App.css';
import FirstComp from './components/FirstComp';
import SecondComp from './components/SecondComp';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ThirdComp from './components/ThirdComp';
import FourthComp from './components/FourthComp';
import FifthComp from './components/FifthComp';
import SixthComp from './components/SixthComp';
function App() {
  Aos.init({
    duration: 1000,
  });
  return (
    <>
      <FirstComp />
      <SecondComp />
      <ThirdComp />
      <FourthComp />
      <FifthComp />
      <SixthComp />
    </>
  );
}

export default App;
