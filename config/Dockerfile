# Use a base image of Node.js
FROM node:18.20.2-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application files
COPY . .

# Remove dist directory if it exists
RUN rm -rf dist

# Compile TypeScript to JavaScript
RUN npm run build

# Expose the port where the server will be listening
EXPOSE 3000

# Command to start the application
CMD ["node", "dist/src/server.js"]
