
/**
 * Home
 */

Router.route('/', {
    name: 'home',
    template: 'home'
});

/**
 * Dashboard
 */

Router.route('/dashboard', {
    name: 'dashboard',
    template: 'dashboard'
});

/**
 * Items
 */

Router.route('/items', {
    name: 'items',
    template: 'items'
});


// check route if login is required
// see: https://github.com/zimme/meteor-iron-router-auth
Router.onBeforeAction('authenticate', {
    authenticate: {
        template: 'notAuthenticated'
    },
    except: WSL.routes.public
});