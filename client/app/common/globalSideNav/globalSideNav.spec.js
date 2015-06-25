import GlobalSideNavModule from './globalSideNav';
import GlobalSideNavController from './globalSideNav.controller';
import GlobalSideNavComponent from './globalSideNav.component';
import GlobalSideNavTemplate from './globalSideNav.html';

describe('GlobalSideNav', ()=>{
    let $rootScope,
    makeController;

    beforeEach(window.module(GlobalSideNavModule.name));
    beforeEach(inject((_$rootScope_)=>{
        $rootScope = _$rootScope_;
        makeController = ()=>{
            return new GlobalSideNavController();
        };
    }));

    describe('Module', ()=>{
        // test things about the component module
        // checking to see if it registers certain things and what not
        // test for best practices with naming too
        // test for routing
    });

    describe('Controller', ()=>{
        // test your controller here

        it('should have a name property [REMOVE]', ()=>{ // erase me if you remove this.name from the controller
            let controller = makeController();

            expect(controller).to.have.property('name');
        });

        describe('isNavLocked', ()=>{
            it('should exist', function () {
                let controller = makeController();

                expect(controller.isNavLocked).to.exist;
            });
        });
    });

    describe('Component', ()=>{
        // test the component/directive itself
        let component = new GlobalSideNavComponent();

        it('should use the right template',()=>{
            expect(component.template).to.equal(GlobalSideNavTemplate);
        });

        it('should use controllerAs', ()=>{
            expect(component).to.have.property('controllerAs');
        });

        it('should use the right controller', ()=>{
            expect(component.controller).to.equal(GlobalSideNavController);
        });
    });
});
