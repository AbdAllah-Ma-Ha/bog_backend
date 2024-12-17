const blog_model=require('../model/blog_model');
const user_model=require('../model/user_model');
exports.create_blog=async(req,res)=>{
    const title=req.body.title;
    const body=req.body.body;
    const user_id=req.user_id;
    const image=req.body.image;
    if(title.trim()=="" || body.trim()=="")
    {
    return res.json({
        msg:"please , enter title or body",
        state:0
    })
    }
    await blog_model.create({
        title:title,
        body:body,
        date:new Date(),
        image:image,
        user_id:user_id
    }).then((data)=>{
        res.json({
            msg:"blog added successfully",
            data:data,
            state:1
        })
    }).catch(err=>{
        console.log(err)
    })
}
exports.get_all_blogs=async(req,res)=>{
const blogs=await blog_model.find();
if(blogs)
{
return res.json({
    msg:"success to find all blogs",
    data:blogs,
    state:1
})
}
else{
    return res.json({
        msg:"failed to find all blogs",
        data:[],
        state:0
    })
}
}
exports.getbyid=async(req,res)=>{
    const get=await blog_model.findById(req.params.id).then((get)=>{
        res.json({
            msg:"find succefully",
            data:get
        })
    })
}
exports.update_blog=async(req,res)=>{
    const update=await blog_model.findByIdAndUpdate(req.params.id,{ state:true,
        body:req.body.body,
        title:req.body.title
     }).then((update)=>{
        res.json({
            msg:"update successfully",
            data:update,
            state:1
        })
    }).catch(err=>{
        console.log(err)
    })
}
exports.delete_blog=async(req,res)=>{
    const title=req.body.title
    const deleted=await blog_model.findOneAndDelete(req.params.id).then((data)=>{
        res.json({
            msg:"delete successfully",
            data:[],
            state:1
        })
    }).catch(err=>{
        console.log(err)
    })
}