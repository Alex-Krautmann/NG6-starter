class GlobalSideNavController {
    constructor ($mdMedia, $mdSidenav, NavState) {

        this.name = 'globalSideNav';
        this.APP_NAME = NavState.APP_NAME;
        this.$mdMedia = $mdMedia;
        this.$mdSidenav = $mdSidenav;
        this.sideNavComponentId = 'left'; //todo: move to const file

        this.sections = [
            {title: 'Home', sref: 'home'},
            {title: 'About', sref: 'about'}
        ];
    }

    isNavLocked () {
        return this.$mdMedia('gt-md');
    }

    closeNav () {
        this.$mdSidenav(this.sideNavComponentId).close();
    }
}


export default GlobalSideNavController;
