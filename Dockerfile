# Use an official Node.js 18 runtime as a parent image
FROM node:21-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source inside Docker image
COPY .env.local .env.local

# Use an official Node.js 18 runtime as a parent image
FROM node:21-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

COPY . .


# Bundle app source inside Docker image
COPY .env.local .env.local

# Build the Next.js app
RUN npm run build

# Your app binds to port 3000 by default, use the EXPOSE instruction to have it mapped
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]


# Build the Next.js app
RUN npm run build

# Your app binds to port 3000 by default, use the EXPOSE instruction to have it mapped
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
