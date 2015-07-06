import angular from 'angular';
import NavState from './navState/navState';
import GlobalToolbar from './globalToolbar/globalToolbar';
import GlobalSideNav from './globalSideNav/globalSideNav';

let commonModule = angular.module('app.common', [
    'common.navState', //todo: change to .name style
    GlobalSideNav.name,
    GlobalToolbar.name
]);

export default commonModule;
