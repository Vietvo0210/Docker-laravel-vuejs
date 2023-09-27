FROM php:8.1.10

# Update packages
RUN apt update -y

#  Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install intl mysql
RUN apt install -y libicu-dev libpq-dev mariadb-client
RUN docker-php-ext-install intl pdo_mysql mysqli bcmath

# Install redis
RUN pecl install redis
RUN docker-php-ext-enable redis

# Install mongo
RUN apt install -y libcurl4-openssl-dev pkg-config libssl-dev
RUN pecl install mongodb
RUN docker-php-ext-enable mongodb

# Install mongo tools
RUN curl https://fastdl.mongodb.org/tools/db/mongodb-database-tools-debian11-x86_64-100.7.0.deb -o mongodb-database-tools.deb
RUN apt install ./mongodb-database-tools.deb
RUN rm ./mongodb-database-tools.deb

# Install gd exif
RUN apt install -y libfreetype6-dev libjpeg62-turbo-dev libpng-dev
RUN docker-php-ext-install -j$(nproc) iconv gd exif
RUN docker-php-ext-configure gd

# Install zip unzip
RUN apt install -y libzip-dev zip unzip
RUN docker-php-ext-install zip

# Install swoole
RUN pecl install swoole
RUN apt update && apt install -y procps

# Install gnumeric for ssconvert
RUN apt install -y --no-install-recommends gnumeric

# Install supervisor
RUN apt update && apt install -y supervisor

# Install node & npm
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt install -y nodejs
RUN npm install -g npm@8.18.0

# Cleanup
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/*

# Timezone
ENV TZ=Asia/Ho_Chi_Minh

WORKDIR /var/www/html
ENTRYPOINT ["sh", "docker-entrypoint.sh"]
