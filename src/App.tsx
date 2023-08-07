import './App.css';
import{BrowserRouter,Route,Routes,Link}from'react-router-dom'
import PostData from '../src/Components/PostData';
import GetData from '../src/Components/GetData';
import PutData from '../src/Components/PutData';
import DeleteUser from '../src/Components/DeleteUser';
import Homepage from './Components/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/post' element={<PostData/>}/>
      <Route path='/get' element={<GetData/>}/>
      <Route path='/put' element={<PutData/>}/>
      <Route path='/deletedata' element={<DeleteUser/>}/>
    </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
