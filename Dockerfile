FROM node:alpine
WORKDIR /app
COPY package.json .
COPY ./install.sh .
ARG NODE_ENV
RUN ./install.sh

ENV PORT 5000
EXPOSE $PORT
COPY . ./
CMD ["node", "index"]