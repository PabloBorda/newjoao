angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('guidedMeditations', {
    url: '/page1',
    templateUrl: 'templates/guidedMeditations.html',
    controller: 'guidedMeditationsCtrl'
  })

  .state('donateByText', {
    url: '/page2',
    templateUrl: 'templates/donateByText.html',
    controller: 'donateByTextCtrl'
  })

  .state('wellnessWorkshop', {
    url: '/page3',
    templateUrl: 'templates/wellnessWorkshop.html',
    controller: 'wellnessWorkshopCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});