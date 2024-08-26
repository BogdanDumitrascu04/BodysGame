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
        Name: 'Mohamed Salah', 
        Team: 'Liverpool', 
        Position: 'Forward', 
        Age: 32, 
        Number: 11, 
        Nationality: 'Egypt', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Salah.png',
    },
    { 
        Name: 'Darwin Nunez', 
        Team: 'Liverpool', 
        Position: 'Forward', 
        Age: 25, 
        Number: 9, 
        Nationality: 'Uruguay', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Nunez.png',
        
    },
    { 
        Name: 'Cody Gakpo', 
        Team: 'Liverpool', 
        Position: 'Forward', 
        Age: 25, 
        Number: 18, 
        Nationality: 'Netherlands', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Gakpo.png',
        
    },
    { 
        Name: 'Diogo Jota', 
        Team: 'Liverpool', 
        Position: 'Forward', 
        Age: 20, 
        Number: 11, 
        Nationality: 'Portugal', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Jota.png',
        
    },
    { 
        Name: 'Luiz Diaz', 
        Team: 'Liverpool', 
        Position: 'Forward', 
        Age: 27, 
        Number: 7, 
        Nationality: 'Colombia', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Diaz.png',
    },
    { 
        Name: 'Dominik Szoboszlai', 
        Team: 'Liverpool', 
        Position: 'Midfielder', 
        Age: 23, 
        Number: 8, 
        Nationality: 'Hungary', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Szoboszlai.png',
    },
    { 
        Name: 'Alexis Mac Allister', 
        Team: 'Liverpool', 
        Position: 'Midfielder', 
        Age: 25, 
        Number: 10, 
        Nationality: 'Argentina', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Macca.png',
    },
    { 
        Name: 'Harvey Elliott', 
        Team: 'Liverpool', 
        Position: 'Midfielder', 
        Age: 21, 
        Number: 19, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Elliot.png',
    },
    { 
        Name: 'Jones Curtis', 
        Team: 'Liverpool', 
        Position: 'Midfielder', 
        Age: 23, 
        Number: 17, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Jones.png',
    },
    { 
        Name: 'Ryan Gravenberch', 
        Team: 'Liverpool', 
        Position: 'Midfielder', 
        Age: 22, 
        Number: 38, 
        Nationality: 'Netherlands', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Gravenberch.png',
    },
    { 
        Name: 'Wataru Endo', 
        Team: 'Liverpool', 
        Position: 'Midfielder', 
        Age: 31, 
        Number: 3, 
        Nationality: 'Japan', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Endo.png',

    },
    { 
        Name: 'Andrew Robertson', 
        Team: 'Liverpool', 
        Position: 'Defender', 
        Age: 30, 
        Number: 26, 
        Nationality: 'Scotland', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Robbo.png',

    },
    { 
        Name: 'Konstantinos Tsimikas', 
        Team: 'Liverpool', 
        Position: 'Defender', 
        Age: 28, 
        Number: 21, 
        Nationality: 'Greece', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Tsimikas.png',
    },
    { 
        Name: 'Jarell Quansah', 
        Team: 'Liverpool', 
        Position: 'Defender', 
        Age: 21, 
        Number: 78, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Quansah.png',
    },
    { 
        Name: 'Virgil van Dijk', 
        Team: 'Liverpool', 
        Position: 'Defender', 
        Age: 33, 
        Number: 4, 
        Nationality: 'Netherlands', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/VanDijk.png',
    },
    { 
        Name: 'Ibrahima Konate', 
        Team: 'Liverpool', 
        Position: 'Defender', 
        Age: 25, 
        Number: 5, 
        Nationality: 'France', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Konate.png',
    },
    { 
        Name: 'Joe Gomez', 
        Team: 'Liverpool', 
        Position: 'Defender', 
        Age: 27, 
        Number: 2, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Gomez.png',
    },
    { 
        Name: 'Trent Alexander-Arnold', 
        Team: 'Liverpool', 
        Position: 'Defender', 
        Age: 25, 
        Number: 66, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Trent.png',
    },
    { 
        Name: 'Conor Bradley', 
        Team: 'Liverpool', 
        Position: 'Defender', 
        Age: 21, 
        Number: 84, 
        Nationality: 'Northern Ireland', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Bradley.png',
    },
    { 
        Name: 'Alisson Becker', 
        Team: 'Liverpool', 
        Position: 'Goalkeeper', 
        Age: 31, 
        Number: 1, 
        Nationality: 'Brazil', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Alisson.png',
    },
    { 
        Name: 'Caoimhin Kelleher', 
        Team: 'Liverpool', 
        Position: 'Goalkeeper', 
        Age: 25, 
        Number: 62, 
        Nationality: 'Ireland', 
        ImageTeam:'/media/leagues/PremierLeague/Liverpool/Logo/Liverpool.png',
        Photo:'/media/leagues/PremierLeague/Liverpool/Kelleher.png',
    },
    { 
        Name: 'Aaron Ramsdale', 
        Team: 'Arsenal', 
        Position: 'Goalkeeper', 
        Age: 26, 
        Number: 1, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Ramsdale.png',

    },
    { 
        Name: 'Ben White', 
        Team: 'Arsenal', 
        Position: 'Defender', 
        Age: 26, 
        Number: 4, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/White.png',
    },
    { 
        Name: 'Gabriel Magalhães', 
        Team: 'Arsenal', 
        Position: 'Defender', 
        Age: 26, 
        Number: 6, 
        Nationality: 'Brazil', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Gabriel.png',
    },
    { 
        Name: 'William Saliba', 
        Team: 'Arsenal', 
        Position: 'Defender', 
        Age: 23, 
        Number: 12, 
        Nationality: 'France', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Saliba.png',
    },
    { 
        Name: 'Jakub Kiwior', 
        Team: 'Arsenal', 
        Position: 'Defender', 
        Age: 24, 
        Number: 15, 
        Nationality: 'Poland', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Kiwior.png',
    },
    { 
        Name: 'Thomas Partey', 
        Team: 'Arsenal', 
        Position: 'Midfielder', 
        Age: 30, 
        Number: 5, 
        Nationality: 'Ghana', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Partey.png',
    },
    { 
        Name: 'Martin Odegaard', 
        Team: 'Arsenal', 
        Position: 'Midfielder', 
        Age: 25, 
        Number: 8, 
        Nationality: 'Norway', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Odegaard.png',
    },
    { 
        Name: 'Bukayo Saka', 
        Team: 'Arsenal', 
        Position: 'Forward', 
        Age: 22, 
        Number: 7, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Saka.png',
    },
    { 
        Name: 'Gabriel Jesus', 
        Team: 'Arsenal', 
        Position: 'Forward', 
        Age: 27, 
        Number: 9, 
        Nationality: 'Brazil', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Jesus.png',
    },
    { 
        Name: 'Eddie Nketiah', 
        Team: 'Nottingham Forest', 
        Position: 'Forward', 
        Age: 24, 
        Number: 14, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/Nottingham/Logo/Nottingham.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Nketiah.png',
    },
    { 
        Name: 'Leandro Trossard', 
        Team: 'Arsenal', 
        Position: 'Forward', 
        Age: 29, 
        Number: 11, 
        Nationality: 'Belgium', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Trossard.png',
    },
    { 
        Name: 'Jorginho', 
        Team: 'Arsenal', 
        Position: 'Midfielder', 
        Age: 32, 
        Number: 20, 
        Nationality: 'Italy', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Jorginho.png',
    },
    { 
        Name: 'Gabriel Martinelli', 
        Team: 'Arsenal', 
        Position: 'Forward', 
        Age: 23, 
        Number: 11, 
        Nationality: 'Brazil', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Martinelli.png',
    },
    { 
        Name: 'Declan Rice', 
        Team: 'Arsenal', 
        Position: 'Midfielder', 
        Age: 25, 
        Number: 41, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Rice.png',
    },
    { 
        Name: 'Riccardo Calafiori', 
        Team: 'Arsenal', 
        Position: 'Defender', 
        Age: 22, 
        Number: 33, 
        Nationality: 'Italy', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Calafiori.png',
    },
    { 
        Name: 'Jurrien Timber', 
        Team: 'Arsenal', 
        Position: 'Defender', 
        Age: 23, 
        Number: 12, 
        Nationality: 'Netherlands', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Timber.png',
    },
    { 
        Name: 'David Raya', 
        Team: 'Arsenal', 
        Position: 'Goalkeeper', 
        Age: 28, 
        Number: 22, 
        Nationality: 'Spain', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Raya.png',
    },
    { 
        Name: 'Kai Havertz', 
        Team: 'Arsenal', 
        Position: 'Forward', 
        Age: 25, 
        Number: 29, 
        Nationality: 'Germany', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Havertz.png',
    },
    { 
        Name: 'Fabio Vieira', 
        Team: 'Arsenal', 
        Position: 'Midfielder', 
        Age: 24, 
        Number: 21, 
        Nationality: 'Portugal', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Vieira.png',
    },
    { 
        Name: 'Oleksandr Zinchenko', 
        Team: 'Arsenal', 
        Position: 'Defender', 
        Age: 27, 
        Number: 35, 
        Nationality: 'Ukraine', 
        ImageTeam:'/media/leagues/PremierLeague/Arsenal/Logo/Arsenal.png',
        Photo:'/media/leagues/PremierLeague/Arsenal/Zinchenko.png',
    },
    { 
        Name: 'Emiliano Martínez', 
        Team: 'Aston Villa', 
        Position: 'Goalkeeper', 
        Age: 31, 
        Number: 1, 
        Nationality: 'Argentina', 
        ImageTeam:'/media/leagues/PremierLeague/AstonVilla/Logo/AstonVilla.png',
        Photo:'/media/leagues/PremierLeague/AstonVilla/Martinez.png',
    },
    { 
        Name: 'Matty Cash', 
        Team: 'Aston Villa', 
        Position: 'Defender', 
        Age: 26, 
        Number: 2, 
        Nationality: 'Poland', 
        ImageTeam:'/media/leagues/PremierLeague/AstonVilla/Logo/AstonVilla.png',
        Photo:'/media/leagues/PremierLeague/AstonVilla/Cash.png',
    },
    { 
        Name: 'Tyrone Mings', 
        Team: 'Aston Villa', 
        Position: 'Defender', 
        Age: 31, 
        Number: 5, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/AstonVilla/Logo/AstonVilla.png',
        Photo:'/media/leagues/PremierLeague/AstonVilla/Mings.png',
    },
    { 
        Name: 'Ezri Konsa', 
        Team: 'Aston Villa', 
        Position: 'Defender', 
        Age: 25, 
        Number: 15, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/AstonVilla/Logo/AstonVilla.png',
        Photo:'/media/leagues/PremierLeague/AstonVilla/Konsa.png',
    },
    { 
        Name: 'Lucas Digne', 
        Team: 'Aston Villa', 
        Position: 'Defender', 
        Age: 31, 
        Number: 27, 
        Nationality: 'France', 
        ImageTeam:'/media/leagues/PremierLeague/AstonVilla/Logo/AstonVilla.png',
        Image: './AstonVilla/LucasDigne.png',
        Photo:'/media/leagues/PremierLeague/AstonVilla/Digne.png',

    },
    { 
        Name: 'Pau Torres', 
        Team: 'Aston Villa', 
        Position: 'Defender', 
        Age: 27, 
        Number: 14, 
        Nationality: 'Spain', 
        ImageTeam:'/media/leagues/PremierLeague/AstonVilla/Logo/AstonVilla.png',
        Photo:'/media/leagues/PremierLeague/AstonVilla/Torres.png',
    },
    { 
        Name: 'John McGinn', 
        Team: 'Aston Villa', 
        Position: 'Midfielder', 
        Age: 30, 
        Number: 7, 
        Nationality: 'Scotland', 
        ImageTeam:'/media/leagues/PremierLeague/AstonVilla/Logo/AstonVilla.png',
        Photo:'/media/leagues/PremierLeague/AstonVilla/McGinn.png',
    },
    { 
        Name: 'Jacob Ramsey', 
        Team: 'Aston Villa', 
        Position: 'Midfielder', 
        Age: 22, 
        Number: 41, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/AstonVilla/Logo/AstonVilla.png',
        Photo:'/media/leagues/PremierLeague/AstonVilla/Ramsey.png',
    },
    { 
        Name: 'Boubacar Kamara', 
        Team: 'Aston Villa', 
        Position: 'Midfielder', 
        Age: 24, 
        Number: 44, 
        Nationality: 'France', 
        ImageTeam:'/media/leagues/PremierLeague/AstonVilla/Logo/AstonVilla.png',
        Photo:'/media/leagues/PremierLeague/AstonVilla/Kamara.png',
    },
    { 
        Name: 'Ollie Watkins', 
        Team: 'Aston Villa', 
        Position: 'Forward', 
        Age: 28, 
        Number: 11, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/AstonVilla/Logo/AstonVilla.png',
        Photo:'/media/leagues/PremierLeague/AstonVilla/Watkins.png',
    },
    { 
        Name: 'Leon Bailey', 
        Team: 'Aston Villa', 
        Position: 'Forward', 
        Age: 26, 
        Number: 31, 
        Nationality: 'Jamaica', 
        ImageTeam:'/media/leagues/PremierLeague/AstonVilla/Logo/AstonVilla.png',
        Photo:'/media/leagues/PremierLeague/AstonVilla/Bailey.png',
    },
    { 
        Name: 'Emiliano Buendía', 
        Team: 'Aston Villa', 
        Position: 'Midfielder', 
        Age: 27, 
        Number: 10, 
        Nationality: 'Argentina',
        ImageTeam:'/media/leagues/PremierLeague/AstonVilla/Logo/AstonVilla.png', 
        Photo:'/media/leagues/PremierLeague/AstonVilla/Buendia.png',
    },
    { 
        Name: 'Youri Tielemans', 
        Team: 'Aston Villa', 
        Position: 'Midfielder', 
        Age: 27, 
        Number: 8, 
        Nationality: 'Belgium', 
        ImageTeam:'/media/leagues/PremierLeague/AstonVilla/Logo/AstonVilla.png',
        Photo:'/media/leagues/PremierLeague/AstonVilla/Tielemans.png',
    },
    { 
        Name: 'Dendoncker', 
        Team: 'Aston Villa', 
        Position: 'Midfielder', 
        Age: 29, 
        Number: 32, 
        Nationality: 'Belgium', 
        ImageTeam:'/media/leagues/PremierLeague/AstonVilla/Logo/AstonVilla.png',
        Photo:'/media/leagues/PremierLeague/AstonVilla/Dendocker.png',
    },
    { 
        Name: 'Amadou Onana', 
        Team: 'Aston Villa', 
        Position: 'Midfielder', 
        Age: 22, 
        Number: 24, 
        Nationality: 'Belgium', 
        ImageTeam:'/media/leagues/PremierLeague/AstonVilla/Logo/AstonVilla.png',
        Photo:'/media/leagues/PremierLeague/AstonVilla/Onana.png',
    },
    { 
        Name: 'Ian Maatsen', 
        Team: 'Aston Villa', 
        Position: 'Defender', 
        Age: 22, 
        Number: 22, 
        Nationality: 'Netherlands', 
        ImageTeam:'/media/leagues/PremierLeague/AstonVilla/Logo/AstonVilla.png',
        Photo:'/media/leagues/PremierLeague/AstonVilla/Maatsen.png',
    },
    { 
        Name: 'Diego Carlos', 
        Team: 'Aston Villa', 
        Position: 'Defender', 
        Age: 31, 
        Number: 3, 
        Nationality: 'Brazil', 
        ImageTeam:'/media/leagues/PremierLeague/AstonVilla/Logo/AstonVilla.png',
        Photo:'/media/leagues/PremierLeague/AstonVilla/Carlos.png',
    },
    { 
        Name: 'Robert Sanchez', 
        Team: 'Chelsea', 
        Position: 'Goalkeeper', 
        Age: 26, 
        Number: 1, 
        Nationality: 'Spain', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Sanchez.png',
    },
    { 
        Name: 'Djordje Petrovic', 
        Team: 'Chelsea', 
        Position: 'Goalkeeper', 
        Age: 24, 
        Number: '28', 
        Nationality: 'Serbia', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Petrovic.png',
    },
    { 
        Name: 'Levi Colwill', 
        Team: 'Chelsea', 
        Position: 'Defender', 
        Age: 21, 
        Number: 6, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Colwill.png',
    },
    { 
        Name: 'Axel Disasi', 
        Team: 'Chelsea', 
        Position: 'Defender', 
        Age: 26, 
        Number: 2, 
        Nationality: 'France', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Disasi.png',
    },
    { 
        Name: 'Benoît Badiashile', 
        Team: 'Chelsea', 
        Position: 'Defender', 
        Age: 23, 
        Number: 5, 
        Nationality: 'France', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Badiashile.png',
    },
    { 
        Name: 'Wesley Fofana', 
        Team: 'Chelsea', 
        Position: 'Defender', 
        Age: 23, 
        Number: 29, 
        Nationality: 'France', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Fofana.png',
    },
    { 
        Name: 'Trevoh Chalobah', 
        Team: 'Chelsea', 
        Position: 'Defender', 
        Age: 25, 
        Number: 14, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Chalobah.png',
    },
    { 
        Name: 'Marc Cucurella', 
        Team: 'Chelsea', 
        Position: 'Defender', 
        Age: 26, 
        Number: 3, 
        Nationality: 'Spain', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Cucurella.png',
    },
    { 
        Name: 'Ben Chilwell', 
        Team: 'Chelsea', 
        Position: 'Defender', 
        Age: 27, 
        Number: '21', 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Chilwell.png',
    },
    { 
        Name: 'Reece James', 
        Team: 'Chelsea', 
        Position: 'Defender', 
        Age: 24, 
        Number: 24, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/James.png',
    },
    { 
        Name: 'Malo Gusto', 
        Team: 'Chelsea', 
        Position: 'Defender', 
        Age: 21, 
        Number: 27, 
        Nationality: 'France', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Gusto.png',
    },
    { 
        Name: 'Moisés Caicedo', 
        Team: 'Chelsea', 
        Position: ' Midfielder', 
        Age: 22, 
        Number: 25, 
        Nationality: 'Ecuador', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Caicedo.png',
    },
    { 
        Name: 'Roméo Lavia', 
        Team: 'Chelsea', 
        Position: 'Midfielder', 
        Age: 20, 
        Number: 45, 
        Nationality: 'Belgium', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Lavia.png',
    },
    { 
        Name: 'Lesley Ugochukwu', 
        Team: 'Southampton', 
        Position: ' Midfielder', 
        Age: 20, 
        Number: 17, 
        Nationality: 'France', 
        ImageTeam:'/media/leagues/PremierLeague/Southampton/Logo/Southampton.png',
        Photo:'/media/leagues/PremierLeague/Southampton/Ugochukwu.png',
    },
    { 
        Name: 'Renato Veiga', 
        Team: 'Chelsea', 
        Position: 'Midfielder', 
        Age: 20, 
        Number: 40, 
        Nationality: 'Portugal', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Veiga.png',
    
    },
    { 
        Name: 'Enzo Fernández', 
        Team: 'Chelsea', 
        Position: ' Midfielder', 
        Age: 23, 
        Number: 8, 
        Nationality: 'Argentina', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Enzo.png',
    },
    { 
        Name: 'Carney Chukwuemeka', 
        Team: 'Chelsea', 
        Position: 'Midfielder', 
        Age: 20, 
        Number: 39, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Chukwuemka.png',
    },
    { 
        Name: 'Cole Palmer', 
        Team: 'Chelsea', 
        Position: 'Midfielder', 
        Age: 22, 
        Number: 20, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Palmer.png',
    },
    { 
        Name: 'Christopher Nkunku', 
        Team: 'Chelsea', 
        Position: 'Forward', 
        Age: 26, 
        Number: 18, 
        Nationality: 'France', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Nkunku.png',
    },
    { 
        Name: 'Rahaem Sterling', 
        Team: 'Chelsea', 
        Position: 'Forward', 
        Age: 29, 
        Number: 7, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Sterling.png',
    },
    { 
        Name: 'Mykhaylo Mudryk', 
        Team: 'Chelsea', 
        Position: 'Forward', 
        Age: 23, 
        Number: 10, 
        Nationality: 'Ukrayne', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Mudryk.png',
    },
    { 
        Name: 'Noni Madueke', 
        Team: 'Chelsea', 
        Position: 'Forward', 
        Age: 22, 
        Number: 11, 
        Nationality: 'England', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Madueke.png',
    },
    { 
        Name: 'Nicolas Jackson', 
        Team: 'Chelsea', 
        Position: 'Forward', 
        Age: 26, 
        Number: 18, 
        Nationality: 'Senegal', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Jackson.png',
    },
    { 
        Name: 'Armando Broja', 
        Team: 'Ipswich', 
        Position: 'Forward', 
        Age: 22, 
        Number: 19, 
        Nationality: 'Albania', 
        ImageTeam:'/media/leagues/PremierLeague/Ipswich/Logo/Ipswich.png',
        Photo:'/media/leagues/PremierLeague/Ipswich/Broja.png',
    },
    { 
        Name: 'Joao Felix', 
        Team: 'Chelsea', 
        Position: 'Forward', 
        Age: 24, 
        Number: 19, 
        Nationality: 'Portugal', 
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Photo:'/media/leagues/PremierLeague/Chelsea/Felix.png',
    },
    {
        Name: 'Jordan Pickford',
        Team: 'Everton',
        Position: 'Goalkeeper',
        Age: 30,
        Number: 1,
        ImageTeam:'/media/leagues/PremierLeague/Everton/Logo/Everton.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Everton/Pickford.png',
    },
    {
        Name: 'Vitaliy Mykolenko',
        Team: 'Everton',
        Position: 'Defender',
        Age: 25,
        Number: 19,
        ImageTeam:'/media/leagues/PremierLeague/Everton/Logo/Everton.png',
        Nationality: 'Ukraine',
        Photo:'/media/leagues/PremierLeague/Everton/Mykolenko.png',
    },
    {
        Name: 'James Tarkowski',
        Team: 'Everton',
        Position: 'Defender',
        Age: 31,
        Number: 5,
        ImageTeam:'/media/leagues/PremierLeague/Everton/Logo/Everton.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Everton/Tarkwoski.png',
    },
    {
        Name: 'Nathan Patterson',
        Team: 'Everton',
        Position: 'Defender',
        Age: 22,
        Number: 2,
        ImageTeam:'/media/leagues/PremierLeague/Everton/Logo/Everton.png',
        Nationality: 'Scotland',
        Photo:'/media/leagues/PremierLeague/Everton/Patterson.png',
    },
    {
        Name: 'Abdoulaye Doucouré',
        Team: 'Everton',
        Position: 'Midfielder',
        Age: 31,
        Number: 16,
        ImageTeam:'/media/leagues/PremierLeague/Everton/Logo/Everton.png',
        Nationality: 'Senegal',
        Photo:'/media/leagues/PremierLeague/Everton/Doucoure.png',
    },
    {
        Name: 'Dominic Calvert-Lewin',
        Team: 'Everton',
        Position: 'Forward',
        Age: 27,
        Number: 9,
        ImageTeam:'/media/leagues/PremierLeague/Everton/Logo/Everton.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Everton/CalvertLewin.png',
    },
    {
        Name: 'Neal Maupay',
        Team: 'Everton',
        Position: 'Forward',
        Age: 28,
        Number: 7,
        ImageTeam:'/media/leagues/PremierLeague/Everton/Logo/Everton.png',
        Nationality: 'France',
        Photo:'/media/leagues/PremierLeague/Everton/Maupay.png',
    },
    {
        Name: 'Dwight McNeil',
        Team: 'Everton',
        Position: 'Forward',
        Age: 24,
        Number: 21,
        ImageTeam:'/media/leagues/PremierLeague/Everton/Logo/Everton.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Everton/McNeil.png',
    },
    {
        Name: 'Beto',
        Team: 'Everton',
        Position: 'Forward',
        Age: 26,
        Number: 14,
        ImageTeam:'/media/leagues/PremierLeague/Everton/Logo/Everton.png',
        Nationality: 'Portugal',
        Photo:'/media/leagues/PremierLeague/Everton/Beto.png',
    },
    {
        Name: 'Bernd Leno',
        Team: 'Fulham',
        Position: 'Goalkeeper',
        Age: 32,
        Number: 17,
        ImageTeam:'/media/leagues/PremierLeague/Fulham/Logo/Fulham.png',
        Nationality: 'Germany',
        Photo:'/media/leagues/PremierLeague/Fulham/Leno.png',
    },
    {
        Name: 'Issa Diop',
        Team: 'Fulham',
        Position: 'Defender',
        Age: 27,
        Number: 31,
        ImageTeam:'/media/leagues/PremierLeague/Fulham/Logo/Fulham.png',
        Nationality: 'France',
        Photo:'/media/leagues/PremierLeague/Fulham/Diop.png',
    },
    {
        Name: 'Calvin Bassey',
        Team: 'Fulham',
        Position: 'Defender',
        Age: 24,
        Number: 3,
        ImageTeam:'/media/leagues/PremierLeague/Fulham/Logo/Fulham.png',
        Nationality: 'Nigeria',
        Photo:'/media/leagues/PremierLeague/Fulham/Bassey.png',
    },
    {
        Name: 'Antonee Robinson',
        Team: 'Fulham',
        Position: 'Defender',
        Age: 26,
        Number: 5,
        ImageTeam:'/media/leagues/PremierLeague/Fulham/Logo/Fulham.png',
        Nationality: 'United States',
        Photo:'/media/leagues/PremierLeague/Fulham/Robinson.png',
    },
    {
        Name: 'Harrison Reed',
        Team: 'Fulham',
        Position: 'Midfielder',
        Age: 29,
        Number: 6,
        ImageTeam:'/media/leagues/PremierLeague/Fulham/Logo/Fulham.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Fulham/Reed.png',
    },
    {
        Name: 'Andreas Pereira',
        Team: 'Fulham',
        Position: 'Midfielder',
        Age: 28,
        Number: 15,
        ImageTeam:'/media/leagues/PremierLeague/Fulham/Logo/Fulham.png',
        Nationality: 'Brazil',
        Photo:'/media/leagues/PremierLeague/Fulham/Pereira.png',
    },
    {
        Name: 'Raul Jimenez',
        Team: 'Fulham',
        Position: 'Forward',
        Age: 33,
        Number: 10,
        ImageTeam:'/media/leagues/PremierLeague/Fulham/Logo/Fulham.png',
        Nationality: 'Mexico',
        Photo:'/media/leagues/PremierLeague/Fulham/Jimenez.png',
    },
    {
        Name: 'Alex Iwobi',
        Team: 'Fulham',
        Position: 'Midfielder',
        Age: 28,
        Number: 17,
        ImageTeam:'/media/leagues/PremierLeague/Fulham/Logo/Fulham.png',
        Nationality: 'Nigeria',
        Photo:'/media/leagues/PremierLeague/Fulham/Iwobi.png',
    },
    {
        Name: 'Adama Traore',
        Team: 'Fulham',
        Position: 'Forward',
        Age: 28,
        Number: 11,
        ImageTeam:'/media/leagues/PremierLeague/Fulham/Logo/Fulham.png',
        Nationality: 'Spain',
        Photo:'/media/leagues/PremierLeague/Fulham/Adama.png',
    },
    {
        Name: 'Ederson',
        Team: 'Manchester City',
        Position: 'Goalkeeper',
        Age: 30,
        Number: 31,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterCity/Logo/ManchesterCity.png',
        Nationality: 'Brazil',
        Photo:'/media/leagues/PremierLeague/ManchesterCity/Ederson.png',
    },
    {
        Name: 'Stefan Ortega',
        Team: 'Manchester City',
        Position: 'Goalkeeper',
        Age: 31,
        Number: 18,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterCity/Logo/ManchesterCity.png',
        Nationality: 'Germany',
        Photo:'/media/leagues/PremierLeague/ManchesterCity/Ortega.png',
    },
    {
        Name: 'Kyle Walker',
        Team: 'Manchester City',
        Position: 'Defender',
        Age: 34,
        Number: 2,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterCity/Logo/ManchesterCity.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/ManchesterCity/Wlker.png',
    },
    {
        Name: 'John Stones',
        Team: 'Manchester City',
        Position: 'Defender',
        Age: 30,
        Number: 5,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterCity/Logo/ManchesterCity.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/ManchesterCity/Stones.png',
    },
    {
        Name: 'Ruben Dias',
        Team: 'Manchester City',
        Position: 'Defender',
        Age: 27,
        Number: 3,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterCity/Logo/ManchesterCity.png',
        Nationality: 'Portugal',
        Photo:'/media/leagues/PremierLeague/ManchesterCity/Dias.png',
    },
    {
        Name: 'Josko Gvardiol',
        Team: 'Manchester City',
        Position: 'Defender',
        Age: 22,
        Number: 28,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterCity/Logo/ManchesterCity.png',
        Nationality: 'Croatia',
        Photo:'/media/leagues/PremierLeague/ManchesterCity/Gvardiol.png',
    },
    {
        Name: 'Nathan Ake',
        Team: 'Manchester City',
        Position: 'Defender',
        Age: 29,
        Number: 6,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterCity/Logo/ManchesterCity.png',
        Nationality: 'Netherlands',
        Photo:'/media/leagues/PremierLeague/ManchesterCity/Ake.png',
    },
    {
        Name: 'Bernardo Silva',
        Team: 'Manchester City',
        Position: 'Midfielder',
        Age: 29,
        Number: 20,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterCity/Logo/ManchesterCity.png',
        Nationality: 'Portugal',
        Photo:'/media/leagues/PremierLeague/ManchesterCity/Bernardo.png',
    },
    {
        Name: 'Kevin De Bruyne',
        Team: 'Manchester City',
        Position: 'Midfielder',
        Age: 32,
        Number: 17,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterCity/Logo/ManchesterCity.png',
        Nationality: 'Belgium',
        Photo:'/media/leagues/PremierLeague/ManchesterCity/KDB.png',
    },
    {
        Name: 'Rodri',
        Team: 'Manchester City',
        Position: 'Midfielder',
        Age: 27,
        Number: 16,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterCity/Logo/ManchesterCity.png',
        Nationality: 'Spain',
        Photo:'/media/leagues/PremierLeague/ManchesterCity/Rodri.png',
    },
    {
        Name: 'Phil Foden',
        Team: 'Manchester City',
        Position: 'Midfielder',
        Age: 24,
        Number: 47,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterCity/Logo/ManchesterCity.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/ManchesterCity/Foden.png',
    },
    {
        Name: 'Mateo Kovacic',
        Team: 'Manchester City',
        Position: 'Midfielder',
        Age: 30,
        Number: 8,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterCity/Logo/ManchesterCity.png',
        Nationality: 'Croatia',
        Photo:'/media/leagues/PremierLeague/ManchesterCity/Kovacic.png',
    },
    {
        Name: 'Matheus Nunes',
        Team: 'Manchester City',
        Position: 'Midfielder',
        Age: 25,
        Number: 27,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterCity/Logo/ManchesterCity.png',
        Nationality: 'Portugal',
        Photo:'/media/leagues/PremierLeague/ManchesterCity/Nunes.png',
    },
    {
        Name: 'Jack Grealish',
        Team: 'Manchester City',
        Position: 'Forward',
        Age: 28,
        Number: 10,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterCity/Logo/ManchesterCity.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/ManchesterCity/Grealish.png',
    },
    {
        Name: 'Erling Haaland',
        Team: 'Manchester City',
        Position: 'Forward',
        Age: 24,
        Number: 9,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterCity/Logo/ManchesterCity.png',
        Nationality: 'Norway',
        Photo:'/media/leagues/PremierLeague/ManchesterCity/Haaland.png',
    },
   
    {
        Name: 'Jeremy Doku',
        Team: 'Manchester City',
        Position: 'Forward',
        Age: 22,
        Number: 11,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterCity/Logo/ManchesterCity.png',
        Nationality: 'Belgium',
        Photo:'/media/leagues/PremierLeague/ManchesterCity/Doku.png',
    },
    {
        Name: 'Savinho',
        Team: 'Manchester City',
        Position: 'Forward',
        Age: 20,
        Number: 26,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterCity/Logo/ManchesterCity.png',
        Nationality: 'Brazil',
        Photo:'/media/leagues/PremierLeague/ManchesterCity/Savinho.png',
    },
    {
        Name: 'Andre Onana',
        Team: 'Manchester United',
        Position: 'Goalkeeper',
        Age: 27,
        Number: 24,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'Cameroon',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Onana.png',
    },
    {
        Name: 'Diogo Dalot',
        Team: 'Manchester United',
        Position: 'Defender',
        Age: 25,
        Number: 20,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'Portugal',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Dalot.png',
    },
    {
        Name: 'Leny Yoro',
        Team: 'Manchester United',
        Position: 'Defender',
        Age: 18,
        Number: 15,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'France',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Yoro.png',
    },
    {
        Name: 'Lisandro Martinez',
        Team: 'Manchester United',
        Position: 'Defender',
        Age: 26,
        Number: 6,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'Argentina',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Martinez.png',
    },
    {
        Name: 'Luke Shaw',
        Team: 'Manchester United',
        Position: 'Defender',
        Age: 29,
        Number: 23,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Shaw.png',
    },
    {
        Name: 'Aaron Wan-Bissaka',
        Team: 'West Ham United',
        Position: 'Defender',
        Age: 26,
        Number: 29,
        ImageTeam:'/media/leagues/PremierLeague/WestHam/Logo/WestHam.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/WanBissaka.png',
    },
    {
        Name: 'Harry Maguire',
        Team: 'Manchester United',
        Position: 'Defender',
        Age: 31,
        Number: 5,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Maguire.png',
    },
    {
        Name: 'Noussair Mazraoui',
        Team: 'Manchester United',
        Position: 'Defender',
        Age: 26,
        Number: 3,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'Maroc',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Mazraoui.png',
    },
    {
        Name: 'Joshua Zirkzee',
        Team: 'Manchester United',
        Position: 'Forward',
        Age: 23,
        Number: 11,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'Netherlands',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Zirkzee.png',
    },
    {
        Name: 'Matthijs de Ligt',
        Team: 'Manchester United',
        Position: 'Defender',
        Age: 25,
        Number: 4,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'Netherlands',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/DeLigt.png',
    },
    {
        Name: 'Kobbie Mainoo',
        Team: 'Manchester United',
        Position: 'Midfielder',
        Age: 19,
        Number: 37,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Mainoo.png',
    },
    {
        Name: 'Malacia',
        Team: 'Manchester United',
        Position: 'Defender',
        Age: 24,
        Number: 12,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'Netherlands',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Malacia.png',
    },
    {
        Name: 'Casemiro',
        Team: 'Manchester United',
        Position: 'Midfielder',
        Age: 32,
        Number: 18,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'Brazil',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Casemiro.png',
    },
    {
        Name: 'Bruno Fernandes',
        Team: 'Manchester United',
        Position: 'Midfielder',
        Age: 29,
        Number: 8,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'Portugal',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Bruno.png',
    },
    {
        Name: 'Christian Eriksen',
        Team: 'Manchester United',
        Position: 'Midfielder',
        Age: 32,
        Number: 14,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'Denmark',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Eriksen.png',
    },
    {
        Name: 'Alejandro Garnacho',
        Team: 'Manchester United',
        Position: 'Forward',
        Age: 21,
        Number: 17,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'Argentina',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Garnacho.png',
    },
    {
        Name: 'Marcus Rashford',
        Team: 'Manchester United',
        Position: 'Forward',
        Age: 26,
        Number: 10,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Rashford.png',

    },
    {
        Name: 'Jadon Sancho',
        Team: 'Manchester United',
        Position: 'Forward',
        Age: 25,
        Number: 24,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Sancho.png',
    },
    {
        Name: 'Mason Mount',
        Team: 'Manchester United',
        Position: 'Midfielder',
        Age: 26,
        Number: 7,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Mount.png',
    },
    {
        Name: 'Antony',
        Team: 'Manchester United',
        Position: 'Forward',
        Age: 24,
        Number: 21,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'Brazil',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Antony.png',
    },
    {
        Name: 'Rasmus Hojlund',
        Team: 'Manchester United',
        Position: 'Forward',
        Age: 21,
        Number: 11,
        ImageTeam:'/media/leagues/PremierLeague/ManchesterUnited/Logo/ManchesterUnited.png',
        Nationality: 'Denmark',
        Photo:'/media/leagues/PremierLeague/ManchesterUnited/Hojlund.png',
    },
    {
        Name: 'Nick Pope',
        Team: 'Newcastle United',
        Position: 'Goalkeeper',
        Age: 31,
        Number: 22,
        ImageTeam:'/media/leagues/PremierLeague/Newcastle/Logo/Newcastle.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Newcastle/Pope.png',
    },
    {
        Name: 'Kieran Trippier',
        Team: 'Newcastle United',
        Position: 'Defender',
        Age: 33,
        Number: 2,
        ImageTeam:'/media/leagues/PremierLeague/Newcastle/Logo/Newcastle.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Newcastle/Trippier.png',
    },
    {
        Name: 'Sven Botman',
        Team: 'Newcastle United',
        Position: 'Defender',
        Age: 24,
        Number: 4,
        ImageTeam:'/media/leagues/PremierLeague/Newcastle/Logo/Newcastle.png',
        Nationality: 'Netherlands',
        Photo:'/media/leagues/PremierLeague/Newcastle/Botman.png',
    },
    {
        Name: 'Fabian Schär',
        Team: 'Newcastle United',
        Position: 'Defender',
        Age: 32,
        Number: 5,
        ImageTeam:'/media/leagues/PremierLeague/Newcastle/Logo/Newcastle.png',
        Nationality: 'Switzerland',
        Photo:'/media/leagues/PremierLeague/Newcastle/Schar.png',
    },
    {
        Name: 'Dan Burn',
        Team: 'Newcastle United',
        Position: 'Defender',
        Age: 32,
        Number: 33,
        ImageTeam:'/media/leagues/PremierLeague/Newcastle/Logo/Newcastle.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Newcastle/Burn.png',
    },
    {
        Name: 'Bruno Guimarães',
        Team: 'Newcastle United',
        Position: 'Midfielder',
        Age: 26,
        Number: 39,
        ImageTeam:'/media/leagues/PremierLeague/Newcastle/Logo/Newcastle.png',
        Nationality: 'Brazil',
        Photo:'/media/leagues/PremierLeague/Newcastle/Guimaraes.png',
    },
    {
        Name: 'Joelinton',
        Team: 'Newcastle United',
        Position: 'Midfielder',
        Age: 27,
        Number: 7,
        ImageTeam:'/media/leagues/PremierLeague/Newcastle/Logo/Newcastle.png',
        Nationality: 'Brazil',
        Photo:'/media/leagues/PremierLeague/Newcastle/Joelinton.png',
    },
    {
        Name: 'Sean Longstaff',
        Team: 'Newcastle United',
        Position: 'Midfielder',
        Age: 26,
        Number: 36,
        ImageTeam:'/media/leagues/PremierLeague/Newcastle/Logo/Newcastle.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Newcastle/Longstaff.png',
    },
    {
        Name: 'Alexander Isak',
        Team: 'Newcastle United',
        Position: 'Forward',
        Age: 25,
        Number: 14,
        ImageTeam:'/media/leagues/PremierLeague/Newcastle/Logo/Newcastle.png',
        Nationality: 'Sweden',
        Photo:'/media/leagues/PremierLeague/Newcastle/Isak.png',
    },
    {
        Name: 'Callum Wilson',
        Team: 'Newcastle United',
        Position: 'Forward',
        Age: 31,
        Number: 9,
        ImageTeam:'/media/leagues/PremierLeague/Newcastle/Logo/Newcastle.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Newcastle/Wilson.png',
    },
    {
        Name: 'Miguel Almirón',
        Team: 'Newcastle United',
        Position: 'Forward',
        Age: 30,
        Number: 23,
        ImageTeam:'/media/leagues/PremierLeague/Newcastle/Logo/Newcastle.png',
        Nationality: 'Paraguay',
        Photo:'/media/leagues/PremierLeague/Newcastle/Almiron.png',
    },
    {
        Name: 'Anthony Gordon',
        Team: 'Newcastle United',
        Position: 'Forward',
        Age: 23,
        Number: 20,
        ImageTeam:'/media/leagues/PremierLeague/Newcastle/Logo/Newcastle.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Newcastle/Gordon.png',
    },
    {
        Name: 'Guglielmo Vicario',
        Team: 'Tottenham Hotspur',
        Position: 'Goalkeeper',
        Age: 27,
        Number: 25,
        ImageTeam:'/media/leagues/PremierLeague/Tottenham/Logo/Tottenham.png',
        Nationality: 'Italy',
        Photo:'/media/leagues/PremierLeague/Tottenham/Vicario.png',
    },
    {
        Name: 'Cristian Romero',
        Team: 'Tottenham Hotspur',
        Position: 'Defender',
        Age: 26,
        Number: 4,
        ImageTeam:'/media/leagues/PremierLeague/Tottenham/Logo/Tottenham.png',
        Nationality: 'Argentina',
        Photo:'/media/leagues/PremierLeague/Tottenham/Romero.png',
    },
    {
        Name: 'Radu Dragusin',
        Team: 'Tottenham Hotspur',
        Position: 'Defender',
        Age: 22,
        Number: 6,
        ImageTeam:'/media/leagues/PremierLeague/Tottenham/Logo/Tottenham.png',
        Nationality: 'Romania',
        Photo:'/media/leagues/PremierLeague/Tottenham/Dragusin.png',
    },
    {
        Name: 'Pedro Porro',
        Team: 'Tottenham Hotspur',
        Position: 'Defender',
        Age: 25,
        Number: 23,
        ImageTeam:'/media/leagues/PremierLeague/Tottenham/Logo/Tottenham.png',
        Nationality: 'Spain',
        Photo:'/media/leagues/PremierLeague/Tottenham/Porro.png',
    },
    {
        Name: 'Destiny Udogie',
        Team: 'Tottenham Hotspur',
        Position: 'Defender',
        Age: 21,
        Number: 13,
        ImageTeam:'/media/leagues/PremierLeague/Tottenham/Logo/Tottenham.png',
        Nationality: 'Italy',
        Photo:'/media/leagues/PremierLeague/Tottenham/Udogie.png',
    },
    {
        Name: 'Micky van de Ven',
        Team: 'Tottenham Hotspur',
        Position: 'Defender',
        Age: 23,
        Number: 37,
        ImageTeam:'/media/leagues/PremierLeague/Tottenham/Logo/Tottenham.png',
        Nationality: 'Netherlands',
        Photo:'/media/leagues/PremierLeague/Tottenham/VanDeVen.png',
    },
    {
        Name: 'Yves Bissouma',
        Team: 'Tottenham Hotspur',
        Position: 'Midfielder',
        Age: 27,
        Number: 8,
        ImageTeam:'/media/leagues/PremierLeague/Tottenham/Logo/Tottenham.png',
        Nationality: 'Mali',
        Photo:'/media/leagues/PremierLeague/Tottenham/Bissouma.png',
    },
    {
        Name: 'James Maddison',
        Team: 'Tottenham Hotspur',
        Position: 'Midfielder',
        Age: 27,
        Number: 10,
        ImageTeam:'/media/leagues/PremierLeague/Tottenham/Logo/Tottenham.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Tottenham/Maddison.png',
    },
    {
        Name: 'Pape Matar Sarr',
        Team: 'Tottenham Hotspur',
        Position: 'Midfielder',
        Age: 21,
        Number: 29,
        ImageTeam:'/media/leagues/PremierLeague/Tottenham/Logo/Tottenham.png',
        Nationality: 'Senegal',
        Photo:'/media/leagues/PremierLeague/Tottenham/Sarr.png',
    },
    {
        Name: 'Giovani Lo Celso',
        Team: 'Tottenham Hotspur',
        Position: 'Midfielder',
        Age: 27,
        Number: 20,
        ImageTeam:'/media/leagues/PremierLeague/Tottenham/Logo/Tottenham.png',
        Nationality: 'Argentina',
        Photo:'/media/leagues/PremierLeague/Tottenham/LoCelso.png',
    },
    {
        Name: 'Son Heung-min',
        Team: 'Tottenham Hotspur',
        Position: 'Forward',
        Age: 32,
        Number: 7,
        ImageTeam:'/media/leagues/PremierLeague/Tottenham/Logo/Tottenham.png',
        Nationality: 'South Korea',
        Photo:'/media/leagues/PremierLeague/Tottenham/Son.png',
    },
    {
        Name: 'Timo Werner',
        Team: 'Tottenham Hotspur',
        Position: 'Forward',
        Age: 28,
        Number: 16,
        ImageTeam:'/media/leagues/PremierLeague/Tottenham/Logo/Tottenham.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Tottenham/Werner.png',
    },
    {
        Name: 'Richarlison',
        Team: 'Tottenham Hotspur',
        Position: 'Forward',
        Age: 26,
        Number: 9,
        ImageTeam:'/media/leagues/PremierLeague/Tottenham/Logo/Tottenham.png',
        Nationality: 'Brazil',
        Photo:'/media/leagues/PremierLeague/Tottenham/Richarlison.png',
    },
    {
        Name: 'Dejan Kulusevski',
        Team: 'Tottenham Hotspur',
        Position: 'Forward',
        Age: 24,
        Number: 21,
        ImageTeam:'/media/leagues/PremierLeague/Tottenham/Logo/Tottenham.png',
        Nationality: 'Sweden',
        Photo:'/media/leagues/PremierLeague/Tottenham/Kulusevski.png',
    },
    {
        Name: 'Rodrigo Bentancur',
        Team: 'Tottenham Hotspur',
        Position: 'Midfielder',
        Age: 27,
        Number: 30,
        ImageTeam:'/media/leagues/PremierLeague/Tottenham/Logo/Tottenham.png',
        Nationality: 'Uruguay',
        Photo:'/media/leagues/PremierLeague/Tottenham/Bentancur.png',
    },
    {
        Name: 'Alphonse Areola',
        Team: 'West Ham United',
        Position: 'Goalkeeper',
        Age: 31,
        Number: 13,
        ImageTeam:'/media/leagues/PremierLeague/WestHam/Logo/WestHam.png',
        Nationality: 'France',
        Photo:'/media/leagues/PremierLeague/WestHam/Areola.png',
    },
    {
        Name: 'Vladimir Coufal',
        Team: 'West Ham United',
        Position: 'Defender',
        Age: 31,
        Number: 5,
        ImageTeam:'/media/leagues/PremierLeague/WestHam/Logo/WestHam.png',
        Nationality: 'Czech Republic',
        Photo:'/media/leagues/PremierLeague/WestHam/Coufal.png',
    },
    {
        Name: 'Kurt Zouma',
        Team: 'West Ham United',
        Position: 'Defender',
        Age: 29,
        Number: 15,
        ImageTeam:'/media/leagues/PremierLeague/WestHam/Logo/WestHam.png',
        Nationality: 'France',
        Photo:'/media/leagues/PremierLeague/WestHam/Zouma.png',
    },
    {
        Name: 'Tomas Soucek',
        Team: 'West Ham United',
        Position: 'Midfielder',
        Age: 29,
        Number: 28,
        ImageTeam:'/media/leagues/PremierLeague/WestHam/Logo/WestHam.png',
        Nationality: 'Czech Republic',
        Photo:'/media/leagues/PremierLeague/WestHam/Soucek.png',
    },
    {
        Name: 'Lucas Paquetá',
        Team: 'West Ham United',
        Position: 'Midfielder',
        Age: 26,
        Number: 10,
        ImageTeam:'/media/leagues/PremierLeague/WestHam/Logo/WestHam.png',
        Nationality: 'Brazil',
        Photo:'/media/leagues/PremierLeague/WestHam/Paqueta.png',
    },
    {
        Name: 'Jarrod Bowen',
        Team: 'West Ham United',
        Position: 'Forward',
        Age: 27,
        Number: 20,
        ImageTeam:'/media/leagues/PremierLeague/WestHam/Logo/WestHam.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/WestHam/Bowen.png',
    },
    {
        Name: 'Michail Antonio',
        Team: 'West Ham United',
        Position: 'Forward',
        Age: 34,
        Number: 9,
        ImageTeam:'/media/leagues/PremierLeague/WestHam/Logo/WestHam.png',
        Nationality: 'Jamaica',
        Photo:'/media/leagues/PremierLeague/WestHam/Antonio.png',
    },
    {
        Name: 'Danny Ings',
        Team: 'West Ham United',
        Position: 'Forward',
        Age: 32,
        Number: 18,
        ImageTeam:'/media/leagues/PremierLeague/WestHam/Logo/WestHam.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/WestHam/Ings.png',
    },
    {
        Name: 'Nayef Aguerd',
        Team: 'West Ham United',
        Position: 'Defender',
        Age: 27,
        Number: 27,
        ImageTeam:'/media/leagues/PremierLeague/WestHam/Logo/WestHam.png',
        Nationality: 'Maroc',
        Photo:'/media/leagues/PremierLeague/WestHam/Aguerd.png',
    },
    {
        Name: 'Mohammed Kudus',
        Team: 'West Ham United',
        Position: 'Forward',
        Age: 23,
        Number: 14,
        ImageTeam:'/media/leagues/PremierLeague/WestHam/Logo/WestHam.png',
        Nationality: 'Ghana',
        Photo:'/media/leagues/PremierLeague/WestHam/Kudus.png',
    },
    {
        Name: 'Dean Henderson',
        Team: 'Crystal Palace',
        Position: 'Goalkeeper',
        Age: 27,
        Number: 30,
        ImageTeam:'/media/leagues/PremierLeague/CrystalPalace/Logo/CrystalPalace.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/CrystalPalace/Henderson.png',
    },
    {
        Name: 'Joachim Andersen',
        Team: 'Fulham',
        Position: 'Defender',
        Age: 28,
        Number: 16,
        ImageTeam:'/media/leagues/PremierLeague/Fulham/Logo/Fulham.png',
        Nationality: 'Denmark',
        Photo:'/media/leagues/PremierLeague/Fulham/Andersen.png',
    },
    {
        Name: 'Marc Guehi',
        Team: 'Crystal Palace',
        Position: 'Defender',
        Age: 24,
        Number: 6,
        ImageTeam:'/media/leagues/PremierLeague/CrystalPalace/Logo/CrystalPalace.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/CrystalPalace/Guehi.png',
    },
    {
        Name: 'Tyrick Mitchell',
        Team: 'Crystal Palace',
        Position: 'Defender',
        Age: 24,
        Number: 3,
        ImageTeam:'/media/leagues/PremierLeague/CrystalPalace/Logo/CrystalPalace.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/CrystalPalace/Mithchell.png',

    },
    {
        Name: 'Cheick Doucouré',
        Team: 'Crystal Palace',
        Position: 'Midfielder',
        Age: 24,
        Number: 28,
        ImageTeam:'/media/leagues/PremierLeague/CrystalPalace/Logo/CrystalPalace.png',
        Nationality: 'Mali',
        Photo:'/media/leagues/PremierLeague/CrystalPalace/Doucoure.png',
    },
    {
        Name: 'Eberechi Eze',
        Team: 'Crystal Palace',
        Position: 'Midfielder',
        Age: 26,
        Number: 10,
        ImageTeam:'/media/leagues/PremierLeague/CrystalPalace/Logo/CrystalPalace.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/CrystalPalace/Eze.png',
    },
    {
        Name: 'Jeffrey Schlupp',
        Team: 'Crystal Palace',
        Position: 'Midfielder',
        Age: 31,
        Number: 15,
        ImageTeam:'/media/leagues/PremierLeague/CrystalPalace/Logo/CrystalPalace.png',
        Nationality: 'Ghana',
        Photo:'/media/leagues/PremierLeague/CrystalPalace/Schlupp.png',
    },
    {
        Name: 'Jordan Ayew',
        Team: 'Crystal Palace',
        Position: 'Forward',
        Age: 32,
        Number: 9,
        ImageTeam:'/media/leagues/PremierLeague/CrystalPalace/Logo/CrystalPalace.png',
        Nationality: 'Ghana',
        Photo:'/media/leagues/PremierLeague/CrystalPalace/Ayew.png',
    },
    {
        Name: 'Odsonne Edouard',
        Team: 'Crystal Palace',
        Position: 'Forward',
        Age: 26,
        Number: 14,
        ImageTeam:'/media/leagues/PremierLeague/CrystalPalace/Logo/CrystalPalace.png',
        Nationality: 'France',
        Photo:'/media/leagues/PremierLeague/CrystalPalace/Edouard.png',
    },
    {
        Name: 'Jean-Philippe Mateta',
        Team: 'Crystal Palace',
        Position: 'Forward',
        Age: 26,
        Number: 29,
        ImageTeam:'/media/leagues/PremierLeague/CrystalPalace/Logo/CrystalPalace.png',
        Nationality: 'France',
        Photo:'/media/leagues/PremierLeague/CrystalPalace/Mateta.png',
    },
    {
        Name: 'Arijanet Muric',
        Team: 'Ipswich Town',
        Position: 'Goalkeeper',
        Age: 26,
        Number: 1,
        ImageTeam:'/media/leagues/PremierLeague/Ipswich/Logo/Ipswich.png',
        Nationality: 'Kosovo',
        Photo:'/media/leagues/PremierLeague/Ipswich/Muric.png',
    },
    {
        Name: 'Jacob Greaves',
        Team: 'Ipswich Town',
        Position: 'Defender',
        Age: 24,
        Number: 3,
        ImageTeam:'/media/leagues/PremierLeague/Ipswich/Logo/Ipswich.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Ipswich/Greaves.png',
    },
    {
        Name: 'Omari Hutchinson',
        Team: 'Ipswich Town',
        Position: 'Forward',
        Age: 20,
        Number: 20,
        ImageTeam:'/media/leagues/PremierLeague/Ipswich/Logo/Ipswich.png',
        Nationality: 'Jamaica',
        Photo:'/media/leagues/PremierLeague/Ipswich/Hutchinson.png',
    },
    {
        Name: 'Liam Delap',
        Team: 'Ipswich Town',
        Position: 'Midfielder',
        Age: 21,
        Number: 9,
        ImageTeam:'/media/leagues/PremierLeague/Ipswich/Logo/Ipswich.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Ipswich/Delap.png',
    },
    {
        Name: 'Connor Chaplin',
        Team: 'Ipswich Town',
        Position: 'Forward',
        Age: 26,
        Number: 10,
        ImageTeam:'/media/leagues/PremierLeague/Ipswich/Logo/Ipswich.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Ipswich/Delap.png',
    },
    {
        Name: 'Wout Faes',
        Team: 'Leicester City',
        Position: 'Defender',
        Age: 26,
        Number: 3,
        ImageTeam:'/media/leagues/PremierLeague/LeicesterCity/Logo/Leicester.png',
        Nationality: 'Belgium',
        Photo:'/media/leagues/PremierLeague/LeicesterCity/Faes.png',
    },
    {
        Name: 'James Justin',
        Team: 'Leicester City',
        Position: 'Defender',
        Age: 26,
        Number: 2,
        ImageTeam:'/media/leagues/PremierLeague/LeicesterCity/Logo/Leicester.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/LeicesterCity/Justin.png',
    },
    {
        Name: 'Ricardo Pereira',
        Team: 'Leicester City',
        Position: 'Defender',
        Age: 30,
        Number: 21,
        ImageTeam:'/media/leagues/PremierLeague/LeicesterCity/Logo/Leicester.png',
        Nationality: 'Portugal',
        Photo:'/media/leagues/PremierLeague/LeicesterCity/Pereira.png',
    },
    {
        Name: 'Wilfred Ndidi',
        Team: 'Leicester City',
        Position: 'Midfielder',
        Age: 27,
        Number: 25,
        ImageTeam:'/media/leagues/PremierLeague/LeicesterCity/Logo/Leicester.png',
        Nationality: 'Nigeria',
        Photo:'/media/leagues/PremierLeague/LeicesterCity/Ndidi.png',
    },
    {
        Name: 'Boubakary Soumaré',
        Team: 'Leicester City',
        Position: 'Midfielder',
        Age: 26,
        Number: 8,
        ImageTeam:'/media/leagues/PremierLeague/LeicesterCity/Logo/Leicester.png',
        Nationality: 'France',
        Photo:'/media/leagues/PremierLeague/LeicesterCity/Soumare.png',
    },
    {
        Name: 'Stephy Mavididi',
        Team: 'Leicester City',
        Position: 'Forward',
        Age: 26,
        Number: 10,
        ImageTeam:'/media/leagues/PremierLeague/LeicesterCity/Logo/Leicester.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/LeicesterCity/Mavididi.png',
    },
    {
        Name: 'Patson Daka',
        Team: 'Leicester City',
        Position: 'Forward',
        Age: 25,
        Number: 20,
        ImageTeam:'/media/leagues/PremierLeague/LeicesterCity/Logo/Leicester.png',
        Nationality: 'Zambia',
        Photo:'/media/leagues/PremierLeague/LeicesterCity/Daka.png',
    },
    {
        Name: 'Jamie Vardy',
        Team: 'Leicester City',
        Position: 'Forward',
        Age: 37,
        Number: 9,
        ImageTeam:'/media/leagues/PremierLeague/LeicesterCity/Logo/Leicester.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/LeicesterCity/Vardy.png',
    },
    {
        Name: 'Gavin Bazunu',
        Team: 'Southampton',
        Position: 'Goalkeeper',
        Age: 22,
        Number: 1,
        ImageTeam:'/media/leagues/PremierLeague/Southampton/Logo/Southampton.png',
        Nationality: 'Republic of Ireland',
        Photo:'/media/leagues/PremierLeague/Southampton/Bazunu.png',
    },
    {
        Name: 'Kyle Walker-Peters',
        Team: 'Southampton',
        Position: 'Defender',
        Age: 26,
        Number: 2,
        ImageTeam:'/media/leagues/PremierLeague/Southampton/Logo/Southampton.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Southampton/Peters.png',
    },
    {
        Name: 'Jan Bednarek',
        Team: 'Southampton',
        Position: 'Defender',
        Age: 28,
        Number: 6,
        ImageTeam:'/media/leagues/PremierLeague/Southampton/Logo/Southampton.png',
        Nationality: 'Poland',
        Photo:'/media/leagues/PremierLeague/Southampton/Bednarek.png',
    },
    {
        Name: 'Edson Alvarez',
        Team: 'West Ham United',
        Position: 'Midfielder',
        Age: 26,
        Number: 19,
        ImageTeam:'/media/leagues/PremierLeague/WestHam/Logo/WestHam.png',
        Nationality: 'Mexico',
        Photo:'/media/leagues/PremierLeague/WestHam/Alvarez.png',
    },
    {
        Name: 'James Ward-Prowse',
        Team: 'West Ham United',
        Position: 'Midfielder',
        Age: 29,
        Number: 7,
        ImageTeam:'/media/leagues/PremierLeague/WestHam/Logo/WestHam.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/WestHam/Ward.png',
    },
    {
        Name: 'Adam Armstrong',
        Team: 'Southampton',
        Position: 'Forward',
        Age: 26,
        Number: 9,
        ImageTeam:'/media/leagues/PremierLeague/Southampton/Logo/Southampton.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Southampton/Armstrong.png',
    },

    {
        Name: 'Adam Lallana',
        Team: 'Southampton',
        Position: 'Midfielder',
        Age: 36,
        Number: 22,
        ImageTeam:'/media/leagues/PremierLeague/Southampton/Logo/Southampton.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Southampton/Lallana.png',
    },
    {
        Name: 'Kamaldeen Sulemana',
        Team: 'Southampton',
        Position: 'Forward',
        Age: 22,
        Number: 11,
        ImageTeam:'/media/leagues/PremierLeague/Southampton/Logo/Southampton.png',
        Nationality: 'Ghana',
        Photo:'/media/leagues/PremierLeague/Southampton/sulemana.png',
    },
    {
        Name: 'Paul Onuachu',
        Team: 'Southampton',
        Position: 'Forward',
        Age: 30,
        Number: 12,
        ImageTeam:'/media/leagues/PremierLeague/Southampton/Logo/Southampton.png',
        Nationality: 'Nigeria',
        Photo:'/media/leagues/PremierLeague/Southampton/Onuachu.png',
    },
    {
        Name: 'José Sá',
        Team: 'Wolverhampton Wanderers',
        Position: 'Goalkeeper',
        Age: 30,
        Number: 1,
        ImageTeam:'/media/leagues/PremierLeague/Wolves/Logo/Wolves.png',
        Nationality: 'Portugal',
        Photo:'/media/leagues/PremierLeague/Wolves/JoseSa.png',
    },
    {
        Name: 'Nélson Semedo',
        Team: 'Wolverhampton Wanderers',
        Position: 'Defender',
        Age: 30,
        Number: 22,
        ImageTeam:'/media/leagues/PremierLeague/Wolves/Logo/Wolves.png',
        Nationality: 'Portugal',
        Photo:'/media/leagues/PremierLeague/Wolves/Semedo.png',
    },
    {
        Name: 'Toti Gomes',
        Team: 'Wolverhampton Wanderers',
        Position: 'Defender',
        Age: 25,
        Number: 24,
        ImageTeam:'/media/leagues/PremierLeague/Wolves/Logo/Wolves.png',
        Nationality: 'Portugal',
        Photo:'/media/leagues/PremierLeague/Wolves/Toti.png',
    },
    {
        Name: 'Joao Gomes',
        Team: 'Wolverhampton Wanderers',
        Position: 'Midfielder',
        Age: 23,
        Number: 8,
        ImageTeam:'/media/leagues/PremierLeague/Wolves/Logo/Wolves.png',
        Nationality: 'Brazil',
        Photo:'/media/leagues/PremierLeague/Wolves/Gomes.png',
    },
    {
        Name: '	Jorgen Strand Larsen',
        Team: 'Wolverhampton Wanderers',
        Position: 'Forward',
        Age: 24,
        Number: 9,
        ImageTeam:'/media/leagues/PremierLeague/Wolves/Logo/Wolves.png',
        Nationality: 'Norway',
        Photo:'/media/leagues/PremierLeague/Wolves/Larsen.png',
    },
    {
        Name: 'Pedro Neto',
        Team: 'Chelsea',
        Position: 'Forward',
        Age: 24,
        Number: 7,
        ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
        Nationality: 'Portugal',
        Photo:'/media/leagues/PremierLeague/Wolves/neto.png',
    },
    {
        Name: 'Hwang Hee-chan',
        Team: 'Wolverhampton Wanderers',
        Position: 'Forward',
        Age: 28,
        Number: 26,
        ImageTeam:'/media/leagues/PremierLeague/Wolves/Logo/Wolves.png',
        Nationality: 'South Korea',
        Photo:'/media/leagues/PremierLeague/Wolves/HeeChan.png',
    },
    {
        Name: 'Matheus Cunha',
        Team: 'Wolverhampton Wanderers',
        Position: 'Forward',
        Age: 25,
        Number: 18,
        ImageTeam:'/media/leagues/PremierLeague/Wolves/Logo/Wolves.png',
        Nationality: 'Brazil',
        Photo:'/media/leagues/PremierLeague/Wolves/Cunha.png',
    },
    {
        Name: 'Neto',
        Team: 'AFC Bournemouth',
        Position: 'Goalkeeper',
        Age: 35,
        Number: 1,
        ImageTeam:'/media/leagues/PremierLeague/Bournemouth/Logo/Bournemouth.png',
        Nationality: 'Brazil',
        Photo:'/media/leagues/PremierLeague/Bournemouth/Neto.png',
    },
    {
        Name: 'Ilya Zabarnyi',
        Team: 'AFC Bournemouth',
        Position: 'Defender',
        Age: 26,
        Number: 6,
        ImageTeam:'/media/leagues/PremierLeague/Bournemouth/Logo/Bournemouth.png',
        Nationality: 'Ukrayne',
        Photo:'/media/leagues/PremierLeague/Bournemouth/Zabarnyi.png',
    },
    {
        Name: 'Max Aarons',
        Team: 'AFC Bournemouth',
        Position: 'Defender',
        Age: 24,
        Number: 2,
        ImageTeam:'/media/leagues/PremierLeague/Bournemouth/Logo/Bournemouth.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Bournemouth/Aarons.png',
    },
    {
        Name: '	Milos Kerkez',
        Team: 'AFC Bournemouth',
        Position: 'Defender',
        Age: 20,
        Number: 3,
        ImageTeam:'/media/leagues/PremierLeague/Bournemouth/Logo/Bournemouth.png',
        Nationality: 'Hungary',
        Photo:'/media/leagues/PremierLeague/Bournemouth/Kerkez.png',
    },
    {
        Name: 'Marcos Senesi',
        Team: 'AFC Bournemouth',
        Position: 'Defender',
        Age: 27,
        Number: 25,
        ImageTeam:'/media/leagues/PremierLeague/Bournemouth/Logo/Bournemouth.png',
        Nationality: 'Argentina',
        Photo:'/media/leagues/PremierLeague/Bournemouth/Senesi.png',
    },
    {
        Name: 'Jefferson Lerma',
        Team: 'Crystal Palace',
        Position: 'Midfielder',
        Age: 29,
        Number: 8,
        ImageTeam:'/media/leagues/PremierLeague/CrystalPalace/Logo/CrystalPalace.png',
        Nationality: 'Colombia',
        Photo:'/media/leagues/PremierLeague/CrystalPalace/Lerma.png',
    },
    {
        Name: 'Ryan Christie',
        Team: 'AFC Bournemouth',
        Position: 'Midfielder',
        Age: 29,
        Number: 10,
        ImageTeam:'/media/leagues/PremierLeague/Bournemouth/Logo/Bournemouth.png',
        Nationality: 'Scotland',
        Photo:'/media/leagues/PremierLeague/Bournemouth/Christie.png',
    },
    {
        Name: 'Philip Billing',
        Team: 'AFC Bournemouth',
        Position: 'Midfielder',
        Age: 26,
        Number: 29,
        ImageTeam:'/media/leagues/PremierLeague/Bournemouth/Logo/Bournemouth.png',
        Nationality: 'Denmark',
        Photo:'/media/leagues/PremierLeague/Bournemouth/Billing.png',
    },
    {
        Name: 'Lewis Cook',
        Team: 'AFC Bournemouth',
        Position: 'Midfielder',
        Age: 27,
        Number: 20,
        ImageTeam:'/media/leagues/PremierLeague/Bournemouth/Logo/Bournemouth.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Bournemouth/Cook.png',
    },
    {
        Name: 'Hamed Traorè',
        Team: 'AFC Bournemouth',
        Position: 'Midfielder',
        Age: 23,
        Number: 23,
        ImageTeam:'/media/leagues/PremierLeague/Bournemouth/Logo/Bournemouth.png',
        Nationality: 'Ivory Coast',
        Photo:'/media/leagues/PremierLeague/Bournemouth/Traore.png',
    },
    {
        Name: 'Dominic Solanke',
        Team: 'Tottenham',
        Position: 'Forward',
        Age: 26,
        Number: 9,
        ImageTeam:'/media/leagues/PremierLeague/Tottenham/Logo/Tottenham.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Tottenham/Solanke.png',
    },
    {
        Name: 'Enes Unal',
        Team: 'AFC Bournemouth',
        Position: 'Forward',
        Age: 27,
        Number: 26,
        ImageTeam:'/media/leagues/PremierLeague/Bournemouth/Logo/Bournemouth.png',
        Nationality: 'Turkey',
        Photo:'/media/leagues/PremierLeague/Bournemouth/Unal.png',
    },
    {
        Name: 'Luis Sinisterra',
        Team: 'AFC Bournemouth',
        Position: 'Forward',
        Age: 25,
        Number: 17,
        ImageTeam:'/media/leagues/PremierLeague/Bournemouth/Logo/Bournemouth.png',
        Nationality: 'Colombia',
        Photo:'/media/leagues/PremierLeague/Bournemouth/Sinisterra.png',
    },
    {
        Name: 'Dango Ouattara',
        Team: 'AFC Bournemouth',
        Position: 'Forward',
        Age: 22,
        Number: 11,
        ImageTeam:'/media/leagues/PremierLeague/Bournemouth/Logo/Bournemouth.png',
        Nationality: 'Burkina Faso',
        Photo:'/media/leagues/PremierLeague/Bournemouth/Ouattara.png',
    },
    {
        Name: 'Justin Kluivert',
        Team: 'AFC Bournemouth',
        Position: 'Forward',
        Age: 25,
        Number: 19,
        ImageTeam:'/media/leagues/PremierLeague/Bournemouth/Logo/Bournemouth.png',
        Nationality: 'Netherlands',
        Photo:'/media/leagues/PremierLeague/Bournemouth/Kluivert.png',
    },
    {
        Name: 'Bart Verbruggen',
        Team: 'Brighton & Hove Albion',
        Position: 'Goalkeeper',
        Age: 21,
        Number: 1,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'Netherlands',
        Photo:'/media/leagues/PremierLeague/Brighton/Bart.png',
    },
    {
        Name: 'Lewis Dunk',
        Team: 'Brighton & Hove Albion',
        Position: 'Defender',
        Age: 32,
        Number: 5,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Brighton/Dunk.png',
    },
    {
        Name: 'Pervis Estupiñán',
        Team: 'Brighton & Hove Albion',
        Position: 'Defender',
        Age: 26,
        Number: 30,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'Ecuador',
        Photo:'/media/leagues/PremierLeague/Brighton/Estupinan.png',
    },
    {
        Name: 'Joel Veltman',
        Team: 'Brighton & Hove Albion',
        Position: 'Defender',
        Age: 32,
        Number: 17,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'Netherlands',
        Photo:'/media/leagues/PremierLeague/Brighton/Veltman.png',
    },
    {
        Name: 'Adam Webster',
        Team: 'Brighton & Hove Albion',
        Position: 'Defender',
        Age: 28,
        Number: 6,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Brighton/Webster.png',
    },
    {
        Name: 'Jan Paul van Hecke',
        Team: 'Brighton & Hove Albion',
        Position: 'Defender',
        Age: 24,
        Number: 25,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'Netherlands',
        Photo:'/media/leagues/PremierLeague/Brighton/VanHecke.png',
    },
    {
        Name: 'Igor',
        Team: 'Brighton & Hove Albion',
        Position: 'Defender',
        Age: 26,
        Number: 3,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'Brazil',
        Photo:'/media/leagues/PremierLeague/Brighton/Igor.png',
    },
    {
        Name: 'Valentin Barco',
        Team: 'Brighton & Hove Albion',
        Position: 'Defender',
        Age: 20,
        Number: 19,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'Argentina',
        Photo:'/media/leagues/PremierLeague/Brighton/Barco.png',
    },
    {
        Name: 'Tariq Lamptey',
        Team: 'Brighton & Hove Albion',
        Position: 'Defender',
        Age: 23,
        Number: 2,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'Ghana',
        Photo:'/media/leagues/PremierLeague/Brighton/Lamptey.png',
    },
    {
        Name: 'Mats Wieffer',
        Team: 'Brighton & Hove Albion',
        Position: 'Midfielder',
        Age: 24,
        Number: 16,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'Netherlands',
        Photo:'/media/leagues/PremierLeague/Brighton/Wieffer.png',
    },
    {
        Name: 'Mahmoud Dahoud',
        Team: 'Brighton & Hove Albion',
        Position: 'Midfielder',
        Age: 28,
        Number: 8,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'Germany',
        Photo:'/media/leagues/PremierLeague/Brighton/Dahoud.png',
    },
    {
        Name: 'Jakub Moder',
        Team: 'Brighton & Hove Albion',
        Position: 'Midfielder',
        Age: 25,
        Number: 15,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'Poland',
        Photo:'/media/leagues/PremierLeague/Brighton/Moder.png',
    },
    {
        Name: 'Carlos Baleba',
        Team: 'Brighton & Hove Albion',
        Position: 'Midfielder',
        Age: 20,
        Number: 20,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'Cameroon',
        Photo:'/media/leagues/PremierLeague/Brighton/Baleba.png',
    },
    {
        Name: 'James Milner',
        Team: 'Brighton & Hove Albion',
        Position: 'Midfielder',
        Age: 38,
        Number: 6,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Brighton/Milner.png',
    },
    {
        Name: 'Simon Adingra',
        Team: 'Brighton & Hove Albion',
        Position: 'Forward',
        Age: 22,
        Number: 24,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'Ivory Coast',
        Photo:'/media/leagues/PremierLeague/Brighton/Adingra.png',
    },
    {
        Name: 'Kaoru Mitoma',
        Team: 'Brighton & Hove Albion',
        Position: 'Forward',
        Age: 27,
        Number: 22,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'Japan',
        Photo:'/media/leagues/PremierLeague/Brighton/Mitoma.png',
    },
    {
        Name: 'Solly March',
        Team: 'Brighton & Hove Albion',
        Position: 'Forward',
        Age: 30,
        Number: 7,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Brighton/March.png',
    },
    {
        Name: 'João Pedro',
        Team: 'Brighton & Hove Albion',
        Position: 'Forward',
        Age: 22,
        Number: 9,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'Brazil',
        Photo:'/media/leagues/PremierLeague/Brighton/Pedro.png',
    },
    {
        Name: 'Julio Enciso',
        Team: 'Brighton & Hove Albion',
        Position: 'Forward',
        Age: 21,
        Number: 20,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'Paraguay',
        Photo:'/media/leagues/PremierLeague/Brighton/Enciso.png',
    },
    {
        Name: 'Evan Ferguson',
        Team: 'Brighton & Hove Albion',
        Position: 'Forward',
        Age: 19,
        Number: 22,
        ImageTeam:'/media/leagues/PremierLeague/Brighton/Logo/Brighton.png',
        Nationality: 'Ireland',
        Photo:'/media/leagues/PremierLeague/Brighton/Ferguson.png',
    },
    {
        Name: 'Matt Turner',
        Team: 'Nottingham Forest',
        Position: 'Goalkeeper',
        Age: 29,
        Number: 12,
        ImageTeam:'/media/leagues/PremierLeague/Nottingham/Logo/Nottingham.png',
        Nationality: 'United States',
        Photo:'/media/leagues/PremierLeague/Nottingham/Turner.png',
    },
    {
        Name: 'Neco Williams',
        Team: 'Nottingham Forest',
        Position: 'Defender',
        Age: 22,
        Number: 7,
        ImageTeam:'/media/leagues/PremierLeague/Nottingham/Logo/Nottingham.png',
        Nationality: 'Wales',
        Photo:'/media/leagues/PremierLeague/Nottingham/Wiliams.png',
    },
    {
        Name: 'Murillo',
        Team: 'Nottingham Forest',
        Position: 'Defender',
        Age: 22,
        Number: 40,
        ImageTeam:'/media/leagues/PremierLeague/Nottingham/Logo/Nottingham.png',
        Nationality: 'Brazil',
        Photo:'/media/leagues/PremierLeague/Nottingham/Murillo.png',
    }, 
    {
        Name: 'Willy Boly',
        Team: 'Nottingham Forest',
        Position: 'Defender',
        Age: 32,
        Number: 4,
        ImageTeam:'/media/leagues/PremierLeague/Nottingham/Logo/Nottingham.png',
        Nationality: 'Ivory Coast',
        Photo:'/media/leagues/PremierLeague/Nottingham/Boly.png',
    },
    {
        Name: 'Nikola Milenkovic',
        Team: 'Nottingham Forest',
        Position: 'Defender',
        Age: 26,
        Number: 31,
        ImageTeam:'/media/leagues/PremierLeague/Nottingham/Logo/Nottingham.png',
        Nationality: 'Serbia',
        Photo:'/media/leagues/PremierLeague/Nottingham/Milenkovic.png',
    },
    {
        Name: 'Ola Aina',
        Team: 'Nottingham Forest',
        Position: 'Defender',
        Age: 27,
        Number: 43,
        ImageTeam:'/media/leagues/PremierLeague/Nottingham/Logo/Nottingham.png',
        Nationality: 'Nigeria',
        Photo:'/media/leagues/PremierLeague/Nottingham/Aina.png',
    },
    {
        Name: 'Morgan Gibbs-White',
        Team: 'Nottingham Forest',
        Position: 'Midfielder',
        Age: 24,
        Number: 10,
        ImageTeam:'/media/leagues/PremierLeague/Nottingham/Logo/Nottingham.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Nottingham/White.png',
    },
    {
        Name: ' Ibrahim Sangare',
        Team: 'Nottingham Forest',
        Position: 'Midfielder',
        Age: 26,
        Number: 6,
        ImageTeam:'/media/leagues/PremierLeague/Nottingham/Logo/Nottingham.png',
        Nationality: 'Ivory Coast',
        Photo:'/media/leagues/PremierLeague/Nottingham/Sangare.png',
    },
    {
        Name: 'Ryan Yates',
        Team: 'Nottingham Forest',
        Position: 'Midfielder',
        Age: 26,
        Number: 11,
        ImageTeam:'/media/leagues/PremierLeague/Nottingham/Logo/Nottingham.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Nottingham/Yates.png',
    },
    {
        Name: 'Danilo',
        Team: 'Nottingham Forest',
        Position: 'Midfielder',
        Age: 23,
        Number: 28,
        ImageTeam:'/media/leagues/PremierLeague/Nottingham/Logo/Nottingham.png',
        Nationality: 'Brazil',
        Photo:'/media/leagues/PremierLeague/Nottingham/Danilo.png',
    },
    {
        Name: 'Nicolas Dominguez',
        Team: 'Nottingham Forest',
        Position: 'Midfielder',
        Age: 26,
        Number: 16,
        ImageTeam:'/media/leagues/PremierLeague/Nottingham/Logo/Nottingham.png',
        Nationality: 'Argentina',
        Photo:'/media/leagues/PremierLeague/Nottingham/Dominguez.png',
    },
    {
        Name: 'Taiwo Awoniyi',
        Team: 'Nottingham Forest',
        Position: 'Forward',
        Age: 26,
        Number: 17,
        ImageTeam:'/media/leagues/PremierLeague/Nottingham/Logo/Nottingham.png',
        Nationality: 'Nigeria',
        Photo:'/media/leagues/PremierLeague/Nottingham/Awoniyi.png',
    },
    {
        Name: 'Anthony Elanga',
        Team: 'Nottingham Forest',
        Position: 'Forward',
        Age: 22,
        Number: 21,
        ImageTeam:'/media/leagues/PremierLeague/Nottingham/Logo/Nottingham.png',
        Nationality: 'Sweden',
        Photo:'/media/leagues/PremierLeague/Nottingham/Elanga.png',
    },
    {
        Name: 'Callum Hudson-Odoi',
        Team: 'Nottingham Forest',
        Position: 'Forward',
        Age: 23,
        Number: 14,
        ImageTeam:'/media/leagues/PremierLeague/Nottingham/Logo/Nottingham.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Nottingham/Hudson.png',
    },
    {
        Name: 'Vitaly Janelt',
        Team: 'Brentford',
        Position: 'Midfielder',
        Age: 26,
        Number: 27,
        ImageTeam:'/media/leagues/PremierLeague/Brentford/Logo/Brentford.png',
        Nationality: 'Germany',
        Photo:'/media/leagues/PremierLeague/Brentford/Janelt.png',
    },
    {
        Name: 'Mikkel Damsgaard',
        Team: 'Brentford',
        Position: 'Midfielder',
        Age: 24,
        Number: 7,
        ImageTeam:'/media/leagues/PremierLeague/Brentford/Logo/Brentford.png',
        Nationality: 'Denmark',
        Photo:'/media/leagues/PremierLeague/Brentford/Damsgaard.png',
    },
    {
        Name: 'Mathias Jensen',
        Team: 'Brentford',
        Position: 'Midfielder',
        Age: 28,
        Number: 8,
        ImageTeam:'/media/leagues/PremierLeague/Brentford/Logo/Brentford.png',
        Nationality: 'Denmark',
        Photo:'/media/leagues/PremierLeague/Brentford/Jensen.png',
    },
    {
        Name: 'Ivan Toney',
        Team: 'Brentford',
        Position: 'Forward',
        Age: 28,
        Number: 17,
        ImageTeam:'/media/leagues/PremierLeague/Brentford/Logo/Brentford.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Brentford/Toney.png',
    },
    {
        Name: 'Igor Thiago',
        Team: 'Brentford',
        Position: 'Forward',
        Age: 23,
        Number: 9,
        ImageTeam:'/media/leagues/PremierLeague/Brentford/Logo/Brentford.png',
        Nationality: 'Brazil',
        Photo:'/media/leagues/PremierLeague/Brentford/Igor.png',
    },
    {
        Name: 'Bryan Mbeumo',
        Team: 'Brentford',
        Position: 'Forward',
        Age: 24,
        Number: 19,
        ImageTeam:'/media/leagues/PremierLeague/Brentford/Logo/Brentford.png',
        Nationality: 'Cameroon',
        Photo:'/media/leagues/PremierLeague/Brentford/Mbeumo.png',
    },
    {
        Name: 'Yoane Wissa',
        Team: 'Brentford',
        Position: 'Forward',
        Age: 26,
        Number: 23,
        ImageTeam:'/media/leagues/PremierLeague/Brentford/Logo/Brentford.png',
        Nationality: 'DR Congo',
        Photo:'/media/leagues/PremierLeague/Brentford/Wissa.png',
    },
    {
        Name: 'Mark Flekken',
        Team: 'Brentford',
        Position: 'Goalkeeper',
        Age: 31,
        Number: 1,
        ImageTeam:'/media/leagues/PremierLeague/Brentford/Logo/Brentford.png',
        Nationality: 'Netherlands',
        Photo:'/media/leagues/PremierLeague/Brentford/Flekken.png',
    },
    {
        Name: 'Rico Henry',
        Team: 'Brentford',
        Position: 'Defender',
        Age: 27,
        Number: 3,
        ImageTeam:'/media/leagues/PremierLeague/Brentford/Logo/Brentford.png',
        Nationality: 'England',
        Photo:'/media/leagues/PremierLeague/Brentford/Henry.png',
    },
    {
        Name: 'Fabio Carvalho',
        Team: 'Brentford',
        Position: 'Midfielder',
        Age: 22,
        Number: 14,
        ImageTeam:'/media/leagues/PremierLeague/Brentford/Logo/Brentford.png',
        Nationality: 'Portugal',
        Photo:'/media/leagues/PremierLeague/Brentford/Carvalho.png',
    }
];
// Generăm lista de cuvinte disponibile pentru autocompletare
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
