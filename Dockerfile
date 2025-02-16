# Stage 1: Build stage
FROM node:20.11.0-alpine AS build

# Install dependencies for npm packages that require compilation
RUN apk add --no-cache python3 make g++ build-base

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies using npm ci for clean install
RUN npm ci --verbose

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production stage
FROM node:20.11.0-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json from build stage
COPY --from=build /usr/src/app/package.json /usr/src/app/package-lock.json ./

# Install only production dependencies using npm ci
RUN npm ci --only=production --verbose

# Copy the built application from the build stage
COPY --from=build /usr/src/app/build ./build

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "build/index.js"]
