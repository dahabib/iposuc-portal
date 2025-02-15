# Stage 1: Build stage
FROM node:19.7-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Clear npm cache (optional)
RUN npm cache clean --force

# Install dependencies using npm
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production stage
FROM node:19.7-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json from build stage
COPY --from=build /usr/src/app/package.json /usr/src/app/package-lock.json ./

# Clear npm cache (optional)
RUN npm cache clean --force

# Install only production dependencies
RUN npm install --only=production

# Copy the built application from the build stage
COPY --from=build /usr/src/app/build ./build

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "build/index.js"]