#!/bin/sh

set -e

git clone git://github.com/ajaxorg/ace-builds.git
wget http://twitter.github.io/bootstrap/assets/bootstrap.zip
unzip bootstrap.zip

wget http://code.jquery.com/jquery-1.9.1.min.js
