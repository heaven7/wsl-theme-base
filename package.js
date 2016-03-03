Package.describe({
  name: 'heaven7:wsl-theme-base',
  version: '0.0.4',
  summary: 'Theme base package',
  git: 'https://github.com/heaven7/wsl-theme-base.git',
  documentation: 'README.md'
});

var both = ['client','server'],
    packages = [
        'heaven7:wsl-core@0.0.4',
        'heaven7:wsl-i18n@0.0.3_4',
        'heaven7:wsl-fulfiller@0.0.4',
        'zimme:iron-router-auth@3.2.0-rc.4',
        'iron:router@1.0.12',
        'multiply:iron-router-progress@1.0.2'
    ];

Package.onUse(function(api) {
    api.versionsFrom('1.2');
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

    api.addAssets([
        'lib/client/layouts/main.less'
    ], 'client');
});
