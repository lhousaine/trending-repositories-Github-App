import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  GetTrendingRepositoriesLanguages,
  SetCurrentLanguage,
} from 'src/app/core/ngxs-state-management/actions/Trending.Repositories.actions';
import { TrendingRepositoryState } from 'src/app/core/ngxs-state-management/states/Trending.Repositories.state';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit {
  @Select(TrendingRepositoryState.getTrendingRepositoriesLanguages)
  languages: Observable<string[]>;

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetTrendingRepositoriesLanguages());
  }

  getLanguagesRepositoriesInfos(language: string): void {
    console.log(language);
    this.store.dispatch(new SetCurrentLanguage(language)).subscribe(
      () => {
        this.router.navigate(['repos']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
