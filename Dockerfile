FROM node

COPY . /pathways-frontend
WORKDIR /pathways-frontend
RUN npm install
