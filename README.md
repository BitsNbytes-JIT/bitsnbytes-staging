# BitsNbytes-Staging
BitsNbytes website staging repo for development and testing purposes
# Setup
## Get the source code and install the required modules
```
git clone https://github.com/BitsNbytes-JIT/bitsnbytes-staging.git
cd bitsnbytes-staging
npm install 
```
# Connecting to MongoDB 
Create a new file named as .env.
Add the  following details to bitsnbytes-staging/.env
```
MONGO_URI= <Connection URL to the MONGODB cluster
PORT=8088
```
# Start the web server
```
  npm run servers
```
