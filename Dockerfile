# build stage
FROM node:20 AS build-stage

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .

RUN npm run build


# production stage
FROM nginx:alpine AS prod-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
