import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedProvider } from '../providers/feed/feed';
import { FeedListPage } from '../pages/feed-list/feed-list';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NativeAudio } from '@ionic-native/native-audio';
import { StreamingMedia } from '@ionic-native/streaming-media';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    FeedListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    FeedListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FeedProvider,
    InAppBrowser,
    NativeAudio,
    StreamingMedia
  ]
})
export class AppModule {}
