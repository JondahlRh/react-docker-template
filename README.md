# React Docker Template

<sub> Template for a React App with Vite, Typescript, Prettier, Tailwind and Docker

## files to change

- package.json: "name" propertie
- index.html: "title" tag
- docker-compose.yml: "container_name"
- docker-compose.dev.yml: "container_name"-dev

## start command

- dev: docker-compose -f docker-compose.dev.yml up --build
- prod: docker-compose up --build
