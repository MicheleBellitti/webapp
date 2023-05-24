# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /webapp

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app's source code
COPY . .

# Build the app
RUN npm run build

# Expose the desired port (e.g., 80 for HTTP)
EXPOSE 80

# Start the app
CMD [ "npm", "start", "--reset-cache"]
