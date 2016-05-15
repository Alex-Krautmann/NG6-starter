import angular from 'angular';
import toolbarComponent from './toolbar.component';

let toolbarModule = angular.module('app.common.toolbar', [
])

.component('appCommonToolbar', toolbarComponent);

export default toolbarModule;
