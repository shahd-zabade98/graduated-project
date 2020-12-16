const pool = require("../../config/database");
module.exports = {
    create: (data, callBack) =>{
     
        //var checkusername=data.user_name;


        pool.query(
            `insert into users (userName, email , password)
                          value(? , ? , ? )` , [
                              data.user_name,
                              data.email,
                              data.password
                          ], function (error,results,fields)  {
            if(error){
                return callBack(error);
            }
            return callBack(null , results);

        }
      );
   
    
        
    
    },
    getUsersByUserName : (user_name, callBack)  =>{
        pool.query(
            'SELECT * FROM users WHERE username = ?' ,[user_name],  function (error, results, fields) {
                if (error) {
                    return callBack(error);
                  }
                    return callBack(null,results[0] );
                
            });

        }          
    
};