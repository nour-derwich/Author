import axios from 'axios';
import React ,{useState ,useEffect} from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import ListAuthor from './ListAuthor';
function Index() {

  const navigate = useNavigate();
    const[authors,setAuthors]=useState([]);
  
    const[isLoading,setIsLoading]=useState(true);

useEffect(()=>
{
  axios
  .get('http://localhost:8000/api/authors/')
      .then((res) => {
        setAuthors(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

},[]);


    if(isLoading)
    {
      return <div>Loading...</div>
    }
  return (
    <>
    <h1>Favorate Authors</h1>
    <p>We Have Quotes by:</p>
<Link to='/new'>Add New Auther</Link>

<ListAuthor authors={authors} setAuthors={setAuthors}/>

    </>
  )
}

export default Index