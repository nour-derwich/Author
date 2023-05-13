import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function Edit() {
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    //GET ONE AUTHOR
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/authors/'+id)
      
      .then((res) => {
        setName(res.data.name);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/authors/${id}`, { name })
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        const errResponse = err.response.data.errors;
        const errObj = {};
        for (const key of Object.keys(errResponse)) {
          errObj[key] = errResponse[key].message;
        }
        setErrors(errObj);
      });
  };
  return (
    <>
    <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <p>{errors.name}</p>
        </div>
        <div>
          <Link to="/">Cancel</Link>
          <input type="submit" value="Submit" />
        </div>
      </form>
    
    
    </>
  )
}

export default Edit