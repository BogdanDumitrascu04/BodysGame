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
    {
        Name: 'Thibaut Courtois',
        Team: 'Real Madrid',
        Position: 'Goalkeeper',
        Age: 32,
        Number: 1,
        Nationality: 'Belgium',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/ThibautCourtois.png',
    },
    {
        Name: 'David Alaba',
        Team: 'Real Madrid',
        Position: 'Defender',
        Age: 32,
        Number: 4,
        Nationality: 'Austria',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/DavidAlaba.png',
    },
    {
        Name: 'Antonio Rudiger',
        Team: 'Real Madrid',
        Position: 'Defender',
        Age: 31,
        Number: 22,
        Nationality: 'Germany',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/Rudiger.png',
    },
    {
        Name: 'Ferland Mendy',
        Team: 'Real Madrid',
        Position: 'Defender',
        Age: 29,
        Number: 23,
        Nationality: 'France',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/Mendy.png',
    },
    {
        Name: 'Luka Modric',
        Team: 'Real Madrid',
        Position: 'Midfielder',
        Age: 38,
        Number: 10,
        Nationality: 'Croatia',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/Modric.png',
    },
    {
        Name: 'Eduardo Camavinga',
        Team: 'Real Madrid',
        Position: 'Midfielder',
        Age: 21,
        Number: 12,
        Nationality: 'France',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/Camavinga.png',
    },
    {
        Name: 'Federico Valverde',
        Team: 'Real Madrid',
        Position: 'Midfielder',
        Age: 26,
        Number: 15,
        Nationality: 'Uruguay',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/Valverde.png',
    },
    {
        Name: 'Rodrygo',
        Team: 'Real Madrid',
        Position: 'Forward',
        Age: 23,
        Number: 11,
        Nationality: 'Brazil',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/Rodrygo.png',
    },
    {
        Name: 'Jude Bellingham',
        Team: 'Real Madrid',
        Position: 'Midfielder',
        Age: 21,
        Number: 5,
        Nationality: 'England',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/Bellingham.png',
    },
    {
        Name: 'Fran Garcia',
        Team: 'Real Madrid',
        Position: 'Defender',
        Age: 25,
        Number: 20,
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/Garcia.png',
    },
    {
        Name: 'Brahim Diaz',
        Team: 'Real Madrid',
        Position: 'Midfielder',
        Age: 25,
        Number: 21,
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/BrahimDiaz.png',
    },
    {
        Name: 'Arda Guler',
        Team: 'Real Madrid',
        Position: 'Midfielder',
        Age: 19,
        Number: 24,
        Nationality: 'Turkey',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/ArdaGuler.png',
    },
    {
        Name: 'Dani Carvajal',
        Team: 'Real Madrid',
        Position: 'Defender',
        Age: 32,
        Number: 2,
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/Carvajal.png',
    },
    {
        Name: 'Kylian Mbappe',
        Team: 'Real Madrid',
        Position: 'Forward',
        Age: 25,  
        Number: 9, 
        Nationality: 'France',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/Mbappe.png',
    },
    {
        Name: 'Endrick',
        Team: 'Real Madrid',
        Position: 'Forward',
        Age: 18,  
        Number: 16, 
        Nationality: 'Brazil',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/Endrick.png',
    },
    {
        Name: 'Eder Militao',
        Team: 'Real Madrid',
        Position: 'Defender',
        Age: 26,  
        Number: 3,
        Nationality: 'Brazil',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/Militao.png',
    },
    {
        Name: 'Lucas Vazquez',
        Team: 'Real Madrid',
        Position: 'Defender',
        Age: 33,  
        Number: 17,
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/Vazquez.png',
    },
    {
        Name: 'Dani Ceballos',
        Team: 'Real Madrid',
        Position: 'Midfielder',
        Age: 28,  
        Number: 19,
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/Ceballos.png',
    },
    {
        Name: 'Aurelien Tchouameni',
        Team: 'Real Madrid',
        Position: 'Midfielder',
        Age: 24,  
        Number: 18,
        Nationality: 'France',
        ImageTeam: 'images/leagues/LaLiga/RealMadrid/Logo/RealMadrid.png',
        Photo: 'images/leagues/LaLiga/RealMadrid/Tchouameni.png',
    },
    {
        Name: 'Marc-Andre ter Stegen',
        Team: 'FC Barcelona',
        Position: 'Goalkeeper',
        Age: 32,  
        Number: 1,
        Nationality: 'Germany',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/Stegen.png',
    },
    {
        Name: 'Ronald Araujo',
        Team: 'FC Barcelona',
        Position: 'Defender',
        Age: 25,  
        Number: 4,
        Nationality: 'Uruguay',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/Araujo.png',
    },
    {
        Name: 'Jules Koundé',
        Team: 'FC Barcelona',
        Position: 'Defender',
        Age: 25,  
        Number: 23,
        Nationality: 'France',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/JulesKounde.png',
    },
    {
        Name: 'Andreas Christensen',
        Team: 'FC Barcelona',
        Position: 'Defender',
        Age: 28,  
        Number: 15,
        Nationality: 'Denmark',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/AndreasChristensen.png',
    },
    {
        Name: 'Alejandro Balde',
        Team: 'FC Barcelona',
        Position: 'Defender',
        Age: 20,  
        Number: 12,
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/AlejandroBalde.png',
    },
    {
        Name: 'Frenkie de Jong',
        Team: 'FC Barcelona',
        Position: 'Midfielder',
        Age: 27,  
        Number: 21,
        Nationality: 'Netherlands',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/FrenkieDeJong.png',
    },
    {
        Name: 'Pedri',
        Team: 'FC Barcelona',
        Position: 'Midfielder',
        Age: 21,  
        Number: 8,
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/Pedri.png',
    },
    {
        Name: 'Gavi',
        Team: 'FC Barcelona',
        Position: 'Midfielder',
        Age: 20,  
        Number: 6,
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/Gavi.png',
    },
    {
        Name: 'Robert Lewandowski',
        Team: 'FC Barcelona',
        Position: 'Forward',
        Age: 35,  
        Number: 9,
        Nationality: 'Poland',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/RobertLewandowski.png',
    },
    {
        Name: 'Raphinha',
        Team: 'FC Barcelona',
        Position: 'Forward',
        Age: 27,  
        Number: 11,
        Nationality: 'Brazil',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/Raphinha.png',
    },
    {
        Name: 'Ferran Torres',
        Team: 'FC Barcelona',
        Position: 'Forward',
        Age: 24,  
        Number: 7,
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/FerranTorres.png',
    },
    {
        Name: 'Ansu Fati',
        Team: 'FC Barcelona',
        Position: 'Forward',
        Age: 22,  
        Number: 10,
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/AnsuFati.png',
    },
    {
        Name: 'Inigo Martinez',
        Team: 'FC Barcelona',
        Position: 'Defender',
        Age: 33,  
        Number: 3,
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/InigoMartinez.png',
    },
    {
        Name: 'Eric Garcia',
        Team: 'FC Barcelona',
        Position: 'Defender',
        Age: 23,  
        Number: 24,
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/EricGarcia.png',
    },
    {
        Name: 'Lamine Yamal',
        Team: 'FC Barcelona',
        Position: 'Forward',
        Age: 17,  
        Number: 19, 
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/LamineYamal.png',
    },
    {
        Name: 'Marc Bernal',
        Team: 'FC Barcelona',
        Position: 'Midfielder',
        Age: 19,  
        Number: 28, 
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/MarcBernal.png',
    },
    {
        Name: 'Dani Olmo',
        Team: 'FC Barcelona',
        Position: 'Midfielder',
        Age: 26,  
        Number: 20, 
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/DaniOlmo.png',
    },
    {
        Name: 'Fermin Lopez',
        Team: 'FC Barcelona',
        Position: 'Midfielder',
        Age: 21,  
        Number: 16, 
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/FerminLopez.png',
    },
    {
        Name: 'Pau Victor',
        Team: 'FC Barcelona',
        Position: 'Forward',
        Age: 22,  
        Number: 18, 
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/PauVictor.png',
    },
    {
        Name: 'Pau Cubarsi',
        Team: 'FC Barcelona',
        Position: 'Defender',
        Age: 18,  
        Number: 2, 
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Barcelona/Logo/Barcelona.png',
        Photo: 'images/leagues/LaLiga/Barcelona/PauCubarsi.png',
    },
    {
        Name: 'Jan Oblak',
        Team: 'Atlético Madrid',
        Position: 'Goalkeeper',
        Age: 31,  
        Number: 13,  
        Nationality: 'Slovenia',
        ImageTeam: 'images/leagues/LaLiga/AtlMadrid/Logo/AtlMadrid.png',
        Photo: 'images/leagues/LaLiga/AtlMadrid/JanOblak.png',
    },
    {
        Name: 'Cesar Azpilicueta',
        Team: 'Atlético Madrid',
        Position: 'Defender',
        Age: 34,  
        Number: 3,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/AtlMadrid/Logo/AtlMadrid.png',
        Photo: 'images/leagues/LaLiga/AtlMadrid/CesarAzpilicueta.png',
    },
    {
        Name: 'Jose Gimenez',
        Team: 'Atlético Madrid',
        Position: 'Defender',
        Age: 29,  
        Number: 2,
        Nationality: 'Uruguay',
        ImageTeam: 'images/leagues/LaLiga/AtlMadrid/Logo/AtlMadrid.png',
        Photo: 'images/leagues/LaLiga/AtlMadrid/JoseGimenez.png',
    },
    {
        Name: 'Robin Le Normand',
        Team: 'Atlético Madrid',
        Position: 'Defender',
        Age: 27,  
        Number: 24,  
        Nationality: 'France',
        ImageTeam: 'images/leagues/LaLiga/AtlMadrid/Logo/AtlMadrid.png',
        Photo: 'images/leagues/LaLiga/AtlMadrid/RobinLeNormand.png',
    },
    {
        Name: 'Reinildo Mandava',
        Team: 'Atlético Madrid',
        Position: 'Defender',
        Age: 30,  
        Number: 23,  
        Nationality: 'Mozambique',
        ImageTeam: 'images/leagues/LaLiga/AtlMadrid/Logo/AtlMadrid.png',
        Photo: 'images/leagues/LaLiga/AtlMadrid/ReinildoMandava.png',
    },
    {
        Name: 'Nahuel Molina',
        Team: 'Atlético Madrid',
        Position: 'Defender',
        Age: 26,  
        Number: 16,  
        Nationality: 'Argentina',
        ImageTeam: 'images/leagues/LaLiga/AtlMadrid/Logo/AtlMadrid.png',
        Photo: 'images/leagues/LaLiga/AtlMadrid/NahuelMolina.png',
    },
    {
        Name: 'Pablo Barrios',
        Team: 'Atlético Madrid',
        Position: 'Midfielder',
        Age: 20,  
        Number: 8,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/AtlMadrid/Logo/AtlMadrid.png',
        Photo: 'images/leagues/LaLiga/AtlMadrid/PabloBarrios.png',
    },
    {
        Name: 'Angel Correa',
        Team: 'Atlético Madrid',
        Position: 'Forward',
        Age: 29,  
        Number: 10,
        Nationality: 'Argentina',
        ImageTeam: 'images/leagues/LaLiga/AtlMadrid/Logo/AtlMadrid.png',
        Photo: 'images/leagues/LaLiga/AtlMadrid/AngelCorrea.png',
    },
    {
        Name: 'Rodrigo Riquelme',
        Team: 'Atlético Madrid',
        Position: 'Midfielder',
        Age: 24,  
        Number: 17,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/AtlMadrid/Logo/AtlMadrid.png',
        Photo: 'images/leagues/LaLiga/AtlMadrid/RodrigoRiquelme.png',
    },
    {
        Name: 'Koke',
        Team: 'Atlético Madrid',
        Position: 'Midfielder',
        Age: 32,  
        Number: 6,
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/AtlMadrid/Logo/AtlMadrid.png',
        Photo: 'images/leagues/LaLiga/AtlMadrid/Koke.png',
    },
    {
        Name: 'Samuel Lino',
        Team: 'Atlético Madrid',
        Position: 'Midfielder',
        Age: 24,  
        Number: 12,  
        Nationality: 'Brazil',
        ImageTeam: 'images/leagues/LaLiga/AtlMadrid/Logo/AtlMadrid.png',
        Photo: 'images/leagues/LaLiga/AtlMadrid/SamuelLino.png',
    },
    {
        Name: 'Marcos Llorente',
        Team: 'Atlético Madrid',
        Position: 'Midfielder',
        Age: 29,  
        Number: 14,
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/AtlMadrid/Logo/AtlMadrid.png',
        Photo: 'images/leagues/LaLiga/AtlMadrid/MarcosLlorente.png',
    },
    {
        Name: 'Axel Witsel',
        Team: 'Atlético Madrid',
        Position: 'Midfielder',
        Age: 35,  
        Number: 20,  
        Nationality: 'Belgium',
        ImageTeam: 'images/leagues/LaLiga/AtlMadrid/Logo/AtlMadrid.png',
        Photo: 'images/leagues/LaLiga/AtlMadrid/AxelWitsel.png',
    },
    {
        Name: 'Julian Alvarez',
        Team: 'Atlético Madrid',
        Position: 'Forward',
        Age: 24,  
        Number: 19,  
        Nationality: 'Argentina',
        ImageTeam: 'images/leagues/LaLiga/AtlMadrid/Logo/AtlMadrid.png',
        Photo: 'images/leagues/LaLiga/AtlMadrid/JulianAlvarez.png',
    },
    {
        Name: 'Antoine Griezmann',
        Team: 'Atlético Madrid',
        Position: 'Forward',
        Age: 33,  
        Number: 7,
        Nationality: 'France',
        ImageTeam: 'images/leagues/LaLiga/AtlMadrid/Logo/AtlMadrid.png',
        Photo: 'images/leagues/LaLiga/AtlMadrid/AntoineGriezmann.png',
    },
    {
        Name: 'Alexander Sørloth',
        Team: 'Atlético Madrid',
        Position: 'Forward',
        Age: 28,  
        Number: 9,  
        Nationality: 'Norway',
        ImageTeam: 'images/leagues/LaLiga/AtlMadrid/Logo/AtlMadrid.png',
        Photo: 'images/leagues/LaLiga/AtlMadrid/AlexanderSorloth.png',
    },
    { 
        Name: 'Conor Gallagher', 
        Team: 'Atletico Madrid', 
        Position: 'Midfielder', 
        Age: 24, 
        Number: 4, 
        Nationality: 'England', 
        ImageTeam: 'images/leagues/LaLiga/AtlMadrid/Logo/AtlMadrid.png',
        Photo: 'images/leagues/LaLiga/AtlMadrid/Gallacher.png',
    },
    {
        Name: 'Rodrigo de Paul',
        Team: 'Atlético Madrid',
        Position: 'Midfielder',
        Age: 30,  
        Number: 5, 
        Nationality: 'Argentina',
        ImageTeam: 'images/leagues/LaLiga/AtlMadrid/Logo/AtlMadrid.png',
        Photo: 'images/leagues/LaLiga/AtlMadrid/RodrigoDePaul.png',
    },
    {
        Name: 'Diego Conde',
        Team: 'Villarreal CF',
        Position: 'Goalkeeper',
        Age: 25, 
        Number: 1,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Villarreal/Logo/Villareal.png',
        Photo: 'images/leagues/LaLiga/Villarreal/DiegoConde.png',
    },
    {
        Name: 'Raul Albiol',
        Team: 'Villarreal CF',
        Position: 'Defender',
        Age: 38,  
        Number: 3,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Villarreal/Logo/Villareal.png',
        Photo: 'images/leagues/LaLiga/Villarreal/RaulAlbiol.png',
    },
    {
        Name: 'Eric Bailly',
        Team: 'Villarreal CF',
        Position: 'Defender',
        Age: 30, 
        Number: 4, 
        Nationality: 'Ivory Coast',
        ImageTeam: 'images/leagues/LaLiga/Villarreal/Logo/Villareal.png',
        Photo: 'images/leagues/LaLiga/Villarreal/EricBailly.png',
    },
    {
        Name: 'Sergi Cardona',
        Team: 'Villarreal CF',
        Position: 'Defender',
        Age: 23,  
        Number: 23,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Villarreal/Logo/Villareal.png',
        Photo: 'images/leagues/LaLiga/Villarreal/SergiCardona.png',
    },
    {
        Name: 'Logan Costa',
        Team: 'Villarreal CF',
        Position: 'Defender',
        Age: 22,  
        Number: 2,  
        Nationality: 'Cape Verde',
        ImageTeam: 'images/leagues/LaLiga/Villarreal/Logo/Villareal.png',
        Photo: 'images/leagues/LaLiga/Villarreal/LoganCosta.png',
    },
    {
        Name: 'Alex Baena',
        Team: 'Villarreal CF',
        Position: 'Midfielder',
        Age: 22, 
        Number: 16, 
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Villarreal/Logo/Villareal.png',
        Photo: 'images/leagues/LaLiga/Villarreal/AlexBaena.png',
    },
    {
        Name: 'Gueye',
        Team: 'Villarreal CF',
        Position: 'Midfielder',
        Age: 24,  
        Number: 18,  
        Nationality: 'Senegal',
        ImageTeam: 'images/leagues/LaLiga/Villarreal/Logo/Villareal.png',
        Photo: 'images/leagues/LaLiga/Villarreal/Gueye.png',
    },
    {
        Name: 'Dani Parejo',
        Team: 'Villarreal CF',
        Position: 'Midfielder',
        Age: 35,  
        Number: 10,
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Villarreal/Logo/Villareal.png',
        Photo: 'images/leagues/LaLiga/Villarreal/DaniParejo.png',
    },
    {
        Name: 'Arnaut Danjuma',
        Team: 'Villarreal CF',
        Position: 'Forward',
        Age: 27,  
        Number: 9,
        Nationality: 'Netherlands',
        ImageTeam: 'images/leagues/LaLiga/Villarreal/Logo/Villareal.png',
        Photo: 'images/leagues/LaLiga/Villarreal/ArnautDanjuma.png',
    },
    {
        Name: 'Gerard Moreno',
        Team: 'Villarreal CF',
        Position: 'Forward',
        Age: 32, 
        Number: 7,
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Villarreal/Logo/Villareal.png',
        Photo: 'images/leagues/LaLiga/Villarreal/GerardMoreno.png',
    },
    {
        Name: 'Nicolas Pepe',
        Team: 'Villarreal CF',
        Position: 'Forward',
        Age: 29, 
        Number: 19,  
        Nationality: 'Ivory Coast',
        ImageTeam: 'images/leagues/LaLiga/Villarreal/Logo/Villareal.png',
        Photo: 'images/leagues/LaLiga/Villarreal/NicolasPepe.png',
    },
    {
        Name: 'Ilias Akhomach',
        Team: 'Villarreal CF',
        Position: 'Forward',
        Age: 20, 
        Number: 11,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Villarreal/Logo/Villareal.png',
        Photo: 'images/leagues/LaLiga/Villarreal/IliasAkhomach.png',
    },
    {
        Name: 'Ayoze Perez',
        Team: 'Villarreal CF',
        Position: 'Forward',
        Age: 31, 
        Number: 22, 
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Villarreal/Logo/Villareal.png',
        Photo: 'images/leagues/LaLiga/Villarreal/AyozePerez.png',
    },
    {
        Name: 'Yeremy Pino',
        Team: 'Villarreal CF',
        Position: 'Forward',
        Age: 21,  
        Number: 21,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Villarreal/Logo/Villareal.png',
        Photo: 'images/leagues/LaLiga/Villarreal/YeremyPino.png',
    },
    {
        Name: 'Oscar Mingueza',
        Team: 'Celta Vigo',
        Position: 'Defender',
        Age: 25,  
        Number: 3,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/CeltaVigo/Logo/CeltaVigo.png',
        Photo: 'images/leagues/LaLiga/CeltaVigo/OscarMingueza.png',
    },
    {
        Name: 'Carl Starfelt',
        Team: 'Celta Vigo',
        Position: 'Defender',
        Age: 29,  
        Number: 2,  
        Nationality: 'Sweden',
        ImageTeam: 'images/leagues/LaLiga/CeltaVigo/Logo/CeltaVigo.png',
        Photo: 'images/leagues/LaLiga/CeltaVigo/CarlStarfelt.png',
    },
    {
        Name: 'Ilaix Moriba',
        Team: 'Celta Vigo',
        Position: 'Midfielder',
        Age: 21,  
        Number: 6,  
        Nationality: 'Guinea',
        ImageTeam: 'images/leagues/LaLiga/CeltaVigo/Logo/CeltaVigo.png',
        Photo: 'images/leagues/LaLiga/CeltaVigo/IlaixMoriba.png',
    },
    {
        Name: 'Fran Beltran',
        Team: 'Celta Vigo',
        Position: 'Midfielder',
        Age: 25,  
        Number: 8,
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/CeltaVigo/Logo/CeltaVigo.png',
        Photo: 'images/leagues/LaLiga/CeltaVigo/FranBeltran.png',
    },
    {
        Name: 'Jonathan Bamba',
        Team: 'Celta Vigo',
        Position: 'Forward',
        Age: 28,  
        Number: 17,  
        Nationality: 'France',
        ImageTeam: 'images/leagues/LaLiga/CeltaVigo/Logo/CeltaVigo.png',
        Photo: 'images/leagues/LaLiga/CeltaVigo/JonathanBamba.png',
    },
    {
        Name: 'Iago Aspas',
        Team: 'Celta Vigo',
        Position: 'Forward',
        Age: 37,  
        Number: 10,
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/CeltaVigo/Logo/CeltaVigo.png',
        Photo: 'images/leagues/LaLiga/CeltaVigo/IagoAspas.png',
    },
    {
        Name: 'Borja Iglesias',
        Team: 'Celta Vigo',
        Position: 'Forward',
        Age: 31,  
        Number: 7,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/CeltaVigo/Logo/CeltaVigo.png',
        Photo: 'images/leagues/LaLiga/CeltaVigo/BorjaIglesias.png',
    },
    {
        Name: 'Valentin Rosier',
        Team: 'Leganés',
        Position: 'Defender',
        Age: 28, 
        Number: 12,  
        Nationality: 'France',
        ImageTeam: 'images/leagues/LaLiga/Leganes/Logo/Leganes.png',
        Photo: 'images/leagues/LaLiga/Leganes/ValentinRosier.png',
    },
    {
        Name: 'Yvan Neyou',
        Team: 'Leganés',
        Position: 'Midfielder',
        Age: 27, 
        Number: 17,  
        Nationality: 'Cameroon',
        ImageTeam: 'images/leagues/LaLiga/Leganes/Logo/Leganes.png',
        Photo: 'images/leagues/LaLiga/Leganes/YvanNeyou.png',
    },
    {
        Name: 'Javi Hernandez',
        Team: 'Leganés',
        Position: 'Defender',
        Age: 25, 
        Number: 20,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Leganes/Logo/Leganes.png',
        Photo: 'images/leagues/LaLiga/Leganes/JaviHernandez.png',
    },
    {
        Name: 'Darko Brasanac',
        Team: 'Leganés',
        Position: 'Midfielder',
        Age: 32, 
        Number: 14,  
        Nationality: 'Serbia',
        ImageTeam: 'images/leagues/LaLiga/Leganes/Logo/Leganes.png',
        Photo: 'images/leagues/LaLiga/Leganes/DarkoBrasanac.png',
    },
    {
        Name: 'Miguel de la Fuente',
        Team: 'Leganés',
        Position: 'Forward',
        Age: 25, 
        Number: 9,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Leganes/Logo/Leganes.png',
        Photo: 'images/leagues/LaLiga/Leganes/MiguelDeLaFuente.png',
    },
    {
        Name: 'Dani Raba',
        Team: 'Leganés',
        Position: 'Forward',
        Age: 28, 
        Number: 10,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Leganes/Logo/Leganes.png',
        Photo: 'images/leagues/LaLiga/Leganes/DaniRaba.png',
    },
    {
        Name: 'Sergio Herrera',
        Team: 'Osasuna',
        Position: 'Goalkeeper',
        Age: 31, 
        Number: 1,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Osasuna/Logo/Osasuna.png',
        Photo: 'images/leagues/LaLiga/Osasuna/SergioHerrera.png',
    },
    {
        Name: 'Alejandro Catena',
        Team: 'Osasuna',
        Position: 'Defender',
        Age: 28, 
        Number: 24,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Osasuna/Logo/Osasuna.png',
        Photo: 'images/leagues/LaLiga/Osasuna/AlejandroCatena.png',
    },
    {
        Name: 'Jesus Areso',
        Team: 'Osasuna',
        Position: 'Defender',
        Age: 24, 
        Number: 12,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Osasuna/Logo/Osasuna.png',
        Photo: 'images/leagues/LaLiga/Osasuna/JesusAreso.png',
    },
    {
        Name: 'Moi Gomez',
        Team: 'Osasuna',
        Position: 'Midfielder',
        Age: 30, 
        Number: 16,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Osasuna/Logo/Osasuna.png',
        Photo: 'images/leagues/LaLiga/Osasuna/MoiGomez.png',
    },
    {
        Name: 'Lucas Torro',
        Team: 'Osasuna',
        Position: 'Midfielder',
        Age: 29, 
        Number: 6,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Osasuna/Logo/Osasuna.png',
        Photo: 'images/leagues/LaLiga/Osasuna/LucasTorro.png',
    },
    {
        Name: 'Jon Moncayola',
        Team: 'Osasuna',
        Position: 'Midfielder',
        Age: 25, 
        Number: 7,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Osasuna/Logo/Osasuna.png',
        Photo: 'images/leagues/LaLiga/Osasuna/JonMoncayola.png',
    },
    {
        Name: 'Ante Budimir',
        Team: 'Osasuna',
        Position: 'Forward',
        Age: 33, 
        Number: 17,  
        Nationality: 'Croatia',
        ImageTeam: 'images/leagues/LaLiga/Osasuna/Logo/Osasuna.png',
        Photo: 'images/leagues/LaLiga/Osasuna/AnteBudimir.png',
    },
    {
        Name: 'Bryan Zaragoza',
        Team: 'Osasuna',
        Position: 'Forward',
        Age: 22, 
        Number: 19,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Osasuna/Logo/Osasuna.png',
        Photo: 'images/leagues/LaLiga/Osasuna/BryanZaragoza.png',
    },
    {
        Name: 'James Rodríguez',
        Team: 'Rayo Vallecano',
        Position: 'Midfielder',
        Age: 33,  
        Number: 10, 
        Nationality: 'Colombia',
        ImageTeam: 'images/leagues/LaLiga/Vallecano/Logo/Vallecano.png',
        Photo: 'images/leagues/LaLiga/Vallecano/JamesRodriguez.png',
    },
    {
        Name: 'Andrei Ratiu',
        Team: 'Rayo Vallecano',
        Position: 'Defender',
        Age: 25,  
        Number: 2, 
        Nationality: 'Romania',
        ImageTeam: 'images/leagues/LaLiga/Vallecano/Logo/Vallecano.png',
        Photo: 'images/leagues/LaLiga/Vallecano/AndreiRatiu.png',
    },
    {
        Name: 'Florian Lejeune',
        Team: 'Rayo Vallecano',
        Position: 'Defender',
        Age: 33,  
        Number: 24, 
        Nationality: 'France',
        ImageTeam: 'images/leagues/LaLiga/Vallecano/Logo/Vallecano.png',
        Photo: 'images/leagues/LaLiga/Vallecano/FlorianLejeune.png',
    },
    {
        Name: 'Isi Palazon',
        Team: 'Rayo Vallecano',
        Position: 'Forward',
        Age: 28,  
        Number: 7, 
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Vallecano/Logo/Vallecano.png',
        Photo: 'images/leagues/LaLiga/Vallecano/IsiPalazon.png',
    },
    {
        Name: 'Oscar Valentin',
        Team: 'Rayo Vallecano',
        Position: 'Midfielder',
        Age: 29,  
        Number: 23, 
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Vallecano/Logo/Vallecano.png',
        Photo: 'images/leagues/LaLiga/Vallecano/OscarValentin.png',
    },
    {
        Name: 'Unai Lopez',
        Team: 'Rayo Vallecano',
        Position: 'Midfielder',
        Age: 28,  
        Number: 17, 
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Vallecano/Logo/Vallecano.png',
        Photo: 'images/leagues/LaLiga/Vallecano/UnaiLopez.png',
    },
    {
        Name: 'Jorge de Frutos',
        Team: 'Rayo Vallecano',
        Position: 'Forward',
        Age: 27,  
        Number: 19, 
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Vallecano/Logo/Vallecano.png',
        Photo: 'images/leagues/LaLiga/Vallecano/JorgedeFrutos.png',
    },
    {
        Name: 'Alex Remiro',
        Team: 'Real Sociedad',
        Position: 'Goalkeeper',
        Age: 29,  
        Number: 1,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/RealSociedad/Logo/RealSociedad.png',
        Photo: 'images/leagues/LaLiga/RealSociedad/AlexRemiro.png',
    },
    {
        Name: 'Hamari Traore',
        Team: 'Real Sociedad',
        Position: 'Defender',
        Age: 32,  
        Number: 18,  
        Nationality: 'Mali',
        ImageTeam: 'images/leagues/LaLiga/RealSociedad/Logo/RealSociedad.png',
        Photo: 'images/leagues/LaLiga/RealSociedad/HamariTraore.png',
    },
    {
        Name: 'Jon Pacheco',
        Team: 'Real Sociedad',
        Position: 'Defender',
        Age: 25,  
        Number: 20,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/RealSociedad/Logo/RealSociedad.png',
        Photo: 'images/leagues/LaLiga/RealSociedad/JonPacheco.png',
    },
   
    {
        Name: 'Martin Zubimendi',
        Team: 'Real Sociedad',
        Position: 'Midfielder',
        Age: 25,  
        Number: 4,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/RealSociedad/Logo/RealSociedad.png',
        Photo: 'images/leagues/LaLiga/RealSociedad/MartinZubimendi.png',
    },
    {
        Name: 'Benat Turrientes',
        Team: 'Real Sociedad',
        Position: 'Midfielder',
        Age: 23,  
        Number: 22,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/RealSociedad/Logo/RealSociedad.png',
        Photo: 'images/leagues/LaLiga/RealSociedad/BenatTurrientes.png',
    },
    {
        Name: 'Mikel Oyarzabal',
        Team: 'Real Sociedad',
        Position: 'Forward',
        Age: 26,  
        Number: 10,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/RealSociedad/Logo/RealSociedad.png',
        Photo: 'images/leagues/LaLiga/RealSociedad/MikelOyarzabal.png',
    },
    {
        Name: 'Brais Mendez',
        Team: 'Real Sociedad',
        Position: 'Midfielder',
        Age: 26,  
        Number: 27,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/RealSociedad/Logo/RealSociedad.png',
        Photo: 'images/leagues/LaLiga/RealSociedad/BraisMendez.png',
    },
    {
        Name: 'Sergio Gomez',
        Team: 'Real Sociedad',
        Position: 'Midfielder',
        Age: 24,  
        Number: 23,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/RealSociedad/Logo/RealSociedad.png',
        Photo: 'images/leagues/LaLiga/RealSociedad/SergioGomez.png',
    },
    {
        Name: 'Sheraldo Becker',
        Team: 'Real Sociedad',
        Position: 'Forward',
        Age: 30,  
        Number:11,  
        Nationality: 'Suriname',
        ImageTeam: 'images/leagues/LaLiga/RealSociedad/Logo/RealSociedad.png',
        Photo: 'images/leagues/LaLiga/RealSociedad/SheraldoBecker.png',
    },
    {
        Name: 'Umar Sadiq',
        Team: 'Real Sociedad',
        Position: 'Forward',
        Age: 27,  
        Number: 19,  
        Nationality: 'Nigeria',
        ImageTeam: 'images/leagues/LaLiga/RealSociedad/Logo/RealSociedad.png',
        Photo: 'images/leagues/LaLiga/RealSociedad/UmarSadiq.png',
    },
    {
        Name: 'Ander Barrenetxea',
        Team: 'Real Sociedad',
        Position: 'Forward',
        Age: 22,  
        Number: 7,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/RealSociedad/Logo/RealSociedad.png',
        Photo: 'images/leagues/LaLiga/RealSociedad/AnderBarrenetxea.png',
    },
    {
        Name: 'Takefusa Kubo',
        Team: 'Real Sociedad',
        Position: 'Midfielder',
        Age: 23,  
        Number: 14,  
        Nationality: 'Japan',
        ImageTeam: 'images/leagues/LaLiga/RealSociedad/Logo/RealSociedad.png',
        Photo: 'images/leagues/LaLiga/RealSociedad/TakefusaKubo.png',
    },
    {
        Name: 'Flavien Boyomo',
        Team: 'Real Valladolid',
        Position: 'Defender',
        Age: 24,  
        Number: 6, 
        Nationality: 'Cameroon',
        ImageTeam: 'images/leagues/LaLiga/Valladolid/Logo/Valladolid.png',
        Photo: 'images/leagues/LaLiga/Valladolid/FlavienBoyomo.png',
    },
    
    {
        Name: 'Eray Comert',
        Team: 'Real Valladolid',
        Position: 'Defender',
        Age: 26,  
        Number: 15, 
        Nationality: 'Switzerland',
        ImageTeam: 'images/leagues/LaLiga/Valladolid/Logo/Valladolid.png',
        Photo: 'images/leagues/LaLiga/Valladolid/ErayComert.png',
    },
    {
        Name: 'Kike Perez',
        Team: 'Real Valladolid',
        Position: 'Midfielder',
        Age: 28,  
        Number: 8, 
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Valladolid/Logo/Valladolid.png',
        Photo: 'images/leagues/LaLiga/Valladolid/KikePerez.png',
    },
    {
        Name: 'Raul Moro',
        Team: 'Real Valladolid',
        Position: 'Forward',
        Age: 21,  
        Number: 11, 
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Valladolid/Logo/Valladolid.png',
        Photo: 'images/leagues/LaLiga/Valladolid/RaulMoro.png',
    },
    {
        Name: 'Marcos Andre',
        Team: 'Real Valladolid',
        Position: 'Forward',
        Age: 27,  
        Number: 9, 
        Nationality: 'Brazil',
        ImageTeam: 'images/leagues/LaLiga/Valladolid/Logo/Valladolid.png',
        Photo: 'images/leagues/LaLiga/Valladolid/MarcosAndre.png',
    },
    {
        Name: 'Rui Silva',
        Team: 'Real Betis',
        Position: 'Goalkeeper',
        Age: 26,  
        Number: 1, 
        Nationality: 'Portugal',
        ImageTeam: 'images/leagues/LaLiga/Betis/Logo/Betis.png',
        Photo: 'images/leagues/LaLiga/Betis/RuiSilva.png',
    },
    {
        Name: 'Marc Bartra',
        Team: 'Real Betis',
        Position: 'Defender',
        Age: 33,  
        Number: 5, 
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Betis/Logo/Betis.png',
        Photo: 'images/leagues/LaLiga/Betis/MarcBartra.png',
    },
    {
        Name: 'Natan',
        Team: 'Real Betis',
        Position: 'Defender',
        Age: 21,  
        Number: 2, 
        Nationality: 'Brazil',
        ImageTeam: 'images/leagues/LaLiga/Betis/Logo/Betis.png',
        Photo: 'images/leagues/LaLiga/Betis/Natan.png',
    },
    {
        Name: 'Ricardo Rodriguez',
        Team: 'Real Betis',
        Position: 'Defender',
        Age: 31,  
        Number: 12, 
        Nationality: 'Switzerland',
        ImageTeam: 'images/leagues/LaLiga/Betis/Logo/Betis.png',
        Photo: 'images/leagues/LaLiga/Betis/RicardoRodriguez.png',
    },
    {
        Name: 'Pablo Fornals',
        Team: 'Real Betis',
        Position: 'Midfielder',
        Age: 28,  
        Number: 18, 
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Betis/Logo/Betis.png',
        Photo: 'images/leagues/LaLiga/Betis/PabloFornals.png',
    },
    {
        Name: 'Nabil Fekir',
        Team: 'Real Betis',
        Position: 'Midfielder',
        Age: 31,  
        Number: 8, 
        Nationality: 'France',
        ImageTeam: 'images/leagues/LaLiga/Betis/Logo/Betis.png',
        Photo: 'images/leagues/LaLiga/Betis/NabilFekir.png',
    },
    {
        Name: 'William Carvalho',
        Team: 'Real Betis',
        Position: 'Midfielder',
        Age: 32,  
        Number: 14, 
        Nationality: 'Portugal',
        ImageTeam: 'images/leagues/LaLiga/Betis/Logo/Betis.png',
        Photo: 'images/leagues/LaLiga/Betis/WilliamCarvalho.png',
    },
    {
        Name: 'Marc Roca',
        Team: 'Real Betis',
        Position: 'Midfielder',
        Age: 27,  
        Number: 21, 
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Betis/Logo/Betis.png',
        Photo: 'images/leagues/LaLiga/Betis/MarcRoca.png',
    },
    {
        Name: 'Abde Ezzalzouli',
        Team: 'Real Betis',
        Position: 'Forward',
        Age: 22,  
        Number: 10, 
        Nationality: 'Morocco',
        ImageTeam: 'images/leagues/LaLiga/Betis/Logo/Betis.png',
        Photo: 'images/leagues/LaLiga/Betis/AbdeEzzalzouli.png',
    },
    {
        Name: 'David Soria',
        Team: 'Getafe',
        Position: 'Goalkeeper',
        Age: 31,  
        Number: 13,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Getafe/Logo/Getafe.png',
        Photo: 'images/leagues/LaLiga/Getafe/DavidSoria.png',
    },
    {
        Name: 'Djene Dakonam',
        Team: 'Getafe',
        Position: 'Defender',
        Age: 31,  
        Number: 2,  
        Nationality: 'Togo',
        ImageTeam: 'images/leagues/LaLiga/Getafe/Logo/Getafe.png',
        Photo: 'images/leagues/LaLiga/Getafe/Djene.png',
    },

    {
        Name: 'Carles Alena',
        Team: 'Getafe',
        Position: 'Midfielder',
        Age: 26,  
        Number: 11,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Getafe/Logo/Getafe.png',
        Photo: 'images/leagues/LaLiga/Getafe/CarlesAlena.png',
    },
    {
        Name: 'Carles Perez',
        Team: 'Getafe',
        Position: 'Forward',
        Age: 26,  
        Number: 17,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Getafe/Logo/Getafe.png',
        Photo: 'images/leagues/LaLiga/Getafe/CarlesPerez.png',
    },
    {
        Name: 'Federico Peter',
        Team: 'Getafe',
        Position: 'Forward',
        Age: 21,  
        Number: 19,  
        Nationality: 'Argentina',
        ImageTeam: 'images/leagues/LaLiga/Getafe/Logo/Getafe.png',
        Photo: 'images/leagues/LaLiga/Getafe/FedericoPeter.png',
    },
    {
        Name: 'Loic Bade',
        Team: 'Sevilla FC',
        Position: 'Defender',
        Age: 24,  
        Number: 22,  
        Nationality: 'France',
        ImageTeam: 'images/leagues/LaLiga/Sevilla/Logo/Sevilla.png',
        Photo: 'images/leagues/LaLiga/Sevilla/LoicBade.png',
    },
    {
        Name: 'Sergio Ramos',
        Team: 'Sevilla FC',
        Position: 'Defender',
        Age: 38,  
        Number: 4,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Sevilla/Logo/Sevilla.png',
        Photo: 'images/leagues/LaLiga/Sevilla/SergioRamos.png',
    },
    {
        Name: 'Juanlu Sanchez',
        Team: 'Sevilla FC',
        Position: 'Defender',
        Age: 21,  
        Number: 26,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Sevilla/Logo/Sevilla.png',
        Photo: 'images/leagues/LaLiga/Sevilla/JuanluSanchez.png',
    },
    {
        Name: 'Adria Pedrosa',
        Team: 'Sevilla FC',
        Position: 'Defender',
        Age: 26,  
        Number: 3,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Sevilla/Logo/Sevilla.png',
        Photo: 'images/leagues/LaLiga/Sevilla/AdriaPedrosa.png',
    },
    {
        Name: 'Tanguy Nianzou',
        Team: 'Sevilla FC',
        Position: 'Defender',
        Age: 22,  
        Number: 24,  
        Nationality: 'France',
        ImageTeam: 'images/leagues/LaLiga/Sevilla/Logo/Sevilla.png',
        Photo: 'images/leagues/LaLiga/Sevilla/TanguyNianzou.png',
    },
    {
        Name: 'Jesús Navas',
        Team: 'Sevilla FC',
        Position: 'Defender',
        Age: 39,  
        Number: 16,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Sevilla/Logo/Sevilla.png',
        Photo: 'images/leagues/LaLiga/Sevilla/JesusNavas.png',
    },
    {
        Name: 'Marcao',
        Team: 'Sevilla FC',
        Position: 'Defender',
        Age: 30,  
        Number: 23,  
        Nationality: 'Brazil',
        ImageTeam: 'images/leagues/LaLiga/Sevilla/Logo/Sevilla.png',
        Photo: 'images/leagues/LaLiga/Sevilla/Marcao.png',
    },
    {
        Name: 'Isaac Romero',
        Team: 'Sevilla FC',
        Position: 'Forward',
        Age: 19,  
        Number: 7,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Sevilla/Logo/Sevilla.png',
        Photo: 'images/leagues/LaLiga/Sevilla/IsaacRomero.png',
    },
    {
        Name: 'Lucas Ocampos',
        Team: 'Sevilla FC',
        Position: 'Forward',
        Age: 30,  
        Number: 5,  
        Nationality: 'Argentina',
        ImageTeam: 'images/leagues/LaLiga/Sevilla/Logo/Sevilla.png',
        Photo: 'images/leagues/LaLiga/Sevilla/LucasOcampos.png',
    },
    {
        Name: 'Dodi Lukebakio',
        Team: 'Sevilla FC',
        Position: 'Forward',
        Age: 26,  
        Number: 11,  
        Nationality: 'Belgium',
        ImageTeam: 'images/leagues/LaLiga/Sevilla/Logo/Sevilla.png',
        Photo: 'images/leagues/LaLiga/Sevilla/DodiLukebakio.png',
    },
    {
        Name: 'Kelechi Iheanacho',
        Team: 'Sevilla FC',
        Position: 'Forward',
        Age: 27,  
        Number: 9,  
        Nationality: 'Nigeria',
        ImageTeam: 'images/leagues/LaLiga/Sevilla/Logo/Sevilla.png',
        Photo: 'images/leagues/LaLiga/Sevilla/KelechiIheanacho.png',
    },
    {
        Name: 'Chidera Ejuke',
        Team: 'Sevilla FC',
        Position: 'Forward',
        Age: 26,  
        Number: 21,  
        Nationality: 'Nigeria',
        ImageTeam: 'images/leagues/LaLiga/Sevilla/Logo/Sevilla.png',
        Photo: 'images/leagues/LaLiga/Sevilla/ChideraEjuke.png',
    },
    {
        Name: 'Djibril Sow',
        Team: 'Sevilla FC',
        Position: 'Midfielder',
        Age: 26,  
        Number: 20,  
        Nationality: 'Switzerland',
        ImageTeam: 'images/leagues/LaLiga/Sevilla/Logo/Sevilla.png',
        Photo: 'images/leagues/LaLiga/Sevilla/DjibrilSow.png',
    },
    {
        Name: 'Saul Niguez',
        Team: 'Sevilla FC',
        Position: 'Midfielder',
        Age: 30,  
        Number: 17,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Sevilla/Logo/Sevilla.png',
        Photo: 'images/leagues/LaLiga/Sevilla/SaulNiguez.png',
    },
    {
        Name: 'Albert Sambi Lokonga',
        Team: 'Sevilla FC',
        Position: 'Midfielder',
        Age: 25,  
        Number: 18,  
        Nationality: 'Belgium',
        ImageTeam: 'images/leagues/LaLiga/Sevilla/Logo/Sevilla.png',
        Photo: 'images/leagues/LaLiga/Sevilla/AlbertSambiLokonga.png',
    },
    {
        Name: 'Johan Mojica',
        Team: 'RCD Mallorca',
        Position: 'Defender',
        Age: 31,  
        Number: 22,  
        Nationality: 'Colombia',
        ImageTeam: 'images/leagues/LaLiga/Mallorca/Logo/Mallorca.png',
        Photo: 'images/leagues/LaLiga/Mallorca/JohanMojica.png',
    },
    {
        Name: 'Sergi Darder',
        Team: 'RCD Mallorca',
        Position: 'Midfielder',
        Age: 30,  
        Number: 10,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Mallorca/Logo/Mallorca.png',
        Photo: 'images/leagues/LaLiga/Mallorca/SergiDarder.png',
    },
    {
        Name: 'Samu Costa',
        Team: 'RCD Mallorca',
        Position: 'Midfielder',
        Age: 24,  
        Number: 12,  
        Nationality: 'Portugal',
        ImageTeam: 'images/leagues/LaLiga/Mallorca/Logo/Mallorca.png',
        Photo: 'images/leagues/LaLiga/Mallorca/SamuCosta.png',
    },
    {
        Name: 'Pablo Maffeo',
        Team: 'RCD Mallorca',
        Position: 'Defender',
        Age: 26,  
        Number: 23,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Mallorca/Logo/Mallorca.png',
        Photo: 'images/leagues/LaLiga/Mallorca/PabloMaffeo.png',
    },
    {
        Name: 'Martin Valjent',
        Team: 'RCD Mallorca',
        Position: 'Defender',
        Age: 28,  
        Number: 24,  
        Nationality: 'Slovakia',
        ImageTeam: 'images/leagues/LaLiga/Mallorca/Logo/Mallorca.png',
        Photo: 'images/leagues/LaLiga/Mallorca/MartinValjent.png',
    },
    {
        Name: 'Vedat Muriqi',
        Team: 'RCD Mallorca',
        Position: 'Forward',
        Age: 30,  
        Number: 7,  
        Nationality: 'Kosovo',
        ImageTeam: 'images/leagues/LaLiga/Mallorca/Logo/Mallorca.png',
        Photo: 'images/leagues/LaLiga/Mallorca/VedatMuriqi.png',
    },
    {
        Name: 'Jasper Cillessen',
        Team: 'UD Las Palmas',
        Position: 'Goalkeeper',
        Age: 35,  
        Number: 1,  
        Nationality: 'Netherlands',
        ImageTeam: 'images/leagues/LaLiga/LasPalmas/Logo/LasPalmas.png',
        Photo: 'images/leagues/LaLiga/LasPalmas/JasperCillessen.png',
    },
    {
        Name: 'Scott McKenna',
        Team: 'UD Las Palmas',
        Position: 'Defender',
        Age: 27,  
        Number: 15,  
        Nationality: 'Scotland',
        ImageTeam: 'images/leagues/LaLiga/LasPalmas/Logo/LasPalmas.png',
        Photo: 'images/leagues/LaLiga/LasPalmas/ScottMcKenna.png',
    },

    {
        Name: 'Mika Marmol',
        Team: 'UD Las Palmas',
        Position: 'Defender',
        Age: 25,  
        Number: 3,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/LasPalmas/Logo/LasPalmas.png',
        Photo: 'images/leagues/LaLiga/LasPalmas/MikaMarmol.png',
    },
    {
        Name: 'Kirian Rodriguez',
        Team: 'UD Las Palmas',
        Position: 'Midfielder',
        Age: 26,  
        Number: 20,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/LasPalmas/Logo/LasPalmas.png',
        Photo: 'images/leagues/LaLiga/LasPalmas/KirianRodriguez.png',
    },
    {
        Name: 'Oliver McBurnie',
        Team: 'UD Las Palmas',
        Position: 'Forward',
        Age: 27,  
        Number: 16,  
        Nationality: 'Scotland',
        ImageTeam: 'images/leagues/LaLiga/LasPalmas/Logo/LasPalmas.png',
        Photo: 'images/leagues/LaLiga/LasPalmas/OliverMcBurnie.png',
    },
    {
        Name: 'Alberto Moleiro',
        Team: 'UD Las Palmas',
        Position: 'Midfielder',
        Age: 21,  
        Number: 10,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/LasPalmas/Logo/LasPalmas.png',
        Photo: 'images/leagues/LaLiga/LasPalmas/AlbertoMoleiro.png',
    },
    {
        Name: 'Yeray Alvarez',
        Team: 'Athletic Club',
        Position: 'Defender',
        Age: 28,  
        Number: 5,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/AthBilbao/Logo/AthBilbao.png',
        Photo: 'images/leagues/LaLiga/AthBilbao/YerayAlvarez.png',
    },
    {
        Name: 'Oihan Sancet',
        Team: 'Athletic Club',
        Position: 'Midfielder',
        Age: 23,  
        Number: 8,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/AthBilbao/Logo/AthBilbao.png',
        Photo: 'images/leagues/LaLiga/AthBilbao/OihanSancet.png',
    },
    {
        Name: 'Dani Vivian',
        Team: 'Athletic Club',
        Position: 'Defender',
        Age: 25,  
        Number: 3,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/AthBilbao/Logo/AthBilbao.png',
        Photo: 'images/leagues/LaLiga/AthBilbao/DaniVivian.png',
    },
    {
        Name: 'Alex Berenguer',
        Team: 'Athletic Club',
        Position: 'Midfielder',
        Age: 29,  
        Number: 7,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/AthBilbao/Logo/AthBilbao.png',
        Photo: 'images/leagues/LaLiga/AthBilbao/AlexBerenguer.png',
    },
    {
        Name: 'Gorka Guruzeta',
        Team: 'Athletic Club',
        Position: 'Forward',
        Age: 27,  
        Number: 12,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/AthBilbao/Logo/AthBilbao.png',
        Photo: 'images/leagues/LaLiga/AthBilbao/GorkaGuruzeta.png',
    },
    {
        Name: 'Nico Williams',
        Team: 'Athletic Club',
        Position: 'Forward',
        Age: 22,  
        Number: 10,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/AthBilbao/Logo/AthBilbao.png',
        Photo: 'images/leagues/LaLiga/AthBilbao/NicoWilliams.png',
    },
    {
        Name: 'Inaki Williams',
        Team: 'Athletic Club',
        Position: 'Forward',
        Age: 30,  
        Number: 9,  
        Nationality: 'Ghana',
        ImageTeam: 'images/leagues/LaLiga/AthBilbao/Logo/AthBilbao.png',
        Photo: 'images/leagues/LaLiga/AthBilbao/InakiWilliams.png',
    },
    {
        Name: 'Antonio Sivera',
        Team: 'Deportivo Alavés',
        Position: 'Goalkeeper',
        Age: 25,  
        Number: 1,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Alaves/Logo/Alaves.png',
        Photo: 'images/leagues/LaLiga/Alaves/AntonioSivera.png',
    },
    {
        Name: 'Tomas Conechny',
        Team: 'Deportivo Alavés',
        Position: 'Midfielder',
        Age: 26,  
        Number: 10,  
        Nationality: 'Argentina',
        ImageTeam: 'images/leagues/LaLiga/Alaves/Logo/Alaves.png',
        Photo: 'images/leagues/LaLiga/Alaves/TomasConechny.png',
    },
    {
        Name: 'Ander Guevara',
        Team: 'Deportivo Alavés',
        Position: 'Midfielder',
        Age: 26,  
        Number: 6,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Alaves/Logo/Alaves.png',
        Photo: 'images/leagues/LaLiga/Alaves/AnderGuevara.png',
    },
    {
        Name: 'Antonio Blanco',
        Team: 'Deportivo Alavés',
        Position: 'Midfielder',
        Age: 23,  
        Number: 8,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Alaves/Logo/Alaves.png',
        Photo: 'images/leagues/LaLiga/Alaves/AntonioBlanco.png',
    },
    {
        Name: 'Luka Romero',
        Team: 'Deportivo Alavés',
        Position: 'Forward',
        Age: 19,  
        Number: 20,  
        Nationality: 'Argentina',
        ImageTeam: 'images/leagues/LaLiga/Alaves/Logo/Alaves.png',
        Photo: 'images/leagues/LaLiga/Alaves/LukaRomero.png',
    },
    {
        Name: 'Giorgi Mamardashvili',
        Team: 'Valencia CF',
        Position: 'Goalkeeper',
        Age: 23,  
        Number: 1,  
        Nationality: 'Georgia',
        ImageTeam: 'images/leagues/LaLiga/Valencia/Logo/Valencia.png',
        Photo: 'images/leagues/LaLiga/Valencia/GiorgiMamardashvili.png',
    },
    {
        Name: 'Dimitri Foulquier',
        Team: 'Valencia CF',
        Position: 'Defender',
        Age: 31,  
        Number: 20,  
        Nationality: 'France',
        ImageTeam: 'images/leagues/LaLiga/Valencia/Logo/Valencia.png',
        Photo: 'images/leagues/LaLiga/Valencia/DimitriFoulquier.png',
    },
    {
        Name: 'Rafa Mir',
        Team: 'Valencia CF',
        Position: 'Forward',
        Age: 26,  
        Number: 11,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Valencia/Logo/Valencia.png',
        Photo: 'images/leagues/LaLiga/Valencia/RafaMir.png',
    },
    {
        Name: 'Hugo Duro',
        Team: 'Valencia CF',
        Position: 'Forward',
        Age: 25,  
        Number: 9,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Valencia/Logo/Valencia.png',
        Photo: 'images/leagues/LaLiga/Valencia/HugoDuro.png',
    },
    {
        Name: 'Pepelu',
        Team: 'Valencia CF',
        Position: 'Midfielder',
        Age: 25,  
        Number: 18,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Valencia/Logo/Valencia.png',
        Photo: 'images/leagues/LaLiga/Valencia/Pepelu.png',
    },
    {
        Name: 'Andre Almeida',
        Team: 'Valencia CF',
        Position: 'Midfielder',
        Age: 23,  
        Number: 10,  
        Nationality: 'Portugal',
        ImageTeam: 'images/leagues/LaLiga/Valencia/Logo/Valencia.png',
        Photo: 'images/leagues/LaLiga/Valencia/AndreAlmeida.png',
    },
    {
        Name: 'Paulo Gazzaniga',
        Team: 'Girona FC',
        Position: 'Goalkeeper',
        Age: 32,  
        Number: 13,  
        Nationality: 'Argentina',
        ImageTeam: 'images/leagues/LaLiga/Girona/Logo/Girona.png',
        Photo: 'images/leagues/LaLiga/Girona/PauloGazzaniga.png',
    },
    {
        Name: 'Daley Blind',
        Team: 'Girona FC',
        Position: 'Defender',
        Age: 34,  
        Number: 17,  
        Nationality: 'Netherlands',
        ImageTeam: 'images/leagues/LaLiga/Girona/Logo/Girona.png',
        Photo: 'images/leagues/LaLiga/Girona/DaleyBlind.png',
    },
    {
        Name: 'Arnau Martinez',
        Team: 'Girona FC',
        Position: 'Defender',
        Age: 21,  
        Number: 4,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Girona/Logo/Girona.png',
        Photo: 'images/leagues/LaLiga/Girona/ArnauMartinez.png',
    },
    {
        Name: 'Miguel Gutierrez',
        Team: 'Girona FC',
        Position: 'Defender',
        Age: 22,  
        Number: 23,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Girona/Logo/Girona.png',
        Photo: 'images/leagues/LaLiga/Girona/MiguelGutierrez.png',
    },
    {
        Name: 'Yangel Herrera',
        Team: 'Girona FC',
        Position: 'Midfielder',
        Age: 26,  
        Number: 21,  
        Nationality: 'Venezuela',
        ImageTeam: 'images/leagues/LaLiga/Girona/Logo/Girona.png',
        Photo: 'images/leagues/LaLiga/Girona/YangelHerrera.png',
    },
    {
        Name: 'Oriol Romeu',
        Team: 'Girona FC',
        Position: 'Midfielder',
        Age: 32,  
        Number: 14,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Girona/Logo/Girona.png',
        Photo: 'images/leagues/LaLiga/Girona/OriolRomeu.png',
    },
    {
        Name: 'Viktor Tsygankov',
        Team: 'Girona FC',
        Position: 'Forward',
        Age: 26,  
        Number: 8,  
        Nationality: 'Ukraine',
        ImageTeam: 'images/leagues/LaLiga/Girona/Logo/Girona.png',
        Photo: 'images/leagues/LaLiga/Girona/ViktorTsygankov.png',
    },
    {
        Name: 'Bryan Gil',
        Team: 'Girona FC',
        Position: 'Forward',
        Age: 23,  
        Number: 20,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Girona/Logo/Girona.png',
        Photo: 'images/leagues/LaLiga/Girona/BryanGil.png',
    },
    {
        Name: 'Ivan Martin',
        Team: 'Girona FC',
        Position: 'Midfielder',
        Age: 24,  
        Number: 23,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Girona/Logo/Girona.png',
        Photo: 'images/leagues/LaLiga/Girona/IvanMartin.png',
    },
    {
        Name: 'Abel Ruiz',
        Team: 'Girona FC',
        Position: 'Forward',
        Age: 25,  
        Number: 9,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Girona/Logo/Girona.png',
        Photo: 'images/leagues/LaLiga/Girona/AbelRuiz.png',
    },
   
    {
        Name: 'Marash Kumbulla',
        Team: 'RCD Espanyol',
        Position: 'Defender',
        Age: 24,  
        Number: 4,  
        Nationality: 'Albania',
        ImageTeam: 'images/leagues/LaLiga/Espanyol/Logo/Espanyol.png',
        Photo: 'images/leagues/LaLiga/Espanyol/MarashKumbulla.png',
    },
    {
        Name: 'Alex Kral',
        Team: 'RCD Espanyol',
        Position: 'Midfielder',
        Age: 26,  
        Number: 20,  
        Nationality: 'Czech Republic',
        ImageTeam: 'images/leagues/LaLiga/Espanyol/Logo/Espanyol.png',
        Photo: 'images/leagues/LaLiga/Espanyol/AlexKral.png',
    },
    {
        Name: 'Jose Gragera',
        Team: 'RCD Espanyol',
        Position: 'Midfielder',
        Age: 24,  
        Number: 15,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Espanyol/Logo/Espanyol.png',
        Photo: 'images/leagues/LaLiga/Espanyol/JoseGragera.png',
    },
    {
        Name: 'Alejo Veliz',
        Team: 'RCD Espanyol',
        Position: 'Forward',
        Age: 21,  
        Number: 9,  
        Nationality: 'Argentina',
        ImageTeam: 'images/leagues/LaLiga/Espanyol/Logo/Espanyol.png',
        Photo: 'images/leagues/LaLiga/Espanyol/AlejoVeliz.png',
    },
    {
        Name: 'Javi Puado',
        Team: 'RCD Espanyol',
        Position: 'Forward',
        Age: 25,  
        Number: 7,  
        Nationality: 'Spain',
        ImageTeam: 'images/leagues/LaLiga/Espanyol/Logo/Espanyol.png',
        Photo: 'images/leagues/LaLiga/Espanyol/JaviPuado.png',
    }
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
