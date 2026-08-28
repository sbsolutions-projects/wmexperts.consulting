(function () {
    const LANGUAGE_KEY = 'wmc-language';
    const germanPages = {
        'index.html': 'index-de.html',
        'profile.html': 'profile-de.html',
        'projects.html': 'projects-de.html',
        'services.html': 'services-de.html',
        'contact.html': 'contact-de.html',
        'imprint.html': 'imprint-de.html',
        'privacy.html': 'privacy-de.html',
        '404.html': '404-de.html'
    };

    function currentFileName() {
        const fileName = window.location.pathname.split('/').pop();
        return fileName || 'index.html';
    }

    function pageWithHash(fileName) {
        return './' + fileName + window.location.hash;
    }

    function browserPrefersGerman() {
        const languages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
        return languages.some(function (language) {
            return /^de\b/i.test(language);
        });
    }

    const fileName = currentFileName();
    const chosenLanguage = localStorage.getItem(LANGUAGE_KEY);
    const germanTarget = germanPages[fileName];
    const isGermanPage = /-de\.html$/i.test(fileName);

    if (!chosenLanguage && !isGermanPage && germanTarget && browserPrefersGerman()) {
        window.location.replace(pageWithHash(germanTarget));
        return;
    }

    window.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('[data-lang-choice]').forEach(function (link) {
            link.addEventListener('click', function () {
                localStorage.setItem(LANGUAGE_KEY, link.getAttribute('data-lang-choice'));
            });
        });
    });
})();
