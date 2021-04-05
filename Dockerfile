# pull the official base image
FROM node:alpine
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install -g npm@7.8.0
# add app
COPY . ./
# start app
CMD ["npm", "start"]
EXPOSE 3000