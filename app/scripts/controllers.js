'use strict';

angular
    .module('inspinia')
    .controller('MainCtrl', function($scope){
    	$scope.helloText = 'Welcome in SeedProject';
    	$scope.$on('LOAD',function(){
           $scope.loading=true;
           
         })
         $scope.$on('UNLOAD',function(){
           $scope.loading=false;
           
         })
         
    })
    .controller('LoginCtrl',function($scope,LogIn,$location,$timeout){


	    var	onSuccess = function(data){
	    	if(data.status == true){
	    		//$scope.msg = data.success;
	    		$scope.$emit('UNLOAD');
	    		$location.url('/index/welcome');
	    	}else{
	            $scope.msg = data.failure;
	            $scope.$emit('UNLOAD');

	            }
	    }
	    var onError = function(reason){
	    	console.log(error);
	    }

    	$scope.logIn = function(username,password){

    	 $scope.$emit('LOAD');
    	 $timeout( function() {
    		LogIn.getResult(username,password).then(onSuccess,onError)
    			},3000);

    	}

    	 
    	
    })
// signup controller
   .controller('SignUpCtrl',function($scope,SignUp,$location){
	    var	onSuccess = function(data){
	    	if(data.status == true){
	    		//$scope.msg = data.success;
	    		$location.url('/index.welcome');
	    	}else{
	            $scope.msg = data.failure;
	            }
	    }
	    var onError = function(reason){
	    	console.log(error);
	    }

    	$scope.register = function(username,passwd,confirmPasswd){
                  if(username && passwd && passwd == confirmPasswd){
                  SignUp.getResult(username,passwd).then(onSuccess,onError);}
                  else{
                        $scope.error = 'Password does\'t match ';


                  }
            }      


       })
  
  