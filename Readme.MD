# Messenger

## Front Service
messenger:30001

## Run container


# Voter

## Front Service
voter:40001

## Run container

# Proxy

## Redirect

http://messenger:30001 ---> https://mydomain.com/messenger
http://voter:40001 ---> https://mydomain.com/voter

## Run container

## Certificate
