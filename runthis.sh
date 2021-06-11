#!/bin/bash
type=$1
comment=$2
time=$3
project=$4

cd $CLOCKOUT_HOME

if [ -z "$project" ]
then
    npm run do:record -- "$type" "$comment" "$time" > /dev/null &
else
    npm run do:record -- "$type" "$comment" "$time" "$project" > /dev/null &
fi
