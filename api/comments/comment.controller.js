const { saveComment,updateComment, deleteComment} = require("./comment.service");
const validator = require('fastest-validator');



module.exports ={

    UserComment: (req, res) =>{
       
        const body = req.body;
        saveComment(body , ( err,results) => {  
 
         
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
    UpdateComment:(req,res) =>{
        
        const body= req.body;
        updateComment(body,(err,results)=>{
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
    DeleteComment:(req,res) =>{
        const body= req.body;
        deleteComment(body,(err,results)=>{
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
                message:"Comment deleted successfully",
                data: results
            });
        });
    }
};