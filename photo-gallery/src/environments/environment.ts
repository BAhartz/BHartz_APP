// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
export const environment = {
  production: false,
  firebase:  {
    apiKey: "AIzaSyDE4BL99Bb7PiEQ3az9C712B8R4Njf6xsU",
    authDomain: "bh-appdemo-71273.firebaseapp.com",
    projectId: "bh-appdemo-71273",
    storageBucket: "bh-appdemo-71273.appspot.com",
    messagingSenderId: "986360498651",
    appId: "1:986360498651:web:22ef69255c85f459887ffe"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
