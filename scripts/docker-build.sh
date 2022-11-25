#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

source $SCRIPT_DIR/docker-common.sh

################################### Build Docker Image ###################################

# package.json에서 image 이름을 가져오도록 한다.
IMAGE_NAME=`docker_image_name $npm_package_name`

# build docker image!
docker buildx build --platform=linux/amd64 -t $IMAGE_NAME .

exit $?