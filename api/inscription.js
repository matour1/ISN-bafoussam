document.querySelector(".inscription-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Récupération des champs (avec fallback pour différents formulaires)
    let nom = document.getElementById("nom")?.value || "";
    let prenom = document.getElementById("prenom")?.value || "";
    let email = document.getElementById("email")?.value || "";
    let telephone = document.getElementById("telephone")?.value || "";

    // Formation principale (pour formulaire index)
    let formationIndex = document.getElementById("formation")?.value || "";
    // Formation principale (pour formulaire inscription.html)
    let formationPrincipal = document.getElementById("formation_principal")?.value || "";
    // Filières détaillées
    let filiereNum = document.getElementById("formation_numerique")?.value || "";
    let filierePara = document.getElementById("formation_paramedicale")?.value || "";
    let langue = document.getElementById("Cour-langue")?.value || "";

    let message = document.getElementById("message")?.value || "";

    // Déterminer la formation choisie
    let formation = formationPrincipal || formationIndex || "Non précisée";
    // Déterminer la filière choisie
    let filiere = filiereNum || filierePara || langue || "Non précisée";

    // Numéro WhatsApp (format international sans +)
    let numero = "237659717141"; // 👉 remplace par ton numéro

    // Création du message
    let texte = `📌 Nouvelle inscription :\n\n`;
    if (nom) texte += `👤 Nom : ${nom}\n`;
    if (prenom) texte += `👤 Prénom : ${prenom}\n`;
    if (email) texte += `📧 Email : ${email}\n`;
    if (telephone) texte += `📞 Téléphone : ${telephone}\n\n`;
    if (formation && formation !== "Non précisée") texte += `🎓 Formation : ${formation}\n`;
    if (filiere && filiere !== "Non précisée") texte += `📚 Filière : ${filiere}\n`;
    texte += `\n📝 Message : ${message ? message : "Aucun message"}`;

    // Générer lien WhatsApp
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(texte)}`;

    // Ouvrir WhatsApp
    window.open(url, "_blank");
});