import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const ListAuthor=({authors,setAuthors})=> {
     // DELETE AUTHOR
  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/api/authors/${id}`)
      .then(() => {
        console.log('Author deleted');
        // DELETE FROM DOM
        setAuthors(authors.filter((author) => author._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
 <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Authors</th>
            <th>Actions Available</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => {
            return (
              <tr key={author._id}>
                <td style={{color: "#9545FF"}}>{author.name}</td>
                <td>
                  <button className='btn btn-warning'><Link  to={`/edit/${author._id}`}>Update</Link></button> |
                  <Link to={`/details/${author._id}`}>Details</Link> |
                  <button
                    onClick={() => {
                        deleteHandler(author._id);
                      }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )
}

export default ListAuthor