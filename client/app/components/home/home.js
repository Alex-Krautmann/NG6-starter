import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('appSplitter.home', {
      parent: 'appSplitter',
      url: '/',
      onEnter: ['$rootScope', function($rootScope) {
        $rootScope.appSplitter.content.load('home.html');
        $rootScope.appSplitter.left.close();
      }]
    });
})

.component('home', homeComponent);

export default homeModule;
