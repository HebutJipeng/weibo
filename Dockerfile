FROM node:6.11.3-slim

RUN apt-get update \
	&& apt-get install -y nginx

WORKDIR /app

COPY . /app/

EXPOSE 80

RUN npm install \
	&& npm run build 

CMD ['nginx', '-g', 'daemon off;']

