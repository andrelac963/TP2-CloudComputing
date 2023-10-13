# Use the official Node.js runtime as the base image with the latest LTS version
FROM node:18-alpine3.17

# Set the working directory in the container
WORKDIR /app

# Copy the entire client directory into the container
COPY ./client ./client

# Navigate into the client directory
WORKDIR /app/client

# Install project dependencies
RUN npm install

# Build the React application
RUN npm run build

# Expose the port that the application will run on
EXPOSE 30500

# Start the React application
CMD ["npm", "start"]