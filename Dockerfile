FROM node:latest as builder
WORKDIR /app
COPY . ./
RUN npm install && npm run build

FROM node:alpine
WORKDIR /
EXPOSE 5000
COPY --from=builder ./app/build ./build
RUN npm install -g serve
CMD serve -s build
