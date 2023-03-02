import './App.css';
import {BrowserRouter} from 'react-router-dom'
import axios from 'axios'
import Layout from './layouts'

axios.defaults.baseURL="https://jsonplaceholder.typicode.com/";

const  App=()=> {
  return (
   <BrowserRouter>
   <Layout/>
   </BrowserRouter>
  );
}

export default App;
