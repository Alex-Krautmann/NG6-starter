import template from './globalSideNav.html';
import controller from './globalSideNav.controller';
import './globalSideNav.styl';

let globalSideNavComponent = function () {
    return {
        template,
        controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };
};

export default globalSideNavComponent;