#! /bin/sh

if [ $NODE_ENV = "developpement" ] || [ $NODE_ENV = "test" ];
then
	echo "Install dev & test dependencies"
	npm install -g nodemon && npm install
else
	echo "Install production dependencies"
	npm install --only=production
fi