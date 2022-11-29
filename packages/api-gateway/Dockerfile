FROM alpine:latest

WORKDIR /app

COPY ./dist/bin/* ./

ENV NODE_ENV=production

CMD [ "./server" ]