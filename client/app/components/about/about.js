import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('appMenu.about', {
      parent: 'appMenu',
      url: '/about',
      onEnter: ['$rootScope', function($rootScope) {
        $rootScope.appMenu.setMainPage('about.html', {closeMenu: true});
      }]
    });
})

.component('about', aboutComponent);

export default aboutModule;
