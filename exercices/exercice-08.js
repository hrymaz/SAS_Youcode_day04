/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day04/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function MinMax(tableau) {
    let min = tableau[0];
    let max = tableau[0];

    for (let nombre of tableau) {
        if (nombre < min) {
            min = nombre;
        }
        if (nombre > max) {
            max = nombre;
        }
    }

    return "Le plus petit est : " + min + " | Le plus grand est : " + max;
}

const nombres =[4, 8, 2, 10, 5];
const resultat = MinMax(nombres);

console.log(resultat);


