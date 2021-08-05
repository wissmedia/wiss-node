FROM node:14-slim
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
ENV PORT=2021
EXPOSE 2021
CMD ["node", "app.js"]