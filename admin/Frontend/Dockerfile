FROM node:18
ARG CONTEXT

WORKDIR /base
COPY package.json yarn.lock .
COPY ./frontend/$CONTEXT/package.json frontend/$CONTEXT/
RUN yarn install
COPY ./frontend/$CONTEXT frontend/$CONTEXT
RUN yarn start