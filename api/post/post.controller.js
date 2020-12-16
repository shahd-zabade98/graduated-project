const { savePost, updatePost, deletePost} = require("./post.service");
const checkAuthMiddleware = require("../../middleware/check-auth");
const validator = require('fastest-validator');

const schema ={
    content :{type :"string", optional:false},
    image :{type:"string", optional:false}
};

module.exports ={

    UserPost: (req, res) =>{
       const post  ={
           user_id: req.body.id,
           content:req.body.content,
           image: req.body.image
             
       };
       //console.log(req.userData);
       const v =new validator();
       const validationResponse =v.validate(post,schema);
       if(validationResponse !=true){
           res.status(400).json({
              message: "validation failed",
              errors: validationResponse
           });
       }
        const body = req.body;
        savePost(body , ( err,results) => {  
 
         
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
               success:1 ,
               data: results 
            });
        });
    },
    UpdatePost:(req,res) =>{
        const post  ={
            
            content:req.body.content,
            image: req.body.image,
            id:req.body.id,
            user_id:req.body.user_id
        };
        const v =new validator();
        const validationResponse =v.validate(post,schema);
        if(validationResponse !=true){
            res.status(400).json({
               message: "validation failed",
               errors: validationResponse
            });
        }
        const body= req.body;
        updatePost(body,(err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                message:"updated successfully",
                data: results
            });
        });
    },
    DeletePost:(req,res) =>{
        const body= req.body;
        deletePost(body,(err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                   success: 0,
                   message : "record not found"
                });
            }
            return res.json({
                success:1,
                message:"post deleted successfully",
                data: results
            });
        });
    }
 
    };