This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Docker

    docker build -t sgd122/busan_food:1.0 .
    docker run -p 3001:3000 --rm -it --volume `pwd`:/app  sgd122/busan_food:1.0
    docker run -p 80:3000 --rm -it -d  sgd122/busan_food:1.0
