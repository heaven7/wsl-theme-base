Package.describe({
  name: 'heaven7:wsl-theme-base',
  version: '0.0.2',
  summary: 'Theme base package',
  git: 'https://github.com/heaven7/wsl-theme-base.git',
  documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
    api.versionsFrom('1.2');

    var packages = [
        'heaven7:wsl-core@0.0.2',
        'heaven7:wsl-i18n@0.0.2',
        'zimme:iron-router-auth@3.2.0-rc.4',
        'iron:router@1.0.12',
        'semantic:ui@1.12.1_1',
        'semantic:ui-data',
        'semantic:ui-loader@1.9.3',
        'semantic:ui-button@1.9.3',
        'semantic:ui-form@1.9.2',
        'semantic:ui-menu@1.9.3',
        'semantic:ui-segment@1.9.3',
        'semantic:ui-dropdown@1.9.3',
        'semantic:ui-modal@1.9.3',
        'semantic:ui-transition@1.9.2',
        'semantic:ui-popup@1.9.3',
        'semantic:ui-sidebar@1.9.2',
        'semantic:ui-grid@1.9.3',
        'semantic:ui-divider@1.9.3',
        'semantic:ui-card@1.9.3',
        'semantic:ui-label@1.9.3',
        'semantic:ui-dimmer@1.9.3',
        'semantic:ui-checkbox@1.9.3',
        'semantic:ui-icon@1.9.3',
        'semantic:ui-image@1.9.3',
        'semantic:ui-header@1.9.2',
        'semantic:ui-item@1.9.2',
        'semantic:ui-accordion@2.1.5',
        'semantic:ui-list@1.9.3',
        'semantic:ui-reset@1.9.0',
        'semantic:ui-rating@1.9.3',
        'semantic:ui-input@1.9.3',
        'semantic:ui-site@1.9.3',
        'semantic:ui-message@1.9.3',
        'semantic:ui-reveal@1.9.3',
        'semantic:ui-search@1.9.3',
        'semantic:ui-feed@1.9.3',
        'semantic:ui-progress@1.9.3',
        'semantic:ui-table@1.9.3',
        'semantic:ui-tab@1.9.2',
        'semantic:ui-step@1.9.3',
        'semantic:ui-sticky@1.9.2',
        'semantic:ui-statistic@1.9.2',
        'semantic:ui-rail@1.9.2',
        'semantic:ui-comment@1.9.3',
        'semantic:ui-visibility@2.1.6',
        'semantic:ui-nag@1.9.3',
        'semantic:ui-api@1.9.3',
        'semantic:ui-embed@2.1.6',
        'semantic:ui-breadcrumb@1.9.3',
        'semantic:ui-shape@1.9.2',
        'semantic:ui-flag@1.9.3',
        'semantic:ui-video@1.9.3',
        'semantic:ui-ad@2.1.5',
        'semantic:ui-container@2.1.5',
        'semantic:ui-css@1.9.3',
        'fabienb4:autoform-semantic-ui@0.1.3',
        'flemay:less-autoprefixer@1.0.2',
        'jquery'
    ];

    api.use(packages, both);

    api.imply(packages);

    api.addFiles([
        'lib/client/startup.js',
        'lib/client/semantic-ui/custom.semantic.json',
        'lib/client/semantic-ui/definitions/behaviors/api.js',
        'lib/client/semantic-ui/definitions/behaviors/colorize.js',
        'lib/client/semantic-ui/definitions/behaviors/form.js',
        'lib/client/semantic-ui/definitions/behaviors/state.js',
        'lib/client/semantic-ui/definitions/behaviors/visibility.js',
        'lib/client/semantic-ui/definitions/behaviors/visit.js',
        'lib/client/semantic-ui/definitions/globals/site.js',
        'lib/client/semantic-ui/definitions/modules/accordion.js',
        'lib/client/semantic-ui/definitions/modules/checkbox.js',
        'lib/client/semantic-ui/definitions/modules/dimmer.js',
    //    'lib/client/semantic-ui/definitions/modules/dropdown.js',
        'lib/client/semantic-ui/definitions/modules/modal.js',
        'lib/client/semantic-ui/definitions/modules/nag.js',
        'lib/client/semantic-ui/definitions/modules/popup.js',
        'lib/client/semantic-ui/definitions/modules/progress.js',
        'lib/client/semantic-ui/definitions/modules/rating.js',
        'lib/client/semantic-ui/definitions/modules/search.js',
        'lib/client/semantic-ui/definitions/modules/shape.js',
        'lib/client/semantic-ui/definitions/modules/sidebar.js',
        'lib/client/semantic-ui/definitions/modules/sticky.js',
        'lib/client/semantic-ui/definitions/modules/tab.js',
        'lib/client/semantic-ui/definitions/modules/transition.js',
        'lib/client/semantic-ui/definitions/modules/video.js',

        'lib/client/layouts/main.less',
        'lib/client/layouts/main.html',
        'lib/client/layouts/main.js',
        'lib/client/templates/dashboard.html',
        'lib/client/templates/items.html',
        'lib/client/templates/projects.html'

    ], 'client');

    api.addFiles([
        'lib/both/config.js',
        'lib/both/routes.js',
        'lib/both/theme-base.js'
    ], both);
});
