Template.languageSwitcher.events({
    "change select": function(e) {
        var lang = $(e.currentTarget).val();
        WSL.i18n.setLanguage(lang);
    }
});

Template.profilemenu.onRendered(function() {
    subs.subscribe('user');
    subs.subscribe('images');

    // manually activate semantic ui dropdowns
    $(document).ready(function() {
        $('.ui.dropdown').dropdown()
    });
});
