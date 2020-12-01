# use latest version of nodejs
FROM node:12

# install aurelia-cli to build the app & http-server to serve static contents
RUN npm i -g http-server
RUN npm i -g aurelia-cli

# set working directory to app
# henceforth all commands will run inside this folder
WORKDIR /app

# copy package.json related files first and install all required dependencies
COPY package*.json ./
RUN npm install

# copy the rest of the files and folders & install dependencies
COPY . ./
RUN au build --env prod

# by default http-server will serve contents on port 8080
# so we expose this port to host machine
EXPOSE 80

CMD [ "http-server" , "-p 80" ]
