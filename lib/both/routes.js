Router.route('/', function () {

    this.render('home');

    // {{> yield "nav"}}
    this.render('nav', {to: 'nav'});

    // {{> yield "aside"}}
    this.render('aside', {to: 'aside'});

    // {{> yield "footer"}}
    this.render('footer', {to: 'footer'});

});