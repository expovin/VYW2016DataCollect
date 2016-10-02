'use strict';

angular.module('VYW2016Survey')
        .constant("port","3000")
        //.constant("server","10.65.6.19")       
         .constant("server","192.168.0.106")  
       // .constant("baseURL","http://10.65.6.19:3000/")

        .factory('userFactory',['$resource', 'port', 'server', function($resource,port,server) {          
    
            var userfac = {};
            var Res={};
            var Profile = '';

                userfac.getUserByQR = function(){
                    return $resource("http://"+server+":"+port+"/users/:QRCode", null, {'update': { method:'PUT' }} );
                }; 

                userfac.saveDoc = function(){
                    return $resource("http://"+server+":"+port+"/users/:QRCode", null, {'update': { method:'PUT' }} );
                };  

                userfac.getUserBySC = function(){
                    return $resource("http://"+server+":"+port+"/users/short/:sc");
                };  

                userfac.setResponse = function(response) {
                    Res = response;
                };

                 userfac.getResponse = function(){
                    return Res;
                 }

                 userfac.setResult = function(result) {
                    Profile = result;
                 };

                 userfac.getResult = function(){
                    return(Profile);
                 };

                return userfac;
        }])

;
