import angular from 'angular';
import uiRouter from 'angular-ui-router';
//import Common from './common/common';
//import Components from './components/components';
import AppComponent from './app.component';

//importing styles
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

angular.module('app', [
  uiRouter
])
  .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
      .state('app', {
        url: '/app',
        template: '<app></app>'
      });

    // Default page for the router
    $urlRouterProvider.otherwise('/app');
  })

  .component('app', AppComponent);
