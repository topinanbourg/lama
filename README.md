# Pimp your Lama

![Pimp your lama exemple](/public/exemple.png?raw=true "Pimp your lama")

Tests de positionnement css `flex`

Pimp your own in https://lama.kalak.xyz

## Require

-   php >= 8
-   node >= 12

## Install

```sh
$ composer install
$ npm install
$ yarn install
```

## Apache VHost exemple

### Wamp

```
<VirtualHost *:80>
	ServerName lama.josno
	DocumentRoot "w:/www/lama/public"
	<Directory  "w:/www/lama/public/">
		Options +Indexes +Includes +FollowSymLinks +MultiViews
		AllowOverride All
		Require local
	</Directory>
</VirtualHost>
```

### Debian (with cronotab & https by letsencrypt)

```
<IfModule mod_ssl.c>
<VirtualHost *:443>
    ServerName lama.kalak.xyz
    DocumentRoot /var/www/lama/public

    ErrorLog  "|/usr/bin/cronolog /var/log/apache2/lama.kalak.xyz/%Y/%Y-%m/error.log"
    CustomLog "|/usr/bin/cronolog /var/log/apache2/lama.kalak.xyz/%Y/%Y-%m/access.log" combined

SSLCertificateFile /etc/letsencrypt/live/lama.kalak.xyz/fullchain.pem
SSLCertificateKeyFile /etc/letsencrypt/live/lama.kalak.xyz/privkey.pem
Include /etc/letsencrypt/options-ssl-apache.conf
</VirtualHost>
</IfModule>

```

## Useful commands

### build files for production/public

```
$ npm run build
```

### watch file to reload browser via npm

```
$ npm run gulp
```

### or watch changes for browsersync

```
$ gulp --host=lama.josno
```
