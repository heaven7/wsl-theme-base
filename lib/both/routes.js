
/**
 * Home
 */

Router.route('/', {
    name: 'home',
    template: 'home'
});

/**
 * Logout
 */

Router.route('/logout', function () {
    Meteor.logout();
    this.redirect('home');
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

/**
 * Projects
 */

Router.route('/projects', {
    name: 'projects',
    template: 'projects'
});

