const pool = require("../../config/database");
const {productSearch,create ,productFetch,updateProduct} = require("./product.service");



module.exports ={
    insertProduct: (req, res) =>{
        
        const body = req.body;
           
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
    productSearch : (req, res) =>{ 
        const product_label = req.params.product_label;
             productSearch(product_label, (err,results) =>{
                if (err){
                    console.log(err);
                    return;
                }
                if(results.length >0){
                   return  res.send({
                    success :1,
                    data: results
                    });
                }
                return res.send({
                    success :0,
                    data: "product does not found!"
                });
            
        });
             
             
            } ,
            productFetch : (req, res) =>{ 
                //const product_label = req.params.product_label;
                     productFetch((err,results) =>{
                        if (err){
                            console.log(err);
                            return;
                        }
                        if(results.length >0){
                           return  res.send({
                            success :1,
                            data: results
                            });
                        }
                        return res.send({
                            success :0,
                            data: "product does not found!!!!!!"
                        });
                    
                });
                     
                     
                    } ,
                        editProduct:(req,res) =>{
                            
                        const body= req.body;
                        updateProduct(body,(err,results)=>{
                            if(err){
                                console.log(err);
                                return;
                            }
                            return res.json({
                                success:1,
                                message:"updated successfully",
                                data:  results
                            });
                        });
                    }      
        };
        