var app = angular.module('starter', ['ionic', 'starter.controllers']);

app.config(function() {
  var config = {
    apiKey: "AIzaSyD51WixY6J79IzqsnQOtV1D8VhZeMV7WtA",
    authDomain: "grabr-3124f.firebaseapp.com",
    databaseURL: "https://grabr-3124f.firebaseio.com",
    storageBucket: "grabr-3124f.appspot.com",
  };
  firebase.initializeApp(config);
});