FROM node:14 as builder

ENV ORG_NAME=ohmygrpc
ENV SERVICE_NAME=node

WORKDIR /${SERVICE_NAME}
COPY package*.json ./
RUN npm ci --ignore-scripts

COPY . .
RUN npm run postinstall
RUN npm run build


FROM node:14.18.1-alpine

ENV SERVICE_NAME=node

WORKDIR /${SERVICE_NAME}

COPY package*.json ./
RUN npm ci --only=production --ignore-scripts

COPY --from=builder /${SERVICE_NAME}/dist ./dist

EXPOSE 8080
CMD [ "npm", "start" ]
