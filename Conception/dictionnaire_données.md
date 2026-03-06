# Dictionnaire de données

## Table USER

_Stocke les informations des utilisateurs de l'application._

| Champ      | Type         | Unique | Not null | Référence | Par défaut        | Example                          |
| ---------- | ------------ | ------ | -------- | --------- | ----------------- | -------------------------------- |
| id_user    | UUID         | Oui    | Oui      |           | gen_random_uuid() | 550e8400-e29b-41d4-a716-44665544 |
| pseudo     | VARCHAR(20)  | Oui    | Oui      |           |                   | "Zouglou99"                      |
| email      | VARCHAR(100) | Oui    | Oui      |           |                   | "jean.dupont@mail.com"           |
| password   | VARCHAR(255) | Non    | Oui      |           |                   | "$2b$10$xyz123abc..."            |
| avatar     | VARCHAR(255) | Non    | Non      |           | NULL              | "https://mon-image.com/img.png"  |
| role       | VARCHAR(10)  | Non    | Oui      |           | 'MEMBER'          | 'ADMIN'                          |
| created_at | TIMESTAMP    | Non    | Oui      |           | NOW()             | 2026-03-06 14:30:00              |
| updated_at | TIMESTAMP    | Non    | Oui      |           | NOW()             | 2026-03-06 14:30:00              |

---

## Table TOKEN

_Gère les jetons d'authentification (ex: Refresh Tokens, Reset Password)._

| Champ      | Type         | Unique | Not null | Référence     | Par défaut        | Example                           |
| ---------- | ------------ | ------ | -------- | ------------- | ----------------- | --------------------------------- |
| id_token   | UUID         | Oui    | Oui      |               | gen_random_uuid() | a1b2c3d4-e5f6-7890-abcd-12345678  |
| value      | VARCHAR(255) | Oui    | Oui      |               |                   | "eyJhbGciOiJIUzI1NiIsInR5cCI6..." |
| type       | VARCHAR(20)  | Non    | Oui      |               |                   | "REFRESH_TOKEN"                   |
| id_user    | UUID         | Non    | Oui      | USER(id_user) |                   | 550e8400-e29b-41d4-a716-44665544  |
| created_at | TIMESTAMP    | Non    | Oui      |               | NOW()             | 2026-03-06 14:30:00               |
| updated_at | TIMESTAMP    | Non    | Oui      |               | NOW()             | 2026-03-06 14:30:00               |

---

## Table EVENTS

_Stocke les sorties proposées par les membres._

| Champ      | Type         | Unique | Not null | Référence     | Par défaut        | Example                          |
| ---------- | ------------ | ------ | -------- | ------------- | ----------------- | -------------------------------- |
| id_event   | UUID         | Oui    | Oui      |               | gen_random_uuid() | 998f8400-abcd-1234-efgh-56789012 |
| title      | VARCHAR(100) | Non    | Oui      |               |                   | "Soirée Bowling"                 |
| date       | TIMESTAMP    | Non    | Oui      |               |                   | 2026-03-15 20:00:00              |
| city       | VARCHAR(50)  | Non    | Non      |               | NULL              | "Paris"                          |
| status     | VARCHAR(20)  | Non    | Oui      |               | 'PUBLISHED'       | 'CANCELLED'                      |
| id_user    | UUID         | Non    | Oui      | USER(id_user) |                   | 550e8400-e29b-41d4-a716-44665544 |
| created_at | TIMESTAMP    | Non    | Oui      |               | NOW()             | 2026-03-06 14:30:00              |
| updated_at | TIMESTAMP    | Non    | Oui      |               | NOW()             | 2026-03-06 14:30:00              |

> **Note métier :** Le champ `id_user` de cette table représente le **créateur** (l'organisateur) de l'événement.

---

## Table PARTICIPATION (Table de liaison)

_Stocke les réponses des utilisateurs aux différents événements (Présent, Absent, En attente)._

| Champ      | Type        | Unique | Not null | Référence        | Par défaut | Example                          |
| ---------- | ----------- | ------ | -------- | ---------------- | ---------- | -------------------------------- |
| id_user    | UUID        | \*     | Oui      | USER(id_user)    |            | 550e8400-e29b-41d4-a716-44665544 |
| id_event   | UUID        | \*     | Oui      | EVENTS(id_event) |            | 998f8400-abcd-1234-efgh-56789012 |
| status     | VARCHAR(20) | Non    | Oui      |                  | 'PENDING'  | 'PRESENT'                        |
| created_at | TIMESTAMP   | Non    | Oui      |                  | NOW()      | 2026-03-06 14:30:00              |
| updated_at | TIMESTAMP   | Non    | Oui      |                  | NOW()      | 2026-03-06 14:30:00              |

> **Note technique (\*)** : La clé primaire de cette table est **composite**.
