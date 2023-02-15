// import './App.css';
import './Style.css'
// import './SCSS/main_sidebar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Index';
import Dashboard1 from './Dashboards/Dashboard1';
import Dashboard2 from './Dashboards/Dashboard2';
import Dashboard3 from './Dashboards/Dashboard3';
import FormGeneral from './Components/FormGeneral';
import DataTable from './Components/DataTable';
import Register from './Components/Register';
import Blog from './Components/Blog';
import Viewblog from './Components/Viewblog';
import DataFetch from './Components/DataFetch';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={(window.localStorage.getItem('id') === null) ? <Login /> : <Dashboard1 />} />
        <Route path='/home' element={(window.localStorage.getItem('id') !== null) ? <Dashboard1 /> : <Login />} /> */}

        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Dashboard1 />} /> 
        <Route path='/dashboard2' element={<Dashboard2 />} />
        <Route path='/dashboard3' element={<Dashboard3 />} />
        <Route path='/generalform' element={<FormGeneral />} />
        <Route path='/datatable' element={<DataTable />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/viewblog' element={<Viewblog/>} />
        <Route path='/datafetch' element={<DataFetch/>} />




      </Routes>
    </div>
  );
}

export default App;
