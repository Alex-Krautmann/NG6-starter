import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('appMenu.home', {
      parent: 'appMenu',
      url: '/',
      onEnter: ['$rootScope', function($rootScope) {
        $rootScope.appMenu.setMainPage('home.html', {closeMenu: true});
      }]
    });
})

.component('home', homeComponent);

export default homeModule;
