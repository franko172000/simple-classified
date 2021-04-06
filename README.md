# Classic Classified VUE
This is a simple Laravel / Vuejs Classified app

# Downloading the app
Open up a terminal on your machine, navigate to a directory of your choice clone the repo


# Setting up DB
1. Make a copy of the .env.example and save it as .env or rename it to .env
2. Open up the .env file, replace the values shown below with your database configuration.
```bash
DB_DATABASE=your database name
DB_USERNAME=your database user
DB_PASSWORD=your database user password

```

# Basic setup
Install dependencies
```bash
 Composer install
```
# Run Migrations
```bash
 php artisan migrate
```
# Install Laravel Passport

```bash
 php artisan passport:install
```
# Seed Data
```bash
 php artisan db:seed
```
# Install Node Dependencies
```bash
 npm install
```
# Run vue in dev mode
```bash
 npm run dev
```
# Run vue in production mode
```bash
 npm run prod
```

# Run on Docker
1. Make sure you have installed docker and docker compose
2. Make a copy of the .env.example and save it as .env or rename it to .env
3. Navigate to the directory on your terminal and run the command below

```bash
 docker-compose up
``` 

# User Login
```bash
 email : test@test.com
 password: test
``` 

# Author
Anyaso Franklin <br />
franko172000@gmail.com



