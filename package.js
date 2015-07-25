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

    api.use(
        [
            'heaven7:wsl-core'
        ],
        both);

    api.addFiles(
        [
            'lib/client/layouts/main.html',
            'lib/client/templates/dashboard.html'
        ],
        'client');
    api.addFiles(
        [
            'lib/both/config.js',
            'lib/both/routes.js',
            'lib/both/theme-base.js'
        ],
        both);
});
