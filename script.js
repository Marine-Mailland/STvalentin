var ouiBtn = document.getElementById("ouiBtn");
var nonBtn = document.getElementById("nonBtn");
var message = document.getElementById("message");
var clicsNon = 0; // Compteur de clics sur "Non"
function oui() {
    ouiBtn.remove();
    nonBtn.remove();
    document.querySelector("h1").remove();
    // Afficher ton texte
    message.textContent = " Maintenant que tu as accepté mon bébé, " +
        "rendez-vous le 14 février pour une journée en amoureux ❤ " +
        "et je compte sur toi pour me demander d'être ta valentine l'année prochaine !";
    // Afficher le GIF
    var gif = document.getElementById("gifAmour");
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzF6dnBzejZjd2hvY2N5NnlkajE3eHU4YnJtOXJ0aDg0MGp5aXhtOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qFmdpUKAFZ6rMobzzu/giphy.gif"; // Remplacez par l'URL de votre GIF
    gif.style.display = "block"; // Afficher le GIF
}
function non() {
    clicsNon++;
    // Changer le texte selon le nombre de clics
    if (clicsNon === 1) {
        nonBtn.textContent = "Tu es sûr ? 🤔";
    }
    else if (clicsNon === 2) {
        nonBtn.textContent = "Vraiment ?? 😢";
    }
    else if (clicsNon === 3) {
        nonBtn.textContent = "Réfléchis bien... 💔";
    }
    else {
        nonBtn.textContent = "Option non disponible ⛔";
    }
}
ouiBtn.addEventListener("click", oui);
nonBtn.addEventListener("click", non);
