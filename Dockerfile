FROM node:19 as build

COPY . /code
WORKDIR /code

RUN npm install
RUN npm run build

FROM nginx:1.23.4

COPY --from=build /code/dist/ /usr/share/nginx/html/
