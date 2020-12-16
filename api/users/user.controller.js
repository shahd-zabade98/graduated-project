
const { create, getUsersByUserName } = require("./user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const {sign} = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//const { body, validationResult } = require("express-validator");
const Joi = require('joi');
const pool = require("../../config/database");

function validateUser(user){
    const userSchema = Joi.object().keys({
    user_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required()
  });
  return Joi.validate(user, userSchema);
} 
module.exports ={
   createUser: (req, res) =>{
    const {error} = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password , salt);
        
    
      
      
    
       
       
       create(body , ( err,results) => {  

        
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

    loginUser : (req, res) =>{ 
       // var userName= req.body.user_name;
       //var password = req.body.password;
        //const body = req.body;
       // const salt = genSaltSync(10);
        //body.password = hashSync(body.password , salt);
        //var password = body.password;
    const body= req.body;
    getUsersByUserName(body.user_name,(err,results) =>{
      if(err){
        console.log(err);
      }
      if(!results){
       return res.json({
          "success":0,
          data:"invalid username"
          
     });
      }
      const result = compareSync(body.password,results.password);
      if(result){
        //result.password = undefined;
        const jsontoken = sign({result:results},process.env.JWT_KEY,function(err,jsontoken){
          res.status(200).json({
            success : 1,
            message : "login successfully",
            token: jsontoken
          });
        }) ;
      
      
    } else {
       res.status(401).json({
        success :0,
        data: "invalid username or password"
      });
    }
     });
    }
  };
       /* pool.query('SELECT * FROM users WHERE userName = ?',[userName], function (error, results, fields) {
          if (error) {
            res.send({
              "code":400,
              "failed":"error ocurred"
            });
          }else{
            if(results.length >0){
                bcrypt.compare(password, results[0].password, function(err, isMatch) {
                    if (err) {
                      throw err
                    } else if (!isMatch) {
                      console.log("Password doesn't match!");
                      res.send({
                        "code":204,
                        "success":"userName and password does not match",
                        
                   });
                    } else {
                      console.log("Password matches!");
                      res.send({
                        "code":200,
                        "success":"login sucessfull",
                        
                      });
                    }
                  });
                /*const comparision =  bcrypt.compare(password, results[0].password);
                if(comparision){
                  
                  res.send({
                    "code":200,
                    "success":"login sucessfull",
                    "data1": results[0].password,
                    "data2": password
                  });
              }
              else{
                res.send({
                     "code":204,
                     "success":"userName and password does not match"
                });
              }
            }
            else{
              res.send({
                "code":206,
                "success":"username does not exits"
                  });
            }
          }
          });
    }*/
  





 
