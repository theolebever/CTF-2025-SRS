FROM php:7.4.9-apache-buster
ENV DEBIAN_FRONTEND noninteractive
ARG CMSMADESIMPLE_VERSION=2.2.8
WORKDIR /var/www/html

# Update and install dependencies
RUN apt-get update && \
    apt-get -y install curl zip libzip-dev libgd-dev && \
    apt-get -yq autoremove && \
    apt-get clean && \
    rm -rf /var/lib/{apt,dpkg,cache,log}

# Copy custom PHP INI configuration
COPY limits.ini $PHP_INI_DIR/conf.d/

# Download and install CMS Made Simple
RUN curl -s -LO http://s3.amazonaws.com/cmsms/downloads/14202/cmsms-$CMSMADESIMPLE_VERSION-install.zip && \
    unzip cmsms-$CMSMADESIMPLE_VERSION-install.zip && \
    rm -r cmsms-$CMSMADESIMPLE_VERSION-install.zip && \
    mv $PHP_INI_DIR/php.ini-development $PHP_INI_DIR/php.ini && \
    docker-php-ext-configure zip && \
    docker-php-ext-install -j$(nproc) gd opcache mysqli zip && \
    a2enmod rewrite && \
    chown -R www-data.www-data .

# Change Apache to listen on port 8000
RUN sed -i 's/80/8000/' /etc/apache2/ports.conf && \
    sed -i 's/:80/:8000/' /etc/apache2/sites-available/000-default.conf

# Expose the new port
EXPOSE 8000
