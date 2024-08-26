function initCookieConsent() {
    // Verifică dacă utilizatorul a dat deja consimțământul
    let cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
        // Afișează notificarea de cookie-uri dacă nu a fost dat consimțământul
        document.getElementById('cookieConsent').classList.remove('hidden');
    }

    // Adaugă event listener pentru butonul "Accept"
    document.getElementById('acceptCookies').addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'accepted');
        document.getElementById('cookieConsent').classList.add('hidden');
    });

    // Adaugă event listener pentru butonul "Reject"
    document.getElementById('rejectCookies').addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'rejected');
        document.getElementById('cookieConsent').classList.add('hidden');
    });
}

