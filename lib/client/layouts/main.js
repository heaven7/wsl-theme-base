Template.languageSwitcher.events({
    "change select": function(e) {
        var lang = $(e.currentTarget).val();
        WSL.i18n.setLanguage(lang);
    }
});

Template.nav.onRendered(function() {
    subs.subscribe('user');
    subs.subscribe('images');
});