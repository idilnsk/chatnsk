# Use an official Node.js runtime as a base image
FROM node:21-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Build the Next.js app
RUN npm run build

# Your app binds to port 3000 by default
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
