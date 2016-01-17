angular.module('inspinia')
       .factory('LogIn',function($http){
        var getResult = function(username,password){
          
        var user = {
          method:'POST',
          url:'/api/login',
          data: { username :username,
                 password: password
                   }
        } 
       
        return   $http(user)
                 .then(function(response){
                    
                  return response.data;

                 });
                      
       };

       return{
           getResult:getResult

       };
       
     })
          
        
       //})
    .factory('SignUp',function($http){

        var getResult = function(username,passwd){
        var user = {
          method:'POST',
          url:'/api/signup',
          data:{ username:username,
                 password:passwd
                 
                 }
        }
        return $http(user)
               .then(function(response){
                return response.data;
               });
        };        
               return{
                getResult:getResult
               };

       })