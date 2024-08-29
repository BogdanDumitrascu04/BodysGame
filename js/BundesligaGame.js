// Elemente DOM
const menuButton = document.getElementById('menuButton');
const navbar = document.getElementById('navbar');
const infoButton = document.getElementById('infoButton');
const infoContent = document.getElementById('infoContent');
const closeButton = document.getElementById('closeButton');
const content = document.querySelector('.content');

// Funcție pentru a ajusta margin-top al conținutului
function adjustContentPosition() {
    const headerHeight = document.querySelector('.header').offsetHeight;
    let navbarHeight = 0;
    let infoContentHeight = 0;

    if (navbar.classList.contains('show')) {
        navbarHeight = navbar.offsetHeight;
    }

    if (infoContent.classList.contains('show')) {
        infoContentHeight = infoContent.offsetHeight;
    }

    content.style.marginTop = `${headerHeight + navbarHeight + infoContentHeight + 20}px`;
}

window.addEventListener('resize', adjustContentPosition);
document.addEventListener('DOMContentLoaded', adjustContentPosition);

// Evenimente pentru meniul navbar
menuButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
    infoContent.classList.remove('show');
    adjustContentPosition();
});

// Evenimente pentru secțiunea de informații
infoButton.addEventListener('click', () => {
    infoContent.classList.toggle('show');
    navbar.classList.remove('show');
    adjustContentPosition();
});

// Eveniment pentru butonul de închidere a informațiilor
closeButton.addEventListener('click', () => {
    infoContent.classList.remove('show');
    adjustContentPosition();
});

// Asigură-te că marginile sunt ajustate corect la redimensionarea ferestrei
window.addEventListener('resize', adjustContentPosition);

// Apelează funcția pentru a seta inițial marginile corect
adjustContentPosition();

