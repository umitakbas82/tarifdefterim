import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(),  
   
   

    
    
    provideFirebaseApp(() => initializeApp({"projectId":"tarifdefterim-35452","appId":"1:293055157104:web:9453c0dc46da2957edb5b5","storageBucket":"tarifdefterim-35452.appspot.com","apiKey":"AIzaSyBb_6lQ4KNqGQHNv2hEHcTXywueELlO7Z4","authDomain":"tarifdefterim-35452.firebaseapp.com","messagingSenderId":"293055157104"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"tarifdefterim-35452","appId":"1:293055157104:web:9453c0dc46da2957edb5b5","storageBucket":"tarifdefterim-35452.appspot.com","apiKey":"AIzaSyBb_6lQ4KNqGQHNv2hEHcTXywueELlO7Z4","authDomain":"tarifdefterim-35452.firebaseapp.com","messagingSenderId":"293055157104"})), provideFirestore(() => getFirestore())
    
  
  ]
  
};
