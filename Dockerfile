FROM node:12.16.0-slim AS base

ARG PORT

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@12.0.5

COPY . /app

EXPOSE 4200

CMD ng serve --host 0.0.0.0

FROM base AS builder
RUN ng build

# Prod deploy
FROM nginx:latest as prod
WORKDIR /
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=builder /app/dist/myPokemonApp /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
# COPY ./env.sh .
# COPY sample.env ./.env
# RUN chmod +x env.sh
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
