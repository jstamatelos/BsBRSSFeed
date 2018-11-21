import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

import 'rxjs/add/operator/map';

export class FeedItem {
  description: string;
  title: string;
  enclosure: string;

  constructor(description: string, title: string, enclosure:string) {
    this.description = description;
    this.title = title;
    this.enclosure = enclosure;
  }

}

@Injectable()
export class FeedProvider {

  constructor(public http: Http, public alertController: AlertController, public nativeAudio: NativeAudio) { }

  public getArticlesForUrl() {
    // feedUrl is the RSS location
    var feedUrl = 'https://feeds.feedburner.com/TheBroadStreetBullyPodcast';

    // This url is yahoo API to parse RSS XML to JSON
    var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20title%2Cenclosure%2Cdescription%20from%20rss%20where%20url%3D%22' + encodeURIComponent(feedUrl) + '%22&format=json';

    let articles = [];
    return this.http.get(url)
      .map(data => data.json()['query']['results'])
      .map((res) => {
        if (res == null) {
          this.showErrorAlert();
          return articles;
        }
        let objects = res['item'];
        for (let i = 0; i < objects.length; i++) {
          let item = objects[i];
          var trimmedDescription = item.description.substring(0, item.description.indexOf("</p>"));
          let newFeedItem = new FeedItem(trimmedDescription, item.title, item.enclosure);

          articles.push(newFeedItem);
        }
        return articles
      })
  }

  private showErrorAlert() {
    const alert = this.alertController.create({
      title: 'Oops!',
      subTitle: 'Unable to obtain feed, please try again later',
      buttons: ['OK']
    });
    alert.present();
  }

}
