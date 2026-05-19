document.addEventListener("DOMContentLoaded", () => {
const descriptions = {
"droit.jpg": "droit",
"ensibs_lorient.jpg": "ensibs",
"iut vannes.jpg": "iut vannes",
"lettres.jpg": "lettres",
"pontivy.jpg": "pontivy",
"sciences.jpg": "sciences",
"iae.jpeg": "iae"
};
const zone = document.getElementById("description-text");
document.addEventListener("click", (e) => {
const nom = e.target.getAttribute("src");
zone.textContent = descriptions[nom] || "Aucune description disponible.";
});
});