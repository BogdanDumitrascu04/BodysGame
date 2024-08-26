// translations.js

const translations = {
    en: {
        guessTheFootballer: 'Guess the footballer',
        info: 'ⓘ',
        menu: '&#9776;',
        close: 'X',
        howToPlay: 'How to Play',
        selectLeague: '1. Select a league.',
        guessFootballer: '2. Guess the footballer based on the clues provided.',
        enjoyGame: '3. Enjoy the game!',
        guessTheFootballPlayer: 'Guess the Football Player',
        showHint: 'Show Hint',
        premierLeague: 'Premier League',
        laLiga: 'LaLiga',
        bundesliga: 'Bundesliga',
        serieA: 'Serie A',
        ligue1: 'Ligue 1',
        icons: 'Icons',
        typePlayerName: 'Type player name...' 
    },
    es: {
        guessTheFootballer: 'Adivina el futbolista',
        info: 'ⓘ',
        menu: '&#9776;',
        close: 'X',
        howToPlay: 'Cómo jugar',
        selectLeague: '1. Selecciona una liga.',
        guessFootballer: '2. Adivina el futbolista basado en las pistas proporcionadas.',
        enjoyGame: '3. ¡Disfruta del juego!',
        guessTheFootballPlayer: 'Adivina al futbolista',
        showHint: 'Mostrar pista',
        premierLeague: 'Premier League',
        laLiga: 'LaLiga',
        bundesliga: 'Bundesliga',
        serieA: 'Serie A',
        ligue1: 'Ligue 1',
        icons: 'Íconos',
        typePlayerName: 'Escribe el nombre del jugador...'

    },
    fr: {
        guessTheFootballer: 'Devinez le footballeur',
        info: 'ⓘ',
        menu: '&#9776;',
        close: 'X',
        howToPlay: 'Comment jouer',
        selectLeague: '1. Sélectionnez une ligue.',
        guessFootballer: '2. Devinez le footballeur en fonction des indices fournis.',
        enjoyGame: '3. Profitez du jeu!',
        guessTheFootballPlayer: 'Devinez le joueur de football',
        showHint: 'Afficher un indice',
        premierLeague: 'Premier League',
        laLiga: 'LaLiga',
        bundesliga: 'Bundesliga',
        serieA: 'Serie A',
        ligue1: 'Ligue 1',
        icons: 'Icônes',
        typePlayerName: 'Tapez le nom du joueur...'
      
    },
    ro: { 
        guessTheFootballer: 'Ghicește fotbalistul',
        info: 'ⓘ',
        menu: '&#9776;',
        close: 'X',
        howToPlay: 'Cum să joci',
        selectLeague: '1. Selectează o ligă.',
        guessFootballer: '2. Ghicește fotbalistul pe baza indiciilor oferite.',
        enjoyGame: '3. Bucură-te de joc!',
        guessTheFootballPlayer: 'Ghicește jucătorul de fotbal',
        showHint: 'Arată indiciul',
        premierLeague: 'Premier League',
        laLiga: 'LaLiga',
        bundesliga: 'Bundesliga',
        serieA: 'Serie A',
        ligue1: 'Ligue 1',
        icons: 'Legende',
        typePlayerName: 'Introdu numele jucătorului...'
    }
};

function translatePage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.innerHTML = translations[language][key];
        }
    });
    const guessInput = document.getElementById('guessInput');
    if (translations[language] && translations[language].typePlayerName) {
        guessInput.placeholder = translations[language].typePlayerName;
    }
}
document.getElementById('language').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    translatePage(selectedLanguage);
});

document.addEventListener('DOMContentLoaded', () => {
    const defaultLanguage = 'en'; 
    document.getElementById('language').value = defaultLanguage;
    translatePage(defaultLanguage);
});