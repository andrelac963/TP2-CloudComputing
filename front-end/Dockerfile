# latest nginx image
FROM nginx:latest

# nginx server configuration file directory
WORKDIR /etc/nginx/conf.d

# copying nginx configuration
COPY ./nginx.conf default.conf

# react build file directory
WORKDIR /usr/share/nginx/html

# copying react build
COPY ./client/dist/ .

# installing debug packages
RUN apt-get update && apt-get install procps -y

EXPOSE 80