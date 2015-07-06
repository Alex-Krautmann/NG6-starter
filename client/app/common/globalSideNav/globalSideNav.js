import angular from 'angular';
import uiRouter from 'angular-ui-router';
import globalSideNavComponent from './globalSideNav.component';
import '../navState/navState';


let globalSideNavModule = angular.module('common.globalSideNav', [
    uiRouter,
    'common.navState'
]);

globalSideNavModule.directive('commonGlobalSideNav', globalSideNavComponent);

export default globalSideNavModule;
