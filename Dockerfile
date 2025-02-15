# Stage 1: Build stage
FROM node:19.7-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Clear Yarn cache (optional)
RUN yarn cache clean

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Production stage
FROM node:19.7-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install only production dependencies
RUN yarn install --frozen-lockfile --production

# Copy the built application from the build stage
COPY --from=build /usr/src/app/build ./build

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "build/index.js"]