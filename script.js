// recupère le panier depuis localStorage ou crée un tableau vide
let panier =JSON.parse(localStorage.getItem("panier")) ||[];

// Ajouter un produit

function ajouterAuPanier(nom, prix) {
    const produit=panier.find(p=> p.nom===nom);
    if (produit) {
        produit.quantite += 1;
    }else{
        panier.push({ nom:nom,prix:prix,quantite:1});
    }
    
//<>

// Sauvegarde dans localStorage

localStorage.setItem("panier",JSON.stringify(panier));
afficherPanier()
alert("Produit ajouté au panier");
}

function afficherPanier() {
    const divPanier = document.getElementById("panier");
    const divTotal = document.getElementById("total");

    if (!divPanier) return;

    divPanier.innerHTML = "";
    let total = 0;

    panier.forEach(p => {
        total += p.prix * p.quantite;
        divPanier.innerHTML += `
            <p>${p.nom} * ${p.quantite} = ${p.prix * p.quantite} GNF</p>
        `;
    });

    divTotal.innerText = "Total : " + total + " GNF";
}

// Afficher automatiquement au chargement
afficherPanier();

function commanderWhatsApp() {
    if (panier.length === 0) {
        alert("Le panier est vide !");
        return;
    }

    let message = "Bonjour, je veux commander :%0A";
    let total = 0;

    panier.forEach(p => {
        message += `- ${p.nom} × ${p.quantite} = ${p.prix * p.quantite} GNF%0A`;
        total += p.prix * p.quantite;
    });

    message += `%0ATotal : ${total} GNF`;

    const numero = "611476352"; // Mets ton numéro
    window.open(`https://wa.me/${611476352}?text=${Bonjour, continuer }`, "_blank");
}
