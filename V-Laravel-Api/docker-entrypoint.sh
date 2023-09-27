#!/bin/bash

# Install composer
composer install

# Update composer
composer update

# Install npm
npm install

# Migrate & seed
if [ $APP_ENV != "production" ] && [ $HOSTNAME = "api" ]
then
  php artisan migrate
  php artisan db:seed
fi

# CHMOD folder storage
chmod -R 777 storage
php artisan storage:link

# Copy to .env
cp .env.$APP_ENV .env

# Start
supervisord
