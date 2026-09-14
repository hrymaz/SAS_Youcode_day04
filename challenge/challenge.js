/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · CHALLENGE
 * GESTION DE PANIER E-COMMERCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous codez la logique du panier d'achat d'une boutique en ligne.
 *
 * Consignes :
 * 1. Vous avez un tableau représentant les ID des articles dans le panier : panier = [101, 105, 101, 102].
 * 2. Créez une fonction ajouterAuPanier(id) qui ajoute l'article au tableau.
 * 3. Créez une fonction retirerDuPanier(id) qui retire Toutes les occurrences de cet ID du panier (ex: retirer 101).
 * 4. (Bonus) Créez une fonction afficherQuantites() qui compte et affiche le panier sous forme : Article 101 : 2 exemplaires, Article 105 : 1 exemplaire...
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day04/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
let panier = [101, 105, 101, 102];

function ajouterAuPanier(id) {
    panier.push(id);
}

function retirerDuPanier(id) {
    let nouveauPanier = [];
    for (let i = 0; i < panier.length; i++) {
        if (panier[i] != id) {
            nouveauPanier.push(panier[i]);
        }
    }
    panier = nouveauPanier;
}

function afficherQuantites() {
    let dejaVu = [];

    for (let i = 0; i < panier.length; i++) {
        let idActuel = panier[i];

        if (dejaVu.indexOf(idActuel) == -1) {
            let compteur = 0;

            for (let j = 0; j < panier.length; j++) {
                if (panier[j] == idActuel) {
                    compteur++;
                }
            }

            console.log("Article " + idActuel + " : " + compteur + " exemplaire(s)");
            dejaVu.push(idActuel);
        }
    }
}

ajouterAuPanier(108);
retirerDuPanier(101);
afficherQuantites();


