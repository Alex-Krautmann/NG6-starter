import template from './globalToolbar.html';
import controller from './globalToolbar.controller';
import './globalToolbar.styl';

let globalToolbarComponent = function () {
    return {
        template,
        controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };
};

export default globalToolbarComponent;