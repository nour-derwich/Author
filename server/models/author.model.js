const mongoose = require("mongoose")
const AuthorsSchrma= new mongoose.Schema(
    {
        name:
        {
        type:String,
        required: true,
        minlength: [3, " must have at least 3 chars, but you entered"]
        
        
        },
        books:[
            {
                title: {
                    type: String,
                    required: true,
                  },
                  numberOfPages: {
                    type: Number,
                    required: true,
                  },
            }
        ]

    },{ timestamps: true }
)
const Author = mongoose.model("author", AuthorsSchrma);

module.exports = Author;