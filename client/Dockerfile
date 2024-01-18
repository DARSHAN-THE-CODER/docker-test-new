FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
RUN yarn install
EXPOSE 3000:3000
CMD ["npm", "run", "start"]