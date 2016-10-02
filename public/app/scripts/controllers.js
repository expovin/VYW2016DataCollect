'use strict';

angular.module('VYW2016Survey')
/*
        angular.bootstrap( document, ["VYW2016Survey", "qlik-angular"] )

          qlik.setOnError( function ( error ) {
            $( "#errmsg" ).html( error.message ).parent().show();
          } )
*/

          .controller('HeaderController', ['$scope','$rootScope','userFactory', function($scope,$rootScope,userFactory) {


          }])


        .controller('BigScreenController', ['$scope', function($scope) {
          /* 
               Connessione verso Qlik Sense Enterprise
          */
          //  var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );



        }])

        .controller('SurveyController', ['$scope','$rootScope','$state','userFactory', function($scope,$rootScope,$state,userFactory) {

          $scope.Res = userFactory.getResponse();

            $scope.profileMatrix = [
               ['NERD', 'MILLENNIAL'],
               ['SNOB','HIPPIE']
            ];

            $scope.survey = {
              title : "VYW Survey 2016",

              questions: [{
                id : 1,
                text : "PC o Mac ?",
                QRCode : "",
                choices : [{
                  id : 1,
                  img : "images/pc.png",
                  alt : "PC",
                  numq: "feedbackForm.Q1",
                  value: [1,0,0,0]
              },{
                  id : 2,
                  img : "images/iMac-icon.png",
                  alt : "Mac",
                  numq: "feedbackForm.Q1",
                  value: [0,1,0,0]
                }]
              }, {
                id : 2,
                text : "MP3 o Vinile ?",
                QRCode : "",
                choices : [{
                  id : 1,
                  img : "images/MP3.png",
                  alt : "MP3",
                  numq: "feedbackForm.Q2",
                  value: [0,1,0,0]
              },{
                  id : 2,
                  img : "images/Vinile.png",
                  alt : "Vinile",
                  numq: "feedbackForm.Q2",
                  value: [1,0,0,0]
                }]
              },{
                id : 3,
                text : "Ibiza o Pantelleria?",
                QRCode : "",
                choices : [{
                  id : 1,
                  img : "images/ibiza_icon.jpg",
                  alt : "Ibiza",
                  numq: "Q3",
                  value: [0,0,0,1]
              },{
                  id : 2,
                  img : "images/Pantelleria.png",
                  alt : "Pantelleria",
                  numq: "Q3",
                  value: [0,0,1,0]
                }]
              },{
                id : 4,
                text : "Apericena o Lume di candela ?",
                QRCode : "",
                choices : [{
                  id : 1,
                  img : "images/Apericena.png",
                  alt : "Apericena",
                  numq: "Q4",
                  value: [0,0,0,1]
              },{
                  id : 2,
                  img : "images/LumeCandela.png",
                  alt : "LumeCandela",
                  numq: "Q4",
                  value: [0,0,0,1]
                }]
              },{
                id : 5,
                text : "Uber o Taxi ?",
                QRCode : "",
                choices : [{
                  id : 1,
                  img : "images/UBER-icon.png",
                  alt : "UBER",
                  numq: "Q5",
                  value: [0,1,0,1]
              },{
                  id : 2,
                  img : "images/taxi_icon.jpg",
                  alt : "Taxi",
                  numq: "Q5",
                  value:[1,0,1,0]
                }]
              },{
                id : 6,
                text : "Quotidiano o News on Line ?",
                QRCode : "",
                choices : [{
                  id : 1,
                  img : "images/Quotidiano.jpg",
                  alt : "Quotidiano",
                  numq: "Q6",
                  value: [1,0,0,0]
              },{
                  id : 2,
                  img : "images/news_on_line.jpg.png",
                  alt : "NewsOnLine",
                  numq: "Q6",
                  value: [0,1,0,0]
                }]
              },{
                id : 7,
                text : "Kindle o Libro?",
                QRCode : "",
                choices : [{
                  id : 1,
                  img : "images/kindle.png",
                  alt : "Kindle",
                  numq: "Q7",
                  value: [0,1,0,0]
              },{
                  id : 2,
                  img : "images/books-icon.png",
                  alt : "Libro",
                  numq: "Q7",
                  value: [1,0,0,0]
                }]
              }, {
                id : 8,
                text : "Concerto live o Youtube ?",
                QRCode : "",
                choices : [{
                  id : 1,
                  img : "images/Jazz Icon.gif",
                  alt : "Concerto",
                  numq: "Q8",
                  value: [0,0,0,1]
              },{
                  id : 2,
                  img : "images/YouTube.jpg",
                  alt : "Youtube",
                  numq: "Q8",
                  value: [0,0,1,0]
                }]
              },{
                id : 9,
                text : "Cinema o Streaming ?",
                QRCode : "",
                choices : [{
                  id : 1,
                  img : "images/cinema-icon.png",
                  alt : "Cinema",
                  numq: "Q9",
                  value: [0,0,0,1]
              },{
                  id : 2,
                  img : "images/streaming.png",
                  alt : "Streaming",
                  numq: "Q9",
                  value: [0,0,1,0]
                }]
              },{
                id : 10,
                text : "Riunione o Conf call ?",
                QRCode : "",
                choices : [{
                  id : 1,
                  img : "images/meeting.png",
                  alt : "Riunione",
                  numq: "Q10",
                  value: [1,0,0,1]
              },{
                  id : 2,
                  img : "images/Conference_Call.png",
                  alt : "ConfCall",
                  numq: "Q10",
                  value:[0,1,1,0]
                }]
              },{
                id : 11,
                text : "Vela o Yacht?",
                QRCode : "",
                choices : [{
                  id : 1,
                  img : "images/boats-icon-png-13.png",
                  alt : "Vela",
                  numq: "Q11",
                  value: [1,0,1,0]
              },{
                  id : 2,
                  img : "images/yacht-and-marine21.png",
                  alt : "Yacht",
                  numq: "Q11",
                  value: [0,1,0,1]
                }]
              }]
            };
            var Answares ={};


      $scope.back = function() {
        console.log("Go back!");

                $state.go('app', {
                    url: '/',
                    views: {
                        'content@': {
                            templateUrl : 'views/Home.html',
                            controller  : 'HomeController'
                        }
                    }
                });

      }

      
          $scope.setChoiceForQuestion = function (q, c) {
             Answares[$scope.survey.questions[q-1].id]=$scope.survey.questions[q-1].choices[c-1].value;
             $scope.survey.questions[q-1]['text']=$scope.survey.questions[q-1].choices[c-1].alt;
             $scope.survey.questions[q-1]['QRCode']=$scope.Res['QRCode'];
             console.log($scope.survey.questions[q-1]);
          };


            $scope.sendFeedback = function() {
              var Digitale = 0,
                  Analogico = 0,
                  Individual= 0,
                  social = 0;


              for(var q in Answares){
                Analogico += Answares[q][0];
                Digitale += Answares[q][1];
                Individual += Answares[q][2];      
                social += Answares[q][3];        
              }

              console.log(Analogico+" "+Digitale+" "+Individual+" "+social);

              if(Analogico > Digitale)
                var R = 1;
              else
                var R = 0;

              if(Individual > social)
                var C = 0;
              else
                var C = 1;

              console.log(R+" "+C);
              console.log($scope.profileMatrix[R][C]);

              $scope.Res["Survey"] = $scope.survey;
              $scope.Res["Profile"] = $scope.profileMatrix[R][C];
              console.log($scope.Res);  

              userFactory.getUserByQR().update({QRCode:$scope.Res.QRCode}, $scope.Res);
              userFactory.setResult($scope.profileMatrix[R][C]);

                $state.go('app.Result', {
                    url: 'Result',
                    views: {
                        'content@': {
                            templateUrl : 'views/Result.html',
                            controller  : 'ResultController'
                        }
                    }
                });


            }
        }])   


    .controller('ResultController', ['$scope', '$state','userFactory', function($scope,$state,userFactory) {

      $scope.Prof  = userFactory.getResult();

      $scope.back = function() {
        console.log("Go back!");

                $state.go('app', {
                    url: '/',
                    views: {
                        'content@': {
                            templateUrl : 'views/Home.html',
                            controller  : 'HomeController'
                        }
                    }
                });

      }


    }])

    .controller('HomeController', ['$scope', '$state','userFactory', function($scope,$state,userFactory) {

          $('#Insert_manually').hide();
            
          $('#reader').html5_qrcode(function(data){

            $('#read').html(data);
            var audio = new Audio('../media/QRScanner.mp3');
            audio.play();
            

                      
                        
            userFactory.getUserByQR().query({QRCode:data})
                      .$promise.then(
                          function(response){
                              if(response[0].hasOwnProperty('Profile')) {
                                console.log('Survey gia fatta')
                                userFactory.setResponse(response[0]);
                                $state.go('app.Thanks', {
                                    url: 'Thanks',
                                    views: {
                                        'content@': {
                                            templateUrl : 'views/Thanks.html',
                                            controller  : 'SurveyController'
                                        }
                                    }
                                });                                
                              }
                              else {
                                console.log('Non ancora fatta')
                                userFactory.setResponse(response[0]);
                                $state.go('app.Survey', {
                                    url: 'Survey',
                                    views: {
                                        'content@': {
                                            templateUrl : 'views/Survey.html',
                                            controller  : 'SurveyController'
                                        }
                                    }
                                });                                
                              }

                              
                          },
                          function(response) {
                              console.log("KO");
                          }
            );
                        

            console.log("Trovato QR Code, passo alla pagina di Survey");

            $state.go('app.Survey', {
                            url: 'Survey',
                            views: {
                                'content@': {
                                    templateUrl : 'views/Survey.html',
                                    controller  : 'SurveyController'
                                }
                            }
            });

                },
                function(error){
                        $('#read_error').html(error);
                }, function(videoError){
                        $('#vid_error').html(videoError);
                }
            );

            $scope.switch = function(){
                $("#main_content").toggle();
                $('#Insert_manually').toggle();
            }

            $scope.sendName = function(){
                console.log($scope.sendName.shortId);
                var audio = new Audio('../media/QRScanner.mp3');
                audio.play();


                userFactory.getUserBySC().query({sc:$scope.sendName.shortId})
                .$promise.then(
                    function(response){



                        if(response[0].hasOwnProperty('Profile')) {
                          console.log('Survey gia fatta')
                          userFactory.setResponse(response[0]);
                          console.log(response[0]);

                          $state.go('app.Thanks', {
                              url: 'Thanks',
                              views: {
                                  'content@': {
                                      templateUrl : 'views/Thanks.html',
                                      controller  : 'SurveyController'
                                  }
                              }
                          });

                        }
                        else  {
                          console.log('Non ancora fatta')
                          userFactory.setResponse(response[0]);
                          $state.go('app.Survey', {
                              url: 'Survey',
                              views: {
                                  'content@': {
                                      templateUrl : 'views/Survey.html',
                                      controller  : 'SurveyController'
                                  }
                              }
                          });

                        }
                        
                    },
                    function(response) {
                        console.log("KO");
                    }
                );

            }

        }])

 //       );









