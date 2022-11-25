FROM alpine:latest

WORKDIR /app

COPY ./dist/bin/* ./

ENV TLS_CERT_PATH=/app/tls/cert.pem
ENV TLS_KEY_PATH=/app/tls/key.pem
ENV NODE_ENV=production
ENV GRAPHQL_USE_GRAPHIQL=false
ENV GRAPHQL_ENDPOINT=gql
ENV PORT=5049

CMD [ "./server" ]