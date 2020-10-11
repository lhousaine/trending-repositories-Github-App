import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetLanguageTrendingRepositoriesNumber, GetTrendingRepositoriesLanguages } from 'src/app/core/ngxs-state-management/actions/Trending.Repositories.actions';
import { TrendingRepositoryState } from 'src/app/core/ngxs-state-management/states/Trending.Repositories.state';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  @Select(TrendingRepositoryState.getTrendingRepositoriesLanguages) languages: Observable<string[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTrendingRepositoriesLanguages());
  }

}
