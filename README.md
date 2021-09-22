# Node_express_redis_docker_project

## Docker Developpement :
```docker
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

## Docker Test :
```docker
docker-compose -f docker-compose.yml -f docker-compose.test.yml up -d
```

## Docker Production :
We should Force the rebuild of app_project (To only install production dependencies):
```docker
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build app_project
```
