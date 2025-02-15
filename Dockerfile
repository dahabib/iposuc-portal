# Stage 1: Build stage
FROM node:19.7-alpine AS sk-build

# Set environment variables
ARG TZ=Asia/Dhaka
ARG PUBLIC_HELLO

# Set the working directory
WORKDIR /usr/src/app

# Install dependencies and set timezone
RUN apk --no-cache add curl tzdata && \
    cp /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo $TZ > /etc/timezone

# Install Yarn using the official script
RUN npm install -g corepack && \
    corepack enable && \
    corepack prepare yarn@stable --activate

# Copy package.json and yarn.lock first to leverage Docker cache
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Production stage
FROM node:19.7-alpine

# Set environment variables
ARG TZ=Asia/Dhaka

# Set the working directory
WORKDIR /usr/src/app

# Install dependencies and set timezone
RUN apk --no-cache add curl tzdata && \
    cp /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo $TZ > /etc/timezone

# Install Yarn globally (if not already included in the base image)
RUN npm install -g yarn

# Copy package.json and yarn.lock from build stage
COPY --from=sk-build /usr/src/app/package.json /usr/src/app/yarn.lock ./

# Install only production dependencies using Yarn
RUN yarn install --production --frozen-lockfile

# Copy the built application from the build stage
COPY --from=sk-build /usr/src/app/build ./build

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "build/index.js"]