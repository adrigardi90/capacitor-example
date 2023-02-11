# capacitor-example

Capacitor example to reproduce the issue: Capacitor not being initialised on Android. 

The given link it's an empty page just to show the issue.

Steps to reproduce it:

## Android

Execute the following commands:

```
npm i
npm run add:android
npm run sync:android
npm run run:android
```

Go to `chrome://inspect/#devices`, inspect the device and check if Capacitor is available `window.Capacitor`

## iOS

On iOS it works as expected.

```
npm i
npm run add:ios
npm run sync:ios
npm run run:ios
```

Inspect the device via `Safari > Develop tab` and check if Capacitor is available `window.Capacitor`
