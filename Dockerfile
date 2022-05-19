FROM node:alpine
WORKDIR /app/pacebook
COPY package.json yarn.lock ./
RUN yarn
COPY . .
CMD [ "yarn", "run", "start" ]