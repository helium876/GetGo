angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'//,
    //controller: 'AppCtrl'
  })

  .state('app.page', {
    url: '/page',
    views: {
      'menuContent': {
        templateUrl: 'templates/page.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('app.index', {
    url: '/index',
    views: {
      'menuContent': {
        templateUrl: 'templates/index.html'
      }
    }
  })

  .state('app.signup', {
      url: '/signup',
      views: {
        'menuContent': {
          templateUrl: 'templates/signup.html',
          controller: 'SignUpCtrl'
        }
      }
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'AppCtrl'
        }
      }
    })

    .state('app.post', {
      url: '/post',
      views: {
        'menuContent': {
          templateUrl: 'templates/post.html',
          controller: 'PostCtrl'
        }
      }
    })

    .state('app.job', {
      url: '/job',
      views: {
        'menuContent': {
          templateUrl: 'templates/job.html',
          controller: 'AppCtrl'
        }
      }
    })

    .state('app.confirm', {
      url: '/confirm',
      views: {
        'menuContent': {
          templateUrl: 'templates/confirm.html',
          controller: 'AppCtrl'
        }
      }
    })

    .state('app.acc', {
      url: '/acc',
      views: {
        'menuContent': {
          templateUrl: 'templates/account.html',
          controller: 'AppCtrl'
        }
      }
    })

  .state('app.signin', {
    url: '/signin',
    views: {
      'menuContent': {
        templateUrl: 'templates/signin.html',
        controller: 'LoginCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/index');
});
