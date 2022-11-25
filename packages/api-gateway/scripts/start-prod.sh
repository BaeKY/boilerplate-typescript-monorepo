#!/bin/bash

source $PWD/../../scripts/docker-common.sh

IMAGE_NAME=`docker_image_name $npm_package_name`

docker run --rm -p 5049:5049 -v $PWD/cert-for-test:/app/tls -e GRAPHQL_USE_GRAPHIQL=true --name graphql-gateway $IMAGE_NAME

exit $?