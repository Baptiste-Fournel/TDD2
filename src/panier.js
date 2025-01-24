function appliquerTVA(produit) {
    const tauxTVA = {
        livres: 0.055,
        dvd: 0.1,
        jv: 0.2
    };

    // Validation du prix
    if (typeof produit.prix === "string") {
        produit.prix = parseFloat(produit.prix);
    }
    if (isNaN(produit.prix) || produit.prix < 0) {
        throw new Error(`Prix invalide : ${produit.prix}`);
    }

    // Validation de la catégorie
    if (!tauxTVA.hasOwnProperty(produit.catégorie)) {
        throw new Error(`Catégorie inconnue : ${produit.catégorie}`);
    }

    const tva = tauxTVA[produit.catégorie];
    const prixTTC = produit.prix * (1 + tva);
    return parseFloat(prixTTC.toFixed(2));
}

function calculerTotalTTC(panier) {
    let totalTTC = 0;
    panier.forEach(produit => {
        // Validation de la quantité
        if (typeof produit.quantité === "string") {
            produit.quantité = parseFloat(produit.quantité);
        }
        if (isNaN(produit.quantité) || produit.quantité <= 0) {
            throw new Error(`Quantité invalide : ${produit.quantité}`);
        }

        totalTTC += appliquerTVA(produit) * produit.quantité;
    });
    return parseFloat(totalTTC.toFixed(2));
}

function calculerFraisLivraison(totalTTC) {
    if (totalTTC < 50) {
        return 10;
    } else if (totalTTC < 100) {
        return 5;
    } else {
        return 0;
    }
}

function genererRecapitulatif(panier) {
    const totalTTC = calculerTotalTTC(panier);
    const fraisLivraison = calculerFraisLivraison(totalTTC);
    const totalAvecLivraison = totalTTC + fraisLivraison;

    return {
        totalTTC: totalTTC,
        fraisLivraison: fraisLivraison,
        totalAvecLivraison: parseFloat(totalAvecLivraison.toFixed(2))
    };
}

module.exports = {
    appliquerTVA,
    calculerTotalTTC,
    calculerFraisLivraison,
    genererRecapitulatif
};
