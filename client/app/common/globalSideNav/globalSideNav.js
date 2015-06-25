import angular from 'angular';
import uiRouter from 'angular-ui-router';
import globalSideNavComponent from './globalSideNav.component';

let globalSideNavModule = angular.module('globalSideNav', [
    uiRouter
]);

globalSideNavModule.directive('siteGlobalSideNav', globalSideNavComponent);

export default globalSideNavModule;
