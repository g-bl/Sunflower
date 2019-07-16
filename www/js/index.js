var domainsSubsections = [
    2,
    2,
    0,
    0,
    0,
    0,
    0,
    0
];

document.addEventListener('init', function (event) {
    var page = event.target;

    page.querySelector('.domain-title').onclick = function () {
        ons.notification.toast(
            document.querySelector('#' + page.id + ' .domain-title').innerHTML,
            { timeout: 2000, animation: 'fall' });
    };

    var idParts = page.id.split("-");

    if (idParts.length === 1) {

        var domainNb = idParts[0].replace("domain", "");

        for (let i = 1; i < domainsSubsections[domainNb - 1] + 1; i++)
        {
            page.querySelector('#push-button-' + domainNb + '-' + i).onclick = function () {
                document.querySelector('#domain' + domainNb + '-navigator').pushPage('domain' + domainNb + '-' + i + '.html', { });
            };
        }
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