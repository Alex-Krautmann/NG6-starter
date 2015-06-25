import angular from 'angular';
import uiRouter from 'angular-ui-router';
import globalToolbarComponent from './globalToolbar.component';

let globalToolbarModule = angular.module('globalToolbar', [
    uiRouter
]);

globalToolbarModule.directive('siteGlobalToolbar', globalToolbarComponent);

export default globalToolbarModule;
