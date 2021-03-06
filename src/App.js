// import logo from './logo.svg';
import Hi from './components/Hi';
import './App.css';

function App() {
  return (
    <div className="app">
       <strong><Hi name= "Abdul Samad"/></strong>
        <h6>Frontend Developer</h6>
        <p>Expert in:</p>
        <ol>
          <li>HTML5</li>
          <li>CSS3
            <ul>
              <li>Bootstrap</li>
            </ul>
          </li>
          <li>JavaScript
            <ul>
              <li>ReactJs</li>
              <li>Redux</li>
              <li>React Redux</li>
            </ul>
          </li>
        </ol>
    </div>
  );
}

export default App;
