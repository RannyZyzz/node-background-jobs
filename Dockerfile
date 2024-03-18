FROM node:18-alpine
WORKDIR /app-node
COPY . /app-node/
RUN npm install
ENTRYPOINT ["npm","run","dev"]
