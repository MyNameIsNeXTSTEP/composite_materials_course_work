# Dockerfile (Root)

FROM node:18
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 4000
CMD ["yarn", "start"]
# CMD ["pm2-runtime", "start", "pm2.config.js"]
