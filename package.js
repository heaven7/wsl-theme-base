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
        'zimme:iron-router-auth',
        'iron:router'
    ];

    api.use(packages, both);

    api.imply(packages);

    api.addFiles([
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
