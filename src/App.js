import { Routes, Route } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import './index.scss'

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Directory from './components/directory/directory.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}> 
        <Route index element={<Directory />} />
      {/* <Route path='shop/*' element={<Shop />} />
       <Route path='auth' element={<Authentication />} /> 
       <Route path='checkout' element={<Checkout />} />  */}
      </Route>
    </Routes>
  );
}; 

export default App;
