import logo from './logo.svg';
import './App.css';
import Fnav from './Components/Fnav/Fnav';
import Snav from './Components/Snav/Snav';
import Tnav from './Components/Tnav/Tnav';
import ImageSlider from './Components/imageSlider/ImageSlider';
import Home from './Components/Home/Home';



function App() {
  return (
    <div className="App">
      <Fnav/>
      <Snav/>
      <Tnav/>
      <ImageSlider/>
      <Home/>
      
     
    </div>
  );
}

export default App;
