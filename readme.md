
### Build

``` bash
docker build -t selenium-docker:1.0.0 -f Dockerfile.merge . --no-cache

docker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock selenium-docker:1.0.0
```


### Run container with tests (LEGACY)
`docker-compose run tests` or `docker-compose up --abort-on-container-exit`
