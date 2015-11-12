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
        'semantic:ui-css@1.9.3',
        'fabienb4:autoform-semantic-ui@0.1.3',
        'flemay:less-autoprefixer@1.0.2'
    ];

    api.use(packages, both);

    api.imply(packages);

    api.addFiles([
        'lib/client/startup.js',
        'lib/client/semantic-ui/custom.semantic.json',
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
