function bp_info() {
document.getElementById("text").style.fontSize = "35px";
document.getElementById("text").style.color = "white";
document.getElementById("text").style.backgroundColor = "blue";
document.getElementById("text").innerHTML = "Adresse : 17 Bd Flandres Dunkerque 1940, 56100 Lorient";
}
function test() {
document.getElementById("consultation").textContent = new Date().toLocaleString("fr-FR", {
weekday: "long",
year: "numeric",
month: "long",
day: "numeric",
hour: "2-digit",
minute: "2-digit",
second: "2-digit"
});
}