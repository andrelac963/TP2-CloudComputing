# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=18.18.0
# Use node image for base image for all stages.
# FROM node:${NODE_VERSION}-alpine as base
FROM node:${NODE_VERSION} as base

RUN apt-get update && apt-get install dnsutils -y

# Set working directory for all build stages.
WORKDIR /usr/src/app

# copy package.json to workdir
COPY package.json .

# install dependencies
RUN npm i

# copy all files to workdir
COPY . .

# Expose the port that the application listens on.
EXPOSE 30500

# Run the application.
CMD npm run dev
