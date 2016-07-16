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
   var Acc = firebase.database().ref('/users');
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

.controller('AppCtrl', function($scope,$firebaseAuth, $firebaseObject) {
  $scope.authObj = $firebaseAuth();

    //Get the user
    var firebaseUser = $scope.authObj.$getAuth();
    console.log(firebaseUser.uid);
    var ref = firebase.database().ref('/users/' + firebaseUser.uid);
    $scope.stuff = $firebaseObject(ref);
    console.log($scope.stuff);
    $scope.img = 'https://utechisas.utech.edu.jm/sipr//images/photos/';
})

.controller('LoginCtrl', function($scope, $state, $firebaseAuth) {

    var auth = $firebaseAuth();

    $scope.signIn = function(Data) {
      var email = Data.email, password = Data.password;
       
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(authData) {
        console.log('Logged in as ');
        $state.go('app.home');
      }).catch(function(error) {
              $scope.error = error;
              console.log(error);
      });
    }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
