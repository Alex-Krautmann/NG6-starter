import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';
import '../../common/navState/navState';

let aboutModule = angular.module('about', [
    uiRouter,
    'common.navState'
]);

aboutModule.config(($stateProvider)=> {
    $stateProvider.state('about', {
        url: '/about',
        template: '<about></about>'
    });
});

aboutModule.directive('about', aboutComponent);

export default aboutModule;
