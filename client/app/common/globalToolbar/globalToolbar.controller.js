class GlobalToolbarController {

    constructor ($mdMedia, $mdSidenav) {
        this.name = 'globalToolbar';
        this.$mdMedia = $mdMedia;
        this.$mdSidenav = $mdSidenav;
        this.sideNavComponentId = 'left'; //todo: move to const file
    }

    openGlobalSideNav () {
        this.$mdSidenav(this.sideNavComponentId).toggle();
    }
}


export default GlobalToolbarController;
