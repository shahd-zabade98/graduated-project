const pool = require("../../config/database");
const checkAuthMiddleware = require("../../middleware/check-auth");
module.exports = {
    savePost: (data, callBack) =>{
     
        //var checkusername=data.user_name;
        

        pool.query(
            `insert into posts (user_id, content , image)
                          value( ?,? , ? )` , [
                              data.user_id,
                              data.content,
                              data.image
                          ], function (error,results,fields)  {
            if(error){
                return callBack(error);
                
            }
            return callBack(null , results);

        }
      );
    },
    updatePost:(data, callBack)=>{
       // const user_id = 35;
        pool.query('update posts set  content=? , image=? where id =? AND user_id=? ',[
            
            data.content,
            data.image,
            data.id ,
            data.user_id
        ],function (error, results, fields) {
            if(error){
                return callBack(error);
            }
                
            return callBack(null , results);
                    
            }
    
        );
   
    
        
    },
    deletePost:(data, callBack)=>{
        // const user_id = 35;
         pool.query('delete from posts  where id =? AND user_id=39 ',[ data.id ],function (error, results, fields) {
             if(error){
                 return callBack(error);
             }
                 
             return callBack(null , results);
                     
             }
     
         );
    
     
         
     }
};