#!/bin/bash
docker run --name selenium -d -p 4444:4444 -v /var/run/docker.sock:/var/run/docker.sock selenium/standalone-chrome:4.0.0-beta-4-prerelease-20210604
sleep 10
SELENIUM_IP=$(docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' selenium)
npm test -- --hostname $SELENIUM_IP
docker rm -f selenium