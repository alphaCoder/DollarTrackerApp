angular.module('DollarTrackerApp', ['ui.router','ionic','ionic.utils','satellizer', 'ngCordova','ngFileUpload'])
    .run(function ($ionicPlatform, $state) {
        $ionicPlatform.ready(function () {
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

            //            DSCacheFactory("leagueDataCache", {
            //                storageMode: "localStorage",
            //                maxAge: 360000,
            //                deleteOnExpire: "aggressive"
            //            });
            //            DSCacheFactory("leaguesCache", {
            //                storageMode: "localStorage",
            //                maxAge: 360000,
            //                deleteOnExpire: "aggressive"
            //            });
            //            DSCacheFactory("myTeamsCache", {
            //                storageMode: "localStorage"
            //            });
            //            DSCacheFactory("staticCache", {
            //                storageMode: "localStorage"
            //            });
        });
    })

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$authProvider', 
         function ($stateProvider, $urlRouterProvider,$httpProvider, $authProvider) {
    $stateProvider
        .state('tabs', {
          url: "/tab",
          abstract: true,
          templateUrl: "app/footer/dt-footer.html"
        })
        .state('tabs.story', {
          url: "/story",
          views: {
            'story-tab': {
              templateUrl: "app/story/dt-story.html",
              controller: 'storyCtrl'
            }
          }
        })
        .state('tabs.home', {
          url: "/home",
          views: {
            'home-tab': {
              templateUrl: "app/home/dt-home.html",
              controller: 'homeCtrl'
            }
          }
        })
        .state('tabs.about', {
          url: "/about",
          views: {
            'about-tab': {
              templateUrl: "app/about/dt-about.html",
            }
          }
        })
        .state('app', {
            url: "/app",
            templateUrl: "app/layout/menu-layout.html"
        })
        .state('login', {
            url: "/login",
            templateUrl: "app/login/login.html"
        })    

        .state('account', {
            url: "/account",
            templateUrl: "app/account/account.html"
        });
        
        $urlRouterProvider.otherwise("/tab/home");
    var API_URL = 'http://dev-dollartracker.azurewebsites.net/api/';
    $authProvider.apiServer = API_URL;
    $authProvider.loginUrl = API_URL + 'login';
    $authProvider.signupUrl = API_URL + 'account';
    $authProvider.loginRedirect = '/home';
    $authProvider.logoutRedirect = '/login';
    $authProvider.signupRedirect = '/login';
    $authProvider.loginOnSignup = false;
    $authProvider.storageType = 'localStorage';
    $authProvider.withCredentials = false;
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.interceptors.push('authInterceptor');
    $urlRouterProvider.otherwise("login");
}]);

(function() {
    angular.module(dollarTrackerAppName)
    .controller('mainCtrl', ['$scope','$ionicModal', mainCtrl]);
    function mainCtrl($scope,$ionicModal) {
        $ionicModal.fromTemplateUrl('templates/modal.html', {
            scope: $scope
          }).then(function(modal) {
            $scope.modal = modal;
          });
          
          $scope.createContact = function(u) {        
            $scope.items.push({ name: u.itemName });
            $scope.modal.hide();
          };
    }

})();