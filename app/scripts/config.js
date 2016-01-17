/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index/login");

    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
        })
 /*       .state('index.main', {
            url: "/main",
            templateUrl: "views/main.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.minor', {
            url: "/minor",
            templateUrl: "views/minor.html",
            data: { pageTitle: 'Example view' }
        })
*/        .state('index.login', {
            controller:"LoginCtrl",
            url: "/login",
            templateUrl: "views/login.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.signup', {
            controller:"SignUpCtrl",
            url: "/signup",
            templateUrl: "views/signup.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.welcome',{
            url:'/welcome',
            templateUrl:'views/welcome.html',
            data: { pageTitle: 'Example view' }
        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });