FROM node:18.15.0-alpine
WORKDIR /app
COPY ./package.json .
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; then npm install; else npm install --omit=dev; fi
COPY . .
ENV PORT 3000
ENV NODE_ENV $NODE_ENV
EXPOSE $PORT
CMD ["npm", "start"]
