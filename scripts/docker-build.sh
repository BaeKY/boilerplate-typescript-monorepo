#!/bin/bash

DOCKER_COMMAND_PATH=$(command -v docker 2> /dev/null)
DOCKER_COMMAND_EXIST=$?

if [ $DOCKER_COMMAND_EXIST != 0 ]; then
  echo "Install 'docker' first."
  echo "-> brew install --cask docker"
fi

################################### Build Docker Image ###################################

# package.json에서 image 이름을 가져오도록 한다.
IMAGE_NAME=$(sed "s/\@//g" <<< $npm_package_name)

# build docker image!
sh -c "$DOCKER_COMMAND_PATH buildx build --platform=linux/amd64 -t $IMAGE_NAME ."

exit $?