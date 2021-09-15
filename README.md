## Installation
`npm i`
`npm run build-dev`
`npm run serve-dev`
Navigate to: http://localhost:3000

## Docker
### dev docker image
#### Building
```
DOCKER_BUILDKIT=1 docker build --build-arg STAGE=dev -t oft-dev .
```

#### Running
The -it gives you interactively. Coming soon: how to mount your dev files into the container so you can develop and still get hot-reload
```
docker run -it -p 3000:3000 oft-dev
```

### prod
#### Building
```
DOCKER_BUILDKIT=1 docker build --build-arg STAGE=prod -t oft .
```

#### Running
```
docker run -p 3000:3000 oft
```
