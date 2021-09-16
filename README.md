## Installation
1. `npm i`
2. Install and run MongoDB--see https://docs.mongodb.com/manual/installation/
3. Update database.js (if necessary) with MongoDB information
4. `npm run build-dev`
5. `npm run serve-dev`
6. `npm run pop insert-number-here` to populate the database with randomly created records
7. Navigate to: http://localhost:3000
8. `npm run drop` to delete all database information(!)

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
