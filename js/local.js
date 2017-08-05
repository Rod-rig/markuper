import $ from 'jquery';
import '../postcss/styles.css';

$(document).ready(function () {
    let app = {
        vars: {
            timeAnimation: 200,
            window: $(window)
        }
    };

    /**
     * loop for all app methods and execute them
     */
    let initApp = () => {
        for (let method in app) {
            if ((typeof app[method] === 'function') && app.hasOwnProperty(method)) {
                app[method]();
            }
        }
    };

    initApp();
});