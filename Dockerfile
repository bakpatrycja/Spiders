FROM node:latest

COPY . .

# RUN npm install
RUN npm run build

EXPOSE 8080:3001

CMD npm run start