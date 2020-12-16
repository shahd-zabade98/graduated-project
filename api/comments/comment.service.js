const pool = require("../../config/database");
module.exports = {
    saveComment: (data, callBack) =>{
     
        //var checkusername=data.user_name;
        

        pool.query(
            `insert into comments (user_id,post_id, content )
                          value( ?,? , ? )` , [
                              data.user_id,
                              data.post_id,
                              data.content
                              
                          ], function (error,results,fields)  {
            if(error){
                return callBack(error);
                
            }
            return callBack(null , results);

        }
      );
    },
    updateComment:(data, callBack)=>{
        // const user_id = 35;
         pool.query('update comments set  content=?  where id =3 AND user_id=35 ',[
             
             data.content,
             data.id 
         ],function (error, results, fields) {
             if(error){
                 return callBack(error);
             }
                 
             return callBack(null , results);
                     
             }
     
         );
    
     
         
     },
     deleteComment:(data, callBack)=>{
         // const user_id = 35;
          pool.query('delete from comments  where id =? AND user_id=39',[ data.id ],function (error, results, fields) {
              if(error){
                  return callBack(error);
              }
                  
              return callBack(null , results);
                      
              }
      
          );
     
      
          
      }
};