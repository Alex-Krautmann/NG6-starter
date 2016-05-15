import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('appSplitter.about', {
      parent: 'appSplitter',
      url: '/about',
      onEnter: ['$rootScope', function($rootScope) {
        $rootScope.appSplitter.content.load('about.html');
        $rootScope.appSplitter.left.close();
      }]
    });
})

.component('about', aboutComponent);

export default aboutModule;
