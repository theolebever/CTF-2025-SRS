# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

ARG NODE_VERSION=21.5.0
ARG NGINX_VERSION=1.21.3

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Use nginx image for final image to run the application.
FROM nginx:${NGINX_VERSION}-alpine as nginx

# Set working directory for all build stages.
WORKDIR /usr/src/app


################################################################################
# Build the website
FROM base as build

WORKDIR /usr/src/app

# Copy all the necessary files to build the website.
COPY . .
# Install all the dependencies.
RUN npm i
# Build the website.
RUN npm run build

################################################################################
# Copy the built website to the nginx image.
FROM nginx as final

# Copy configuration for nginx.
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the robots.txt file.
COPY robots.txt /usr/share/nginx/html/robots.txt

# Copy the built website to the nginx image.
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 10000
# Run nginx.
CMD ["nginx", "-g", "daemon off;"]
