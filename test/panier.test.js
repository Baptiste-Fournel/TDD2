const { appliquerTVA, calculerTotalTTC, calculerFraisLivraison, genererRecapitulatif } = require('../src/panier');

describe("Gestion de Panier - Cas Étendus", () => {
    const panierTest = [
        { id: 1, nom: "l", prix: 10, catégorie: "livres", quantité: 2 },
        { id: 2, nom: "d", prix: 20, catégorie: "dvd", quantité: 1 },
        { id: 3, nom: "j", prix: 30, catégorie: "jv", quantité: 1 }
    ];

    test("Tva - prix ronds", () => {
        const produit = { id: 1, nom: "Produit", prix: 100, catégorie: "livres", quantité: 1 };
        expect(appliquerTVA(produit)).toBe(105.5);
    });

    test("Tva - prix à virgule", () => {
        const produit = { id: 1, nom: "Produit", prix: 99.99, catégorie: "dvd", quantité: 1 };
        expect(appliquerTVA(produit)).toBeCloseTo(109.99, 2);
    });

    test("Tva - prix négatif", () => {
        const produit = { id: 1, nom: "Produit", prix: -50, catégorie: "jv", quantité: 1 };
        expect(() => appliquerTVA(produit)).toThrow("Prix invalide : -50");
    });

    test("Tva - prix en string", () => {
        const produit = { id: 1, nom: "Produit", prix: "50", catégorie: "livres", quantité: 1 };
        expect(appliquerTVA(produit)).toBe(52.75);
    });

    test("Tva - prix vide", () => {
        const produit = { id: 1, nom: "Produit", prix: "", catégorie: "dvd", quantité: 1 };
        expect(() => appliquerTVA(produit)).toThrow();
    });

    test("Tva - quantité ronde", () => {
        const produit = { id: 1, nom: "Produit", prix: 20, catégorie: "dvd", quantité: 2 };
        expect(calculerTotalTTC([produit])).toBe(44);
    });

    test("Tva - quantité à virgule", () => {
        const produit = { id: 1, nom: "Produit", prix: 30, catégorie: "jv", quantité: 1.5 };
        expect(calculerTotalTTC([produit])).toBe(54);
    });

    test("Tva - quantité négative", () => {
        const produit = { id: 1, nom: "Produit", prix: 15, catégorie: "livres", quantité: -2 };
        expect(() => calculerTotalTTC([produit])).toThrow("Quantité invalide : -2");
    });

    test("Tva - quantité en string", () => {
        const produit = { id: 1, nom: "Produit", prix: 10, catégorie: "livres", quantité: "3" };
        expect(calculerTotalTTC([produit])).toBe(31.65);
    });

    test("Tva - quantité vide", () => {
        const produit = { id: 1, nom: "Produit", prix: 25, catégorie: "dvd", quantité: "" };
        expect(() => calculerTotalTTC([produit])).toThrow();
    });

    test("Tva - catégorie inexistante", () => {
        const produit = { id: 1, nom: "Produit", prix: 50, catégorie: "inconnue", quantité: 1 };
        expect(() => appliquerTVA(produit)).toThrow("Catégorie inconnue : inconnue");
    });

    test("Tva - catégorie vide", () => {
        const produit = { id: 1, nom: "Produit", prix: 50, catégorie: "", quantité: 1 };
        expect(() => appliquerTVA(produit)).toThrow("Catégorie inconnue : ");
    });

    test("Tva - catégorie en majuscules", () => {
        const produit = { id: 1, nom: "Produit", prix: 50, catégorie: "LIVRES", quantité: 1 };
        expect(() => appliquerTVA(produit)).toThrow("Catégorie inconnue : LIVRES");
    });

    test("Tva - catégorie en nombre", () => {
        const produit = { id: 1, nom: "Produit", prix: 50, catégorie: 123, quantité: 1 };
        expect(() => appliquerTVA(produit)).toThrow("Catégorie inconnue : 123");
    });

    test("Tva - catégorie autre format", () => {
        const produit = { id: 1, nom: "Produit", prix: 50, catégorie: {}, quantité: 1 };
        expect(() => appliquerTVA(produit)).toThrow();
    });

    test("TTC panier", () => {
        expect(calculerTotalTTC(panierTest)).toBe(79.1);
    });

    test("Frais de livraison", () => {
        expect(calculerFraisLivraison(40)).toBe(10);
        expect(calculerFraisLivraison(70)).toBe(5);
        expect(calculerFraisLivraison(120)).toBe(0);
    });

    test("Recap", () => {
        const recap = genererRecapitulatif(panierTest);
        expect(recap.totalTTC).toBe(79.1);
        expect(recap.fraisLivraison).toBe(5);
        expect(recap.totalAvecLivraison).toBe(84.1);
    });
});
