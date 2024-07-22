# Stage-1
FROM node:20-alpine as base

# set cwd to /src
WORKDIR /src

RUN npm i -g pnpm

# copy files and install dependencies
COPY ./package.json .
COPY . .

# Stage-2 - dev
FROM base as dev

ENV MODE "DEV"
RUN pnpm i

CMD ["pnpm", "run", "dev"]

# Starge-3 - prod
FROM base as prod

ENV MODE "PROD"
RUN pnpm i --prod

CMD ["pnpm", "run", "build"]
