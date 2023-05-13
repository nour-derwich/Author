
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/Index';
import AddAuther from './components/AddAuther';
import Edit from './components/Edit';
import { Route ,Routes} from 'react-router-dom';
import Books from './components/Books';
function App() {
  return (
    <Routes>
     <Route path="/" element={<Index/>}/>
     <Route path="/new" element={<AddAuther/>}/>
     <Route path="/edit/:id" element={<Edit/>}/>
     <Route path='/details/:id'element={<Books/>}/>
    </Routes>
  );
}

export default App;
