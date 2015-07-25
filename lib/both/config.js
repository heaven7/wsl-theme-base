/**
 * Router config
 */
Router.configure({
    layoutTemplate: 'layoutMain',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',

    yieldTemplates: {
        'nav': {to: 'nav'},
        'aside': {to: 'aside'},
        'footer': {to: 'footer'}
    }
});

/**
 * Add home route to publicRoutes array
 */

WSL.publicRoutes.push('home');