class GlobalToolbarController {

    constructor ($mdMedia, $mdSidenav, NavState) {
        this.name = 'globalToolbar';
        this.APP_NAME = NavState.APP_NAME;
        this.$mdMedia = $mdMedia;
        this.$mdSidenav = $mdSidenav;
        this.sideNavComponentId = 'left'; //todo: move to const file
        this.NavState = NavState;
    }

    openGlobalSideNav () {
        this.$mdSidenav(this.sideNavComponentId).toggle();
    }

    getNavStateTitle () {
        return this.NavState.getStateTitle();
    }
}


export default GlobalToolbarController;
