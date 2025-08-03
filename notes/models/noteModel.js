const mongoose=require('mongoose');
const noteSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },

    content: {
      type: String,
      default: ''
    },
    tags: {
      type: [String],
      default: []
    },
     user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // 👈 tells MongoDB which collection to populate from
    required: true,
  },
}
)
const Note = mongoose.model('Note', noteSchema);
module.exports=Note;
