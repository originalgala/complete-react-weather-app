import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo"/>
      
      </div> <footer> Coded by Galaletsang Tlholoe and is <a href="https://github.com/originalgala/complete-react-weather-app"
      target="_blank" rel="noopener noreferrer" >
        open-sourced on Github</a>
      </footer>
    </div>
  );
}


