const mongoose=require('mongoose');
const shortid=require('shortid')
const schema=mongoose.Schema;
const user_schema=new schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    username:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        required:[true,"email is required"]     
    },
    password:{
        type:String
    },
    state:{
        type:Boolean,
        default:false
    },
    slug:{
        type:String,
        lowercase:true
    },
    image:String,
    
})
const user_model=mongoose.model('users',user_schema)
module.exports=user_model;