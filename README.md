
# Kaja 📅

Application mobile d'organisation de sorties entre amis.

🚧 **Projet en cours** - documentation de conception terminée, développement backend en cours.

## Le problème

L'organisation de sorties sur les messageries classiques (WhatsApp, etc.) est chaotique : les infos se perdent dans le flux des discussions, et il est difficile de savoir précisément qui sera présent.

## La solution

Une application centrée sur l'essentiel :
- Proposer un événement (quoi, quand, où)
- Forcer une réponse claire des invités (présent / absent / en attente)
- Visualiser en un coup d'œil la liste des participants

Toute fonctionnalité sociale annexe (commentaires, sondages de dates) est volontairement exclue de cette V1, pour un développement rapide centré sur le besoin principal.

## Fonctionnalités prévues (MVP)

**Visiteur**
- Découvrir le concept via l'écran d'accueil
- S'inscrire / se connecter

**Membre**
- Créer, modifier, supprimer une sortie
- Répondre présent / absent à une sortie
- Consulter les sorties à venir et leurs participants
- Modifier son profil

**Admin**
- Modération : suppression de comptes ou de sorties

## État d'avancement

- [x] Cahier des charges et user stories
- [x] Wireframes
- [ ] Backend (en cours)
- [ ] Frontend

## Stack technique
- React Native

- NestJS (TypeScript)
- API REST (JSON), documentée via Swagger
- Validation des schémas avec Zod
- Authentification : Argon2 / bcrypt- API REST (JSON)

- PostgreSQL, via Prisma ORM
