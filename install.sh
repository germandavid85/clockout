#!/bin/bash
mv test/e2e/data-template.js test/e2e/datajs
npm i
ln runthis.sh /usr/local/bin/clockout
chmod 755 /usr/local/bin/clockout
