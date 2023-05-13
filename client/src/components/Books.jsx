import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
const Books=()=> {
  const { id } = useParams();
  const [author, setAuthor] = useState({});
  const [bookData, setBookData] = useState({ title: '', numberOfPages: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);
   //GET ONE AUTHOR
   useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        setAuthor(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id, refresh]);

  // GET DATA FROM INPUTS
  const changeHandler = (e) => {
    setBookData({
      ...bookData,//pudh data
      [e.target.name]: e.target.value,
    });
  };

  // CREATE NEW BOOK
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/book/author/${id}`, bookData)
      .then((res) => {
        setRefresh(!refresh);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }


  return (
    <>
    <Link to="/">Home</Link>
      <h2>{author.name}</h2>
      <h2>Author Books</h2>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Title Book</th>
            <th>Number Of Pages</th>
          </tr>
        </thead>
        <tbody>
          {author.books.map((book) => {
            return (
              <tr key={book?._id}>
                <td style={{color: "#9545FF"}}>{book?.title}</td>
                <td>
                {book?.numberOfPages}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2>Add New Book</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            onChange={changeHandler}
            value={bookData.title}
          />
        </div>
        <div>
          <label htmlFor="">Number Of Pages</label>
          <input
            type="number"
            name="numberOfPages"
            onChange={changeHandler}
            value={bookData.numberOfPages}
          />
        </div>
        <input type="submit" value="Add Book" />
      </form> 
    </>
  )
}

export default Books