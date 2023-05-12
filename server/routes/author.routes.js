const authorController= require("../controllers/auther.controller")
module.exports = app => {

    app.get('/api/authors', authorController.findAllAuthor);

    app.post('/api/authors', authorController.createAuthor);
    app.get('/api/authors/:id', authorController.findOneAuthor);
    app.put('/api/authors/:id', authorController.updateExistingAuthor);
    app.delete('/api/authors/:id', authorController.deletExistingAuthor);
    //add book
    app.put('/api/book/author/:id',authorController.addBook);
   

}