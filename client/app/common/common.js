import angular from 'angular';
import User from './user/user';
import GlobalToolbar from './globalToolbar/globalToolbar';
import GlobalSideNav from './globalSideNav/globalSideNav';

let commonModule = angular.module('app.common', [
    User.name,
    GlobalSideNav.name,
    GlobalToolbar.name
]);

export default commonModule;
