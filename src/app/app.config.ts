import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ThemeService } from './common/services/theme.service';

export const appConfig: ApplicationConfig = {
  providers: [
    ThemeService,
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'pluginzap-wule',
          appId: '1:289341227752:web:5de7969bbb069715593f5d',
          storageBucket: 'pluginzap-wule.appspot.com',
          apiKey: 'AIzaSyD9Y0mUQioVGgmi7KEZ0EYCRVsb2j13qHM',
          authDomain: 'pluginzap-wule.firebaseapp.com',
          messagingSenderId: '289341227752',
          measurementId: 'G-FTD3BHBJNF'
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideDatabase(() => getDatabase())),
    importProvidersFrom(HttpClientModule),
    provideAnimations()
  ]
};
