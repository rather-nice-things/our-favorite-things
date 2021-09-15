# syntax=docker/dockerfile:1
ARG STAGE
FROM node:16-alpine AS webpack

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# guess we need a multistage that does webpack and then copies those files
#RUN npm install --production
RUN npm install
COPY . .
RUN npm run build-prod

FROM node:16-alpine AS base

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
COPY --from=webpack /app/public ./public/
COPY . .

FROM base as base-test
ENV NODE_ENV=none

FROM base as base-prod
ENV NODE_ENV=production
CMD ["npm", "run", "serve-prod"]

FROM base as base-dev
ENV NODE_ENV=dev
RUN npm install
RUN npm install --save-dev nodemon
RUN npm run build-dockerdev
CMD ["npm", "run", "serve-dev"]


FROM base-${STAGE} as final
RUN echo "NODE_ENV is ${NODE_ENV}"
