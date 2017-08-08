#!/bin/bash

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.3/install.sh | bash

. ~/.nvm/nvm.sh

nvm install 7

npm install
