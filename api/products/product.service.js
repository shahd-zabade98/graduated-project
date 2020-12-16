const pool = require("../../config/database");
module.exports = {

    create: (data, callBack) =>{
     
        //var checkusername=data.user_name;


        pool.query(
            `insert into products (product_id, product_availability , product_price,product_sale_price,product_image_url,product_brand,product_description,product_name,product_url,product_label,product_catlogName,product_catalogId,product_pageName,product_pageUrl,product_supplier,product_reviews)
                          value(? , ? , ? ,? ,? ,? , ?, ?, ?, ?, ?, ?, ?,? , ?, ? )` , [
                              data.product_id,data.product_availability,data.product_price,data.product_sale_price,
                              data.product_image_url,data.product_brand,data.product_description,data.product_name,
                              data.product_url,data.product_label,data.product_catlogName,data.product_catalogId,
                              data.product_pageName,data.product_pageUrl,data.product_supplier,data.product_reviews
                          ], function (error,results,fields)  {
            if(error){
                return callBack(error);
            }
            return callBack(null , results);

        }
      );
   
    
        
    
    },
 productSearch: (product_label, callBack) =>{
     
        


        pool.query('SELECT * FROM products WHERE product_label = ? ',[product_label], function (error, results, fields) {
            if(error){
                return callBack(error);
            }
                
            return callBack(null , results);
                    
            }   
    
        );
   
    
        
    
    },
    productFetch:( callBack )=>{
     
        


        pool.query('SELECT * FROM products ', function (error, results, fields) {
            if(error){
                return callBack(error);
            }
                
            return callBack(null , results);
                    
            }
    
        );
   
    },
    updateProduct:(data, callBack)=>{
        
         pool.query('update products set product_availability=? , product_price=?,product_sale_price=?,product_image_url=?,product_brand=?,product_description=?,product_name=?,product_url=?,product_label=?,product_catlogName=?,product_pageName=?,product_pageUrl=?,product_supplier=?,product_reviews=? where product_catalogId =?  ',[
           data.product_availability,data.product_price,data.product_sale_price,
            data.product_image_url,data.product_brand,data.product_description,data.product_name,
            data.product_url,data.product_label,data.product_catlogName,
            data.product_pageName,data.product_pageUrl,data.product_supplier,data.product_reviews,data.product_catalogId
         ],function (error, results, fields) {
             if(error){
                 return callBack(error);
             }
                 
             return callBack(null , results);
                     
             }
     
         );
    
     
         
     }

};