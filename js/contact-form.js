document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Récupération des champs
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let telephone = document.getElementById("contact").value;
    let sujet = document.getElementById("sujet").value;
    let message = document.getElementById("message").value;

    // Validation basique
    if (!nom || !email || !telephone || !sujet) {
        alert("Veuillez remplir tous les champs obligatoires.");
        return;
    }

    // Désactiver le bouton pendant le traitement
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Préparation...';
    submitBtn.disabled = true;

    // Numéro WhatsApp (format international sans +)
    let numero = "237659717141"; // 👉 remplace par ton numéro

    // Création du message
    let texte = `📌 Nouveau message de contact :\n\n👤 Nom : ${nom}\n📧 Email : ${email}\n📞 Téléphone : ${telephone}\n📋 Sujet : ${sujet}\n\n📝 Message : ${message ? message : "Aucun message"}`;

    // Générer lien WhatsApp
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(texte)}`;

    // Petit délai pour montrer le feedback
    setTimeout(() => {
        // Ouvrir WhatsApp
        window.open(url, "_blank");
        // Réactiver le bouton
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        // Optionnel: réinitialiser le formulaire
        // e.target.reset();
    }, 500);
});

