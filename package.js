Package.describe({
  name: 'heaven7:wsl-theme-base',
  version: '0.0.1',
  summary: 'Theme base package',
  git: 'https://github.com/heaven7/wsl-theme-base.git',
  documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');
    api.addFiles('wsl-theme-base.js');

    api.use(
        [
            'heaven7:wsl-core'
        ],
        both);

    api.addFiles(
        [
            'lib/client/layouts/main/main.html',
            'lib/router/routes.js'
        ],
        'client');
});
