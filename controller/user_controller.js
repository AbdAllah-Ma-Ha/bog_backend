const user_model=require('../model/user_model');
exports.signup=async(req,res)=>{
    const username=req.body.username;
    const email=req.body.email;
    const password=req.body.password;
    const user=await user_model.findOne({
        $or:[
            {username:username},
            {email:email}
        ]
    })
    if(username.trim()==""|| email.trim()==""|| password.trim()=="")
    {
    return res.json({
        msg:"please enter values of keys",
        state:0
    })
    }
    if(user)
    {
    return res.json({
        msg:"username or email is not available",
        state:0,
        data:[]
    })
    }
    await user_model.create({
        username:username,
        email:email,
        password:password
    }).then((data)=>{
        res.json({
            msg:'data is added successfully',
            data:data
        })
        
    }).catch((error)=>{
        console.log(error)
    })
}
exports.login=async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const user=await user_model.findOne({
        username:username
    })
    if(username.trim()==""||  password.trim()=="")
        {
        return res.json({
            msg:"please enter values of keys",
            state:0
        })
        }
    if(!user)
    {
    return res.json({
        msg:'sorry you are not register before',
        state:0
    })
    }
    if(password==user.password){
        res.json({
            msg:"welcome , we find your account ",
            state:1
        })
    }
    else{
        res.json({
            msg:"password incorrect",
            state:0
        })
    }
}