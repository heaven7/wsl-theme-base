/**
 * Router config
 */
Router.configure({
    layoutTemplate: 'layoutMain',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',

    authenticate: {
        route: 'login'
    },

    yieldTemplates: {
        'nav': {to: 'nav'},
        'aside': {to: 'aside'},
        'footer': {to: 'footer'}
    }
});

// no naming conversion
Router.setTemplateNameConverter(function (str) { return str; });