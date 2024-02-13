# Use a smaller base image
FROM node:18.17.1-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a minimal base image for runtime
FROM node:18.17.1-alpine

# Set working directory inside the container
WORKDIR /app

# Copy built files from the previous stage
COPY --from=build /app .

# Expose the port that Next.js is running on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
