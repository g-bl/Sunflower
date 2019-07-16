document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'domain1') {

        page.querySelector('.domain-title').onclick = function () {
            ons.notification.toast('Domain 1 - Security and Risk Management', { timeout: 2000, animation: 'fall' });
        };

        page.querySelector('#push-button-1-1').onclick = function () {
            document.querySelector('#domain1-navigator').pushPage('domain1-1.html', { data: { title: 'Concepts (10)' } });
        };
        page.querySelector('#push-button-1-2').onclick = function () {
            document.querySelector('#domain1-navigator').pushPage('domain1-2.html', { data: { title: 'Risk (12)' } });
        };

    } else if (page.id === 'domain2') {

        page.querySelector('.domain-title').onclick = function () {
            ons.notification.toast('Domain 2 - Asset Security', { timeout: 2000, animation: 'fall' });
        };

        page.querySelector('#push-button-2-1').onclick = function () {
            document.querySelector('#domain2-navigator').pushPage('domain2-1.html', { data: { title: 'Information classification (110)' } });
        };
        page.querySelector('#push-button-2-2').onclick = function () {
            document.querySelector('#domain2-navigator').pushPage('domain2-2.html', { data: { title: 'Security policies, standards & guidelines (119)' } });
        };

    } else if (page.id === 'domain1-1') {
        page.querySelector('.domain-title').onclick = function () {
            ons.notification.toast('Domain 1 - Security and Risk Management<br />Concepts (10)', { timeout: 2000, animation: 'fall' });
        };
    } else if (page.id === 'domain1-2') {
        page.querySelector('.domain-title').onclick = function () {
            ons.notification.toast('Domain 1 - Security and Risk Management<br />Risk (12)', { timeout: 2000, animation: 'fall' });
        };

    } else if (page.id === 'domain2-1') {
        page.querySelector('.domain-title').onclick = function () {
            ons.notification.toast('Domain 2 - Asset Security<br />Information classification (110)', { timeout: 2000, animation: 'fall' });
        };
    } else if (page.id === 'domain2-2') {
        page.querySelector('.domain-title').onclick = function () {
            ons.notification.toast('Domain 2 - Asset Security<br />Security policies, standards & guidelines (119)', { timeout: 2000, animation: 'fall' });
        };
    }
});

window.fn = {};

window.fn.open = function () {
    var menu = document.getElementById('menu');
    menu.open();
};

window.fn.load = function (page) {
    var content = document.getElementById('content');
    var menu = document.getElementById('menu');
    content.load(page)
        .then(menu.close.bind(menu));
};