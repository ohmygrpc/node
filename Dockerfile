FROM node:10

ENV ORG_NAME=ohmygrpc
ENV SERVICE_NAME=node

WORKDIR /${SERVICE_NAME}
COPY package*.json ./

ARG GH_ACCESS_TOKEN
RUN git config --global url."https://${GH_ACCESS_TOKEN}@github.com/".insteadOf "https://github.com/"
RUN git init

RUN npm ci
RUN npm run idl:init
RUN npm run clean
COPY . .
RUN npm run build

EXPOSE 8080
CMD [ "npm", "run", "start" ]
