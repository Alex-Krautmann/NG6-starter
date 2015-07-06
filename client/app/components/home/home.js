import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import '../../common/navState/navState';

let homeModule = angular.module('home', [
    uiRouter,
    'common.navState'
]);

homeModule.config(($stateProvider, $urlRouterProvider)=> {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: '<home></home>'
        });

});

homeModule.directive('home', homeComponent);

export default homeModule;