// Example players database
const playersDatabase = [
    { 
        Name: 'Vinicius Junior', 
        Team: 'Real Madrid', 
        Position: 'Forward', 
        Age: 24, 
        Number: 7, 
        Nationality: 'Brazil', 
        ImageTeam:'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo:'images/leagues/LaLiga/RealMadrid/Vinicius.png',
    },
];
let availableKeywords = playersDatabase.map(player => player.Name);

    const resultsBox = document.querySelector('.result-box');
    const inputBox = document.getElementById("guessInput");
    const feedback = document.getElementById('feedback');
    const playerInfo = document.getElementById('playerInfo');

    // Funcția de actualizare a sugestiilor de autocompletare
    inputBox.addEventListener('input', function () {
        let result = [];
        let input = inputBox.value.toLowerCase().trim();
        if (input.length) {
            result = availableKeywords.filter(keyword => keyword.toLowerCase().includes(input));
            displayResults(result);
        } else {
            resultsBox.innerHTML = "";
        }
    });
    // Funcția de afișare a rezultatelor căutării
    function displayResults(results) {
        resultsBox.innerHTML = "";
        if (results.length) {
            const content = results.map(playerName => {
                const player = playersDatabase.find(player => player.Name.toLowerCase() === playerName.toLowerCase());
                if (player) {
                    return `
                        <li>
                            <img src="${player.Photo}" alt="Logo" class="player-logo-small">
                            ${player.Name} 
                            <img src="${player.ImageTeam}" alt="${player.Team} logo" class="team-logo-small">
                            
                        </li>
                    `;
                } else {
                    return `<li>${playerName}</li>`;
                }
            }).join('');
            resultsBox.innerHTML = `<ul>${content}</ul>`;
        }
    }

    // Event listener pentru selectarea unui rezultat din listă
    resultsBox.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            const selectedText = event.target.textContent;
            const selectedName = selectedText.split(' - ')[0].trim();
            inputBox.value = selectedName;
            resultsBox.innerHTML = '';
            checkGuess();
        }
    });
    // Funcția pentru selectarea aleatorie a unui jucător țintă din baza de date
    function getRandomPlayer() {
        const randomIndex = Math.floor(Math.random() * playersDatabase.length);
        return playersDatabase[randomIndex];
    }

    // Setăm jucătorul țintă și inițializăm numărul de încercări la începutul jocului
    let targetPlayer = getRandomPlayer();
    let attempt = 0;
    const maxAttempts = 10;

    // Funcția pentru găsirea unui jucător după nume din baza de date
    function findPlayerByName(name) {
        return playersDatabase.find(player => player.Name.toLowerCase() === name.toLowerCase());
    }
    //Language
    const languageSelector = document.getElementById('language');
    let selectedLanguage = 'en';  // Limba implicită este engleza
    
    languageSelector.addEventListener('change', function(event) {
        selectedLanguage = event.target.value;
        updateLanguage(selectedLanguage);
    });
    
    // Funcția de verificare a ghicitului utilizatorului
    function checkGuess() {
        const guessInput = inputBox.value.trim();
        const guessedPlayer = findPlayerByName(guessInput);
        attempt++;
    
        if (guessedPlayer) {
            if (guessedPlayer.Name === targetPlayer.Name) {
                let message;
                
                // Verificăm limba selectată și setăm mesajul corespunzător
                if (selectedLanguage === 'en') {
                    message = `<strong>Congratulations! You guessed correctly!<br><br> 
                    <img src="${targetPlayer.Photo}" alt="${targetPlayer.Name}" style="max-width: 100%; height: auto; border-radius: 10px;"></strong>`;
                    feedback.style.color = 'green';
                } else if (selectedLanguage === 'es') {
                    message = `<strong>¡Felicidades! ¡Adivinaste correctamente!<br><br> 
                    <img src="${targetPlayer.Photo}" alt="${targetPlayer.Name}" style="max-width: 100%; height: auto; border-radius: 10px;"></strong>`;
                    feedback.style.color = 'green';
                } else if (selectedLanguage === 'fr') {
                    message = `<strong>Félicitations ! Vous avez deviné correctement !<br><br> 
                    <img src="${targetPlayer.Photo}" alt="${targetPlayer.Name}" style="max-width: 100%; height: auto; border-radius: 10px;"></strong>`;
                    feedback.style.color = 'green';
                } else if (selectedLanguage === 'ro') {
                    message = `<strong>Felicitări ! Ai ghicit corect !<br><br> 
                    <img src="${targetPlayer.Photo}" alt="${targetPlayer.Name}" style="max-width: 100%; height: auto; border-radius: 10px;"></strong>`;
                    feedback.style.color = 'green';
                }
    
                feedback.innerHTML = message;
                inputBox.disabled = true;
                inputBox.value = '';
                displayPlayerInfo(guessedPlayer, targetPlayer, true); // Indică ghicitul corect
                showRestartButton(); // Afișează butonul de restart
                document.getElementById('hint').innerText = ''; 
                document.getElementById('Hint').innerText = '';
                document.getElementById('hintButton').style.display= 'none';     
            } else {
                // Mesaje pentru răspuns incorect
                let incorrectMessage;
                if (selectedLanguage === 'en') {
                    incorrectMessage = `<strong>Incorrect! You have ${maxAttempts - attempt} attempts left.</strong>`;
                } else if (selectedLanguage === 'es') {
                    incorrectMessage = `<strong>¡Incorrecto! Te quedan ${maxAttempts - attempt} intentos.</strong>`;
                } else if (selectedLanguage === 'fr') {
                    incorrectMessage = `<strong>Incorrect ! Il vous reste ${maxAttempts - attempt} tentatives.</strong>`;
                }
                else if (selectedLanguage === 'ro') {
                    incorrectMessage = `<strong>Incorect ! Mai ai ${maxAttempts - attempt} încercări.</strong>`;
                }
    
                feedback.innerHTML = incorrectMessage;
                feedback.style.color= 'red';
                displayPlayerInfo(guessedPlayer, targetPlayer, false); // Indică ghicitul incorect
            }
        } else {
            // Mesaje pentru jucător necunoscut
            let notFoundMessage;
            if (selectedLanguage === 'en') {
                notFoundMessage = '<strong>Player not found. Please try again.</strong>';
            } else if (selectedLanguage === 'es') {
                notFoundMessage = '<strong>Jugador no encontrado. Por favor, inténtalo de nuevo.</strong>';
            } else if (selectedLanguage === 'fr') {
                notFoundMessage = '<strong>Joueur non trouvé. Veuillez réessayer.</strong>';
            }else if (selectedLanguage === 'ro') {
                notFoundMessage = '<strong>Jucătorul nu s-a găsit. Vă rugăm mai încercați</strong>';
            }
    
            feedback.innerHTML = notFoundMessage;
            feedback.style.color='white';
        }
    
        // Verificăm dacă utilizatorul a epuizat toate încercările
        if (attempt >= maxAttempts) {
            let gameOverMessage;
            if (selectedLanguage === 'en') {
                gameOverMessage = `
                <strong>Game over! No more attempts left.<br><br>
                The player was: ${targetPlayer.Name}</strong><br><br>
                <img src="${targetPlayer.Photo}" alt="${targetPlayer.Name}" style="max-width: 100%; height: auto; border-radius: 10px;"></strong>`;
            } else if (selectedLanguage === 'es') {
                gameOverMessage = `
                <strong>¡Juego terminado! No quedan más intentos.<br><br>
                El jugador era: ${targetPlayer.Name}</strong><br><br>
                <img src="${targetPlayer.Photo}" alt="${targetPlayer.Name}" style="max-width: 100%; height: auto; border-radius: 10px;"></strong>`;
            } else if (selectedLanguage === 'fr') {
                gameOverMessage = `
                <strong>Fin du jeu ! Plus de tentatives restantes.<br><br>
                Le joueur était : ${targetPlayer.Name}</strong><br><br>
                <img src="${targetPlayer.Photo}" alt="${targetPlayer.Name}" style="max-width: 100%; height: auto; border-radius: 10px;"></strong>`;
            }else if (selectedLanguage === 'ro') {
                gameOverMessage = `
                <strong>Sfârșit de joc! Nu mai ai incercări.<br><br>
                Jucătorul era: ${targetPlayer.Name}</strong><br><br>
                <img src="${targetPlayer.Photo}" alt="${targetPlayer.Name}" style="max-width: 100%; height: auto; border-radius: 10px;"></strong>`;
            }
    
            feedback.innerHTML = gameOverMessage;
            feedback.style.color='white';
            inputBox.disabled = true;
            inputBox.value = '';
            document.getElementById('hint').innerText = ''; 
            document.getElementById('Hint').innerText = ''; 
            document.getElementById('hintButton').style.display= 'none';
            showRestartButton(); // Afișează butonul de restart
        }
    }
    
    // Funcția de afișare a informațiilor jucătorului și evidențierea potrivirilor
    function displayPlayerInfo(player, targetPlayer) {
        playerInfo.innerHTML = '';
    
        if (player) {
            const playerCard = document.createElement('div');
            playerCard.className = 'player-card';
    
            // Etichete traduse în funcție de limba selectată
            let teamLabel, positionLabel, ageLabel, numberLabel, nationalityLabel;
    
            if (selectedLanguage === 'en') {
                teamLabel = 'Team';
                positionLabel = 'Position';
                ageLabel = 'Age';
                numberLabel = 'Number';
                nationalityLabel = 'Nationality';
            } else if (selectedLanguage === 'es') {
                teamLabel = 'Equipo';
                positionLabel = 'Posición';
                ageLabel = 'Edad';
                numberLabel = 'Número';
                nationalityLabel = 'Nacionalidad';
            } else if (selectedLanguage === 'fr') {
                teamLabel = 'Équipe';
                positionLabel = 'Poste';
                ageLabel = 'Âge';
                numberLabel = 'Numéro';
                nationalityLabel = 'Nationalité';
            }else if (selectedLanguage === 'ro') {
                teamLabel = 'Echipă';
                positionLabel = 'Poziție';
                ageLabel = 'Vârstă';
                numberLabel = 'Număr';
                nationalityLabel = 'Naționalitate';
            }
    
            // Detaliile jucătorului de afișat
            const playerDetails = [
                { label: teamLabel, value: player.Team, key: 'Team' },
                { label: positionLabel, value: player.Position, key: 'Position' },
                { label: ageLabel, value: player.Age, key: 'Age', compareTo: targetPlayer.Age },
                { label: numberLabel, value: player.Number, key: 'Number', compareTo: targetPlayer.Number },
                { label: nationalityLabel, value: player.Nationality, key: 'Nationality' }
            ];
            playerDetails.forEach(detail => {
                const detailDiv = document.createElement('div');
                detailDiv.className = 'player-detail';

                // Creează un label și un span pentru fiecare detaliu
                const label = document.createElement('label');
                label.textContent = `${detail.label}:`;

                const span = document.createElement('span');
                let displayValue = detail.value;

                // Evidențierea atributelor potrivite
                if (detail.value === targetPlayer[detail.key]) {
                    detailDiv.classList.add('match'); // Adaugă clasa pentru a evidenția potrivirile
                } else if (detail.label === 'Age' || detail.label === 'Number') {
                    // Adaugă săgeți pentru Age și Number
                    if (detail.value > detail.compareTo) {
                        displayValue += ' ↓'; // Valoarea este mai mare
                    } else if (detail.value < detail.compareTo) {
                        displayValue += ' ↑'; // Valoarea este mai mică
                    }
                }
                span.textContent = displayValue;

                detailDiv.appendChild(label);
                detailDiv.appendChild(span);
                playerCard.appendChild(detailDiv);
            });

            playerInfo.appendChild(playerCard);
        }
    }
    let clickCount = 0;

    function showHint() {
        const hintDiv = document.getElementById('hint');
        let hintMessage;
        if (selectedLanguage === 'en') {
            hintMessage = `<strong>The player plays for: ${targetPlayer.Team}</strong>`;
        } else if (selectedLanguage === 'es') {
            hintMessage = `<strong>El jugador juega para: ${targetPlayer.Team}</strong>`;
        } else if (selectedLanguage === 'fr') {
            hintMessage = `<strong>Le joueur joue pour: ${targetPlayer.Team}</strong>`;
        } else if (selectedLanguage === 'ro') {
            hintMessage = `<strong>Jucătorul joacă pentru: ${targetPlayer.Team}</strong>`;
        }
    
        hintDiv.innerHTML = hintMessage;
        hintDiv.style.color = 'white';
    }
    
    function showHint2() {
        const hintDiv = document.getElementById('Hint');
        let hintMessage;
        if (selectedLanguage === 'en') {
            hintMessage = `<strong>Player's age is: ${targetPlayer.Age}</strong>`;
        } else if (selectedLanguage === 'es') {
            hintMessage = `<strong>La edad del jugador es: ${targetPlayer.Age}</strong>`;
        } else if (selectedLanguage === 'fr') {
            hintMessage = `<strong>L'âge du joueur est: ${targetPlayer.Age}</strong>`;
        } else if (selectedLanguage === 'ro') {
            hintMessage = `<strong>Vârsta jucătorului este: ${targetPlayer.Age}</strong>`;
        }
    
        hintDiv.innerHTML = hintMessage;
        hintDiv.style.color = 'white';
    }
    
    function Hint() {
        clickCount++;
        if (clickCount == 1) {
            showHint();
        } else if (clickCount == 2) {
            showHint2();
            clickCount = 0; // Resetează clickCount după ce ai arătat al doilea indiciu
        }
    }
    
    document.getElementById('hintButton').addEventListener('click', Hint);
    // Afișează butonul de restart și resetează jocul la click
    function showRestartButton() {
        const restartButton = document.createElement('button');
        restartButton.innerText = 'Restart';
        restartButton.addEventListener('click', function() {
            attempt = 0;
            targetPlayer = getRandomPlayer();
            inputBox.disabled = false;
            feedback.innerText = '';
            playerInfo.innerHTML = '';
            inputBox.value = '';
            restartButton.remove();

            // Clear the hint text when restarting the game
            document.getElementById('hint').innerText = '';
            document.getElementById('Hint').innerText = '';
            document.getElementById('hintButton').style.display ='';
        });
        document.getElementById('restartContainer').appendChild(restartButton);
    
    }



    // Adaugă event listener pentru a rula funcția checkGuess când utilizatorul apasă enter
    inputBox.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            checkGuess();
        }
    });
