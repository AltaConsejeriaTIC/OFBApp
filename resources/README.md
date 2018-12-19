# OFB APP

## Instalar

Instalar el [ambiente de desarrollo](https://gist.github.com/spardo6/1ba195e6f9c4f6f867ba460fdcbc93dd) de **Ionic**.

Instalar los paquetes de NodeJS ejecutando el siguiente comando en la raíz del proyecto (`~/`):

```shell
npm install
```

## Ajustar

Copiar y renombrar el archivo `~/src/env.example.ts` a `~/src/env.ts`.

Ajustar el archivo `~/src/env.ts`:

```js
import { Environment } from './interfaces/environment.interface';

export const ENV: Environment = {
  endpoint: {
    app: 'http://165.227.254.52:10010',
    admin: 'http://165.227.254.52:8080'
  }
};
```

> La posición `endpoint` recibe la **URI** base del **API**.

## Compilar

### Navegador

En la raíz del proyecto, abrir una terminal y ejecutar el comando:

```shell
ionic serve
```

## Android

En la raíz del proyecto, abrir una terminal y ejecutar el comando:

```shell
ionic cordova build android
```

> El argumento `--release` puede ser agregado para generar un APK firmado para publicar en tiendas.

Conectar por USB un teléfono Android en modo de depuración y comprobar que se encuentra conectado:

```shell
adb devices
```

debe responder:

```shell
$ adb devices
List of devices attached
ZY323W8KZQ      device
```

compilar directamente en el teléfono:

```shell
ionic cordova run android --device
```

## Iconos

### Android

| Medida    | nombre                    |
|-----------|---------------------------|
| 36 x 36   | drawable-ldpi-icon.png    |
| 48 x 48   | drawable-mdpi-icon.png    |
| 72 x 72   | drawable-hdpi-icon.png    |
| 96 x 96   | drawable-xhdpi-icon.png   |
| 144 x 144 | drawable-xxhdpi-icon.png  |
| 192 x 192 | drawable-xxxhdpi-icon.png |

### iOS

| Medida      | nombre            |
|-------------|-------------------|
| 40 x 40     | icon-40.png       |
| 80 x 80     | icon-40@2x.png    |
| 120 x 120   | icon-40@3x.png    |
| 50 x 50     | icon-50.png       |
| 100 x 100   | icon-50@2x.png    |
| 60 x 60     | icon-60.png       |
| 120 x 120   | icon-60@2x.png    |
| 180 x 180   | icon-60@3x.png    |
| 72 x 72     | icon-72.png       |
| 144 x 144   | icon-72@2x.png    |
| 76 x 76     | icon-76.png       |
| 152 x 152   | icon-76@2x.png    |
| 167 x 167   | icon-83.5@2x.png  |
| 1024 x 1024 | icon-1024.png     |
| 29 x 29     | icon-small.png    |
| 58 x 58     | icon-small@2x.png |
| 87 x 87     | icon-small@3x.png |
| 57 x 57     | icon.png          |
| 114 x 114   | icon@2x.png       |

## Splash Screen

### Android

| Medida      | nombre                           |
|-------------|----------------------------------|
| 800 x 480   | drawable-land-hdpi-screen.png    |
| 320 x 200   | drawable-land-ldpi-screen.png    |
| 480 x 320   | drawable-land-mdpi-screen.png    |
| 1280 x 720  | drawable-land-xhdpi-screen.png   |
| 1600 x 960  | drawable-land-xxhdpi-screen.png  |
| 1920 x 1280 | drawable-land-xxxhdpi-screen.png |
| 480 x 800   | drawable-port-hdpi-screen.png    |
| 200 x 320   | drawable-port-ldpi-screen.png    |
| 320 x 480   | drawable-port-mdpi-screen.png    |
| 720 x 1280  | drawable-port-xhdpi-screen.png   |
| 960 x 1600  | drawable-port-xxhdpi-screen.png  |
| 1280 x 1920 | drawable-port-xxxhdpi-screen.png |

### iOS

| Medida      | nombre                          |
|-------------|---------------------------------|
| 640 x 1136  | Default-568h@2x~iphone.png      |
| 750 x 1334  | Default-667h.png                |
| 1242 x 2208 | Default-736h.png                |
| 2208 x 1242 | Default-Landscape-736h.png      |
| 2732 x 2048 | Default-Landscape@~ipadpro.png  |
| 2048 x 1536 | Default-Landscape@2x~ipad.png   |
| 1024 x 768  | Default-Landscape~ipad.png      |
| 2048 x 2732 | Default-Portrait@~ipadpro.png   |
| 1536 x 2048 | Default-Portrait@2x~ipad.png    |
| 768 x 1024  | Default-Portrait~ipad.png       |
| 640 x 960   | Default@2x~iphone.png           |
| 2732 x 2732 | Default@2x~universal~anyany.png |
| 320 x 480   | Default~iphone.png              |
