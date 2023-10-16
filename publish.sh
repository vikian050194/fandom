#!/bin/env bash

PACKAGE_VERSION=$(jq -r .version package.json)

GREP_CHANGELOG=$(grep --fixed-strings -o "$PACKAGE_VERSION" CHANGELOG.md | wc -l)

if [ "$GREP_CHANGELOG" != 4 ]; then
    echo "update CHANGELOG: $PACKAGE_VERSION was found $GREP_CHANGELOG times instead of 4";
    exit -1;
fi

set -e

npm run lint
npm run test

git diff --exit-code
git diff --cached --exit-code

npm publish

git tag "v$PACKAGE_VERSION"

git push --tags
