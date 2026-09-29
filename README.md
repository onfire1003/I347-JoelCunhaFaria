# API catalogue

API REST Express et Sequelize limitée à trois tables MySQL : `ingredients`, `menus` et `dishes` (plats). Il n'y a ni authentification, ni commandes, ni panier, ni favoris, ni tables de liaison.

## Prérequis

- Node.js 18+
- MySQL 8+

## Dépendances

| Dépendance | Utilité |
| --- | --- |
| `express` | Serveur API REST |
| `sequelize` | Accès aux données MySQL |
| `mysql2` | Pilote MySQL utilisé par Sequelize |
| `dotenv` | Lecture des variables du fichier `.env` |
| `cors` | Autorisation des requêtes provenant d'un frontend |

Les dépendances sont définies dans `package.json` et s'installent avec `npm install`.

## Configuration `.env`

Créez un fichier `.env` à la racine du projet à partir de [.env.example](.env.example), puis adaptez les valeurs à votre installation MySQL :

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=mot_de_passe_mysql
DB_NAME=app_macdo
PORT=3000
```

Ne versionnez jamais votre fichier `.env` si celui-ci contient un vrai mot de passe.

## Installation

1. Installez les dépendances avec `npm install`.
2. Créez et complétez le fichier `.env`.
3. Exécutez [create_database_insert_data.sql](src/config/create_database_insert_data.sql) dans MySQL pour créer la base et les données de démonstration.
4. Démarrez le serveur avec `npm start`.

L'API écoute sur le port configuré dans `.env` (3000 par défaut). Attention : le script SQL supprime puis recrée la base `app_macdo`.

## Scripts disponibles

| Commande | Effet |
| --- | --- |
| `npm start` | Lance l'API avec Node.js |
| `npm test` | Vérifie la syntaxe du point d'entrée de l'application |

## Tables

| Table | Rôle |
| --- | --- |
| `ingredients` | Ingrédients du catalogue |
| `menus` | Menus du catalogue |
| `dishes` | Plats du catalogue |

Les trois ressources sont indépendantes : aucune table pivot ni relation n'est créée.

## Routes

Chaque ressource expose les mêmes opérations CRUD, sans authentification.

| Méthode | Route |
| --- | --- |
| GET | `/api/v1/ingredients`, `/api/v1/menus`, `/api/v1/dishes` |
| GET | `/api/v1/ingredients/:id`, `/api/v1/menus/:id`, `/api/v1/dishes/:id` |
| POST | `/api/v1/ingredients`, `/api/v1/menus`, `/api/v1/dishes` |
| PUT | `/api/v1/ingredients/:id`, `/api/v1/menus/:id`, `/api/v1/dishes/:id` |
| DELETE | `/api/v1/ingredients/:id`, `/api/v1/menus/:id`, `/api/v1/dishes/:id` |

`menus` et `dishes` utilisent les champs `name`, `description`, `price`, `availability`, `size` et `image_url`. Les ingrédients utilisent `name`, `description` et `availability`.

## Structure du projet

```text
src/
├── config/       # Connexion MySQL et script de création de la base
├── controllers/  # Gestion des requêtes HTTP
├── models/       # Modèles Sequelize : ingredient, menu, dish
├── routes/       # Routes CRUD Express
└── services/     # Accès aux données
```

## Dépannage

- Vérifiez que MySQL est démarré et que les valeurs `DB_*` de `.env` sont correctes si la connexion échoue.
- Exécutez à nouveau le script SQL si les tables ou les données de démonstration sont absentes.
- Vérifiez que le port indiqué dans `.env` est disponible si le serveur ne démarre pas.
