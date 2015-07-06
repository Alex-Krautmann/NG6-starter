import angular from 'angular';
import uiRouter from 'angular-ui-router';
import globalToolbarComponent from './globalToolbar.component';
import '../navState/navState';

let globalToolbarModule = angular.module('common.globalToolbar', [
    uiRouter,
    'common.navState'
]);

globalToolbarModule.directive('commonGlobalToolbar', globalToolbarComponent);

export default globalToolbarModule;
