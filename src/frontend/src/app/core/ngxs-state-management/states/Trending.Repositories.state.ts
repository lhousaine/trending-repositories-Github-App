import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Repository } from 'src/app/data/models/Repository';
import { RepositoryService } from 'src/app/data/services/repository.service';
import {
  GetTrendingRepositoriesLanguages,
  SetCurrentLanguage,
} from '../actions/Trending.Repositories.actions';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export class TrendingRepositoryStateModel {
  trendingRepositoriesLanguages: string[];
  currentLanguage?: string;
  languageTrendingRepositories: Repository[];
}
const defaults: TrendingRepositoryStateModel = {
  trendingRepositoriesLanguages: [],
  currentLanguage: null,
  languageTrendingRepositories: [],
};

@State<TrendingRepositoryStateModel>({
  name: 'repositories',
  defaults,
})
@Injectable()
export class TrendingRepositoryState {
  constructor(private repositoryService: RepositoryService) {}

  @Selector()
  static getTrendingRepositoriesLanguages(
    state: TrendingRepositoryStateModel
  ): string[] {
    return state.trendingRepositoriesLanguages;
  }

  @Selector()
  static getCurrentLanguage(state: TrendingRepositoryStateModel): string {
    return state.currentLanguage;
  }

  @Selector()
  static getLanguageTrendingRepositories(
    state: TrendingRepositoryStateModel
  ): Repository[] {
    return state.languageTrendingRepositories;
  }

  @Action(GetTrendingRepositoriesLanguages)
  getLanguages({
    getState,
    setState,
  }: StateContext<TrendingRepositoryStateModel>): Observable<string[]> {
    return this.repositoryService.getTrendingRepositoriesLanguages().pipe(
      tap((result) => {
        const state = getState();
        setState({
          ...state,
          trendingRepositoriesLanguages: result,
        });
      })
    );
  }

  @Action(SetCurrentLanguage)
  setCurrentLanguage(
    { getState, setState }: StateContext<TrendingRepositoryStateModel>,
    { language }: SetCurrentLanguage
  ): Observable<Repository[]> {
    const state = getState();
    return this.repositoryService
      .getLanguageTrendingRepositories(language)
      .pipe(
        tap((result) => {
          setState({
            ...state,
            currentLanguage: language,
            languageTrendingRepositories: result,
          });
        })
      );
  }
}
