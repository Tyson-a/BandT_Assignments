
FROM node:21.5.0-alpine3.18

WORKDIR /la_tyson_site

# Set the PATH to include node_modules binaries
ENV PATH="./node_modules/.bin:$PATH"

# Copy the application files to the container
COPY . .

# Install dependencies
RUN npm install

# Build your application
RUN npm run build

# Expose the port if your application listens on a specific port
EXPOSE 5173

# Specify the command to run on container start with --host
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]