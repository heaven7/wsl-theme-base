Template.profilemenu.onRendered(function() {
    subs.subscribe('user');
    subs.subscribe('images');

    // manually activate semantic ui dropdowns
    $(document).ready(function() {
        $('.ui.dropdown').dropdown()
    });
});
