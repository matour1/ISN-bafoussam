document.querySelector(".inscription-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Récupération des champs
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let telephone = document.getElementById("telephone").value;

    let formation = document.getElementById("formation_principal").value;
    let filiereNum = document.getElementById("formation_numerique").value;
    let filierePara = document.getElementById("formation_paramedicale").value;
    let langue = document.getElementById("Cour-langue").value;

    let message = document.getElementById("message").value;

    // Déterminer la filière choisie
    let filiere = filiereNum || filierePara || langue || "Non précisée";

    // Numéro WhatsApp (format international sans +)
    let numero = "237659717141"; // 👉 remplace par ton numéro

    // Création du message
    let texte = `📌 Nouvelle inscription :

👤 Nom : ${nom}
👤 Prénom : ${prenom}

📧 Email : ${email}
📞 Téléphone : ${telephone}

🎓 Formation : ${formation}
📚 Filière : ${filiere}

📝 Message : ${message ? message : "Aucun message"}`;

    // Générer lien WhatsApp
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(texte)}`;

    // Ouvrir WhatsApp
    window.open(url, "_blank");
});