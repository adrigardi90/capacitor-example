import { CapacitorConfig } from "@capacitor/cli";
require("dotenv").config();

const config: CapacitorConfig = {
  appId: "com.test",
  appName: "test",
  bundledWebRuntime: false,
  appendUserAgent: `test`,
  server: {
    // Empty page just for the example
    url: "https://devtest.skilling.com/index.html",
    cleartext: true,
    androidScheme: "https",
    allowNavigation: [`*`],
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "ic_launcher_foreground",
      showSpinner: false,
      useDialog: false,
    },
  },
  android: {
    includePlugins: [
      "@capacitor/camera",
      "@capacitor/device",
      "@capacitor/filesystem",
      "@capacitor/splash-screen",
    ],
  },
  ios: {
    includePlugins: [
      "@capacitor/camera",
      "@capacitor/device",
      "@capacitor/filesystem",
      "@capacitor/splash-screen",
    ],
  },
};

export default config;
