import './App.css';
import './index.css';
import  { HomepageWeather, MoreInformationPage }  from './components/pages';

import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomepageWeather/>}/>
      <Route path="/moreinformation" element={<MoreInformationPage/>}/>
    </Routes>
    </>
  );
}

export default App;
