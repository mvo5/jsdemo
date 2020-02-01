#!/bin/sh

set -e

if [ ! -d ace-builds ]; then
   git clone git://github.com/ajaxorg/ace-builds.git
fi
wget https://maxcdn.bootstrapcdn.com/bootstrap/2.3.2/css/bootstrap.min.css

wget http://code.jquery.com/jquery-1.9.1.min.js
