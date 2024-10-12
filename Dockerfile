# Build 
FROM node:current-slim AS build 
WORKDIR /usr/src/app
COPY package*.json .
RUN npm ci 
COPY . .
RUN npm run build

# Deploy
FROM node:current-slim
WORKDIR /usr/src/app
COPY package*.json .
RUN npm ci --omit=dev
COPY --from=build /usr/src/app/dist dist
CMD ["npm", "start"]