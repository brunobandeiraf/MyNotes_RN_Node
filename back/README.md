# API NODE

## RUNNER
- node src/server.js
- npm start
- npm run dev
- npm run migrate

### knex
Create migration
- npx knex migrate:make migrationName
Run latest migration
- npx knex migrate:latest

## INSTALL
- npm init -y
- npm install express --save
- npm install nodemon --save-dev
- npm install express-async-errors --save
- npm install sqlite3 sqlite --save
- npm install bcryptjs --save
- npm install knex --save
- npx knex init
- npm install jsonwebtoken
- npm install multer //upload de arquivos


## DATABASE
USERS
- id, name, email, password, avatar, created_at, updated_at
NOTES
- id, title, description, user_id, created_at, updated_at
TAGS
- id, note_id, user_id
LINKS
- id, note_id, url, created_at