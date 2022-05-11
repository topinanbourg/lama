# Pimp your Lama

![Pimp your lama favicon](/public/exemple.png?raw=true "Pimp your lama")

Tests de positionnement css `flex`

Pimp your own in https://lama.kalak.xyz

## Require

-   php >= 8
-   node >= 12

## install global package

```
npm install --global yarn
npm install --global gulp-cli
```

## install

```sh
$ composer install
$ npm install
$ yarn install
```

## Apache VHost exemple

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

## build files for public

```
$ npm run watch
```

watch file to reload browser via npm

```
$ npm run gulp
```

or watch changes for browsersync

```
$ gulp --host=lama.josno
```
