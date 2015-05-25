// vendor imports
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'normalize.css';
// app imports
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

let app = angular.module('app', [
    uiRouter,
    Common.name,
    Components.name
]);

app.directive('app', AppComponent);