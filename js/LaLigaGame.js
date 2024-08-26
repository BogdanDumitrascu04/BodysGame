document.getElementById('menuButton').addEventListener('click', function() {
    let navbar = document.getElementById('navbar');
    if (navbar.classList.contains('hidden')) {
        navbar.classList.remove('hidden');
        navbar.style.display = 'block';
    } else {
        navbar.classList.add('hidden');
        navbar.style.display = 'none';
    }
});

document.getElementById('infoButton').addEventListener('click', function() {
    let infoContent = document.getElementById('infoContent');
    infoContent.classList.remove('hidden');
    infoContent.style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
    let infoContent = document.getElementById('infoContent');
    infoContent.classList.add('hidden');
    infoContent.style.display = 'none';
});
const obj= { 
    Name: 'Conor Gallagher', 
    Team: 'Atletico Madrid', 
    Position: 'Midfielder', 
    Age: 24, 
    Number: 23, 
    Nationality: 'England', 
    ImageTeam:'/media/leagues/PremierLeague/Chelsea/Logo/Chelsea.png',
};