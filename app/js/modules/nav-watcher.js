export default class NavWatcher {
    constructor() {
        this.originalNavSetLoc = null;


        this.init();
    }

    compareObj(obj_1 = {}, obj_2 = {}) {
        let all_props = Object.assign({}, obj_1, obj_2);
        for (let prop in all_props) {
            if (obj_1[prop] !== obj_2[prop]) {
                return false
            }
        }

        return true;
    }

    navSetLocDecorator() {
        console.log('navSetLocDecorator');

        let old_loc = Object.assign({}, window.nav.objLoc);
        let res_return = this.originalNavSetLoc.call(window.nav, ...arguments);
        let new_loc = Object.assign({}, window.nav.objLoc);

        console.log({
            old_loc,
            new_loc,
            compare: this.compareObj(old_loc, new_loc),
        });

        return res_return;
    }

    init() {
        if (window.nav && window.nav.setLoc) {
            console.log('%c%s', (window.log_color) ? window.log_color.blue : '', 'NavWatcher: Init');

            this.originalNavSetLoc = window.nav.setLoc;
            window.nav.setLoc = this.navSetLocDecorator.bind(this);
        } else {
            requestAnimationFrame(this.init)
        }
    }
}