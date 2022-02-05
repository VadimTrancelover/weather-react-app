import './App.css';
import './index.css';
import  { HomepageWeather, MoreInformationPage }  from './components/pages';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomepageWeather/>}/>
        <Route exact path="/moreinformation" element={<MoreInformationPage/>}/>
      </Routes>
    </div>

  );
}

export default App;
