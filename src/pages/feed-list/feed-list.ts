import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedProvider, FeedItem } from '../../providers/feed/feed';
import { NativeAudio } from '@ionic-native/native-audio';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';


@IonicPage()
@Component({
  selector: 'page-feed-list',
  templateUrl: 'feed-list.html'
})
export class FeedListPage implements OnInit {

  articles: FeedItem[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public feedProvider: FeedProvider,
    public nativeAudio: NativeAudio,
    private streamingMedia: StreamingMedia
  ) { }

  ngOnInit(): void {
    this.loadArticles();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedListPage');
  }

  getLatestFeeds() {
    return this.feedProvider.getArticlesForUrl();
  }

  loadArticles() {
    return this.feedProvider.getArticlesForUrl().subscribe(res => {
      this.articles = res
      console.log(res)
    });
  }

  playPodCast(link){
    console.log("Play that shit function ::::: Link ::::: " + link)

    let options: StreamingAudioOptions = {
      successCallback: () => { console.log('Track played') },
      errorCallback: (e) => { console.log('Error streaming') },
    };

    this.streamingMedia.playAudio(link,options);
  }

}
