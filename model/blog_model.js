const mongoose=require('mongoose');
const shortid=require('shortid');
const schema=mongoose.Schema;
const blog_schema=new schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    title:{
        type:String
    },
    body:{
        type:String
    },
    date:{
        type:Date
    },
    user_id:{
        type:mongoose.Schema.Types.String,
        ref:"user_model"
         },
    image:{
        type:String
    },
    state:{
        type:Boolean,
        default:false
    }
})
const blog_model=mongoose.model('blogs',blog_schema)
module.exports=blog_model;