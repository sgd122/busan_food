This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Link

[Frontend(React.js)](http://13.125.210.53)
[Backend(Django)](http://13.125.210.53:8000)
[Storybook(React.js)](http://13.125.210.53:9009)

## Docker

    docker build -t sgd122/busan_food:1.0 .
    docker run -p 3001:3000 --rm -it --volume `pwd`:/app  sgd122/busan_food:1.0

    sudo docker run -p 80:3000 --rm -it -d  sgd122/busan_food:1.0
    sudo docker run -p 8000:8000 --rm -it -d  sgd122/busan_food_backend:1.0

## Docker-compose

    docker-compose up -d --build

## 참조

    https://blog.leedoing.com/171
