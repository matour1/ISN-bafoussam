document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Récupération des champs
    let nom = document.getElementById("nom").value;
    
    let email = document.getElementById("email").value;
    let telephone = document.getElementById("contact").value;
    let message = document.getElementById("message").value;


    // Numéro WhatsApp (format international sans +)
    let numero = "237659717141"; // 👉 remplace par ton numéro

    // Création du message
    let texte = `📌 Nouvelle inscription :

👤 Nom : ${nom}
👤 Prénom : ${prenom}

📧 Email : ${email}
📞 Téléphone : ${telephone}



📝 Message : ${message ? message : "Aucun message"}`;

    // Générer lien WhatsApp
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(texte)}`;

    // Ouvrir WhatsApp
    window.open(url, "_blank");
});

