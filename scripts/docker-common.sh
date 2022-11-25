#!/bin/bash

DOCKER_COMMAND_PATH=$(command -v docker 2> /dev/null)
DOCKER_COMMAND_EXIST=$?

if [ $DOCKER_COMMAND_EXIST != 0 ]; then
  echo "Install 'docker' first."
  echo "-> brew install --cask docker"
  exit 1
fi

function docker() {
  sh -c "$DOCKER_COMMAND_PATH $*"
}

function docker_image_name() {
  local raw_name=$1
  echo $(sed "s/\@//g" <<< $raw_name)
}
