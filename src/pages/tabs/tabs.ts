import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FeedListPage } from '../feed-list/feed-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FeedListPage;

  constructor() {

  }
}
