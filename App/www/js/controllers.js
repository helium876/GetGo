angular.module('starter.controllers', ['firebase'])

.config(function() {
  var config = {
    apiKey: "AIzaSyD51WixY6J79IzqsnQOtV1D8VhZeMV7WtA",
    authDomain: "grabr-3124f.firebaseapp.com",
    databaseURL: "https://grabr-3124f.firebaseio.com",
    storageBucket: "grabr-3124f.appspot.com",
  };
  firebase.initializeApp(config);
})

.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
])

.controller('SignUpCtrl', function($scope, Auth){

  $scope.createUser = function(Data) {
      $scope.message = null;
      $scope.error = null;

      // Create a new user
      Auth.$createUserWithEmailAndPassword(Data.email, Data.password)
      .then(function(firebaseUser) {
        // var fb = firebaseUser;
          $scope.message = "User created with uid: " + firebaseUser.uid;
          // var prf = Acc.ref('/').child(firebaseUser.uid);
          var prf = Acc.child(firebaseUser.uid);
          //var list = prf.push('Profile');

          prf.set({
            fname: Data.fname,
            lname: Data.lname,
            idnum: Data.username,

          });
          console.log($scope.message);
      }).catch(function(error) {
          $scope.error = error;
          console.log($scope.error);
      });

  };
})

.controller('AppCtrl', function($scope,$ionicPopup,$rootScope,$timeout,$ionicLoading,$firebaseAuth,$ionicHistory, $firebaseObject) {
  $scope.authObj = $firebaseAuth();
  $ionicHistory.nextViewOptions({
    disableBack: true
  });

  $scope.runit = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Lets get that Errand Outta the way!',
     template: 'Be sure to give your client a call'
   });
 };

 $scope.addcard = function () {
    $ionicLoading.show({
          template: '<ion-spinner></ion-spinner>',
          animation: 'fade-in',
          noBackdrop: true,
          maxWidth: 500,
          showDelay: 800
        });
        console.log("Loading");
         angular.element(document).ready(function () {
          $timeout(function() {
            $ionicLoading.hide();
           }, 3000);
            console.log("Loaded");
        });

         var alertPopup = $ionicPopup.alert({
     title: 'Card Added Successfully!'
     //template: 'Be sure to give your client a call'
   });
 };


 $scope.JobDone = function(){
  var alertPopup = $ionicPopup.alert({
     title: 'Congrats! Your Errand is Complete',
     template: 'Your Account will be charged'
   });
 }

 $scope.Query = function(){
  var alertPopup = $ionicPopup.show({
     title: 'Please Submit Your Query',
     buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Submit</b>',
        type: 'button-positive',
      }
      ],
     template: '<input type="text">'
   });
 }


    //Get the user
    // var firebaseUser = $scope.authObj.$getAuth();
    // console.log(firebaseUser.uid);
    // var ref = firebase.database().ref('/users/' + firebaseUser.uid);
    // $scope.stuff1 = $firebaseObject(ref);
    // console.log($scope.stuff1);
    // $scope.img = 'https://utechisas.utech.edu.jm/sipr//images/photos/';
    $scope.loading = function() {
        $ionicLoading.show({
          template: '<ion-spinner></ion-spinner>',
          animation: 'fade-in',
          noBackdrop: true,
          maxWidth: 500,
          showDelay: 800
        });
        console.log("Loading");
         angular.element(document).ready(function () {
          $timeout(function() {
            $ionicLoading.hide();
           }, 5000);
            console.log("Loaded");
        });
     }

     $scope.hide = function(){
        $ionicLoading.hide();
    };
    var ref = firebase.database().ref('posts/');
    $scope.stuff = $firebaseObject(ref);
    console.log($scope.stuff);
})

.controller('LoginCtrl', function($scope, $state, $firebaseAuth,$ionicHistory) {
  $scope.authObj = $firebaseAuth();
    $ionicHistory.nextViewOptions({
    disableBack: true
  });
   var firebaseUser = $scope.authObj.$getAuth();
   console.log(firebaseUser);
   if (firebaseUser) {
    $state.go('app.home');
   }
    var auth = $firebaseAuth();

    $scope.signIn = function(Data) {
      var email = Data.email, password = Data.password;
       
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(authData) {
        console.log('Logged in as ');
        $ionicHistory.nextViewOptions({
    disableBack: true
  });
        $state.go('app.home');
      }).catch(function(error) {
              $scope.error = error;
              console.log(error);
      });
    }
})

.controller('PostCtrl', function($scope,$ionicPopup, $stateParams,$ionicHistory,$firebaseAuth, $firebaseObject) {
  $scope.authObj = $firebaseAuth();
    $ionicHistory.nextViewOptions({
    disableBack: true
  });
    $scope.thanks = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Post Submitted ',
     template: 'Lets get those Errands outta the way'
   });
 };

    //Get the user
    var firebaseUser = $scope.authObj.$getAuth();
    // console.log(firebaseUser.uid);
    var ref = firebase.database().ref('posts/')
    var list = ref.push();
    ;
  
  
  $scope.postJob = function(Data){
    list.set({
      title: Data.title,
      name: Data.fname,
      details: Data.details,
      price: Data.price,
      userId: firebaseUser.uid
    });
    $scope.thanks();
  }
});


