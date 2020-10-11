import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Repository } from 'src/app/data/models/Repository';
import { RepositoryService } from 'src/app/data/services/repository.service';
import { GetLanguageTrendingRepositories, GetLanguageTrendingRepositoriesNumber, GetTrendingRepositoriesLanguages } from '../actions/Trending.Repositories.actions';
import {tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';

export class TrendingRepositoryStateModel {
    trendingRepositoriesLanguages: string[];
    languageTrendingRepositoriesNumber: number;
    languageTrendingRepositories: Repository[];
}
const defaults: TrendingRepositoryStateModel = {
    trendingRepositoriesLanguages: [],
    languageTrendingRepositoriesNumber: 0,
    languageTrendingRepositories: []
};

@State<TrendingRepositoryStateModel>({
    name: 'repositories',
    defaults
})
@Injectable()
export class TrendingRepositoryState {
    constructor(private repositoryService: RepositoryService) {
    }

    @Selector()
    static getTrendingRepositoriesLanguages(state: TrendingRepositoryStateModel): string[] {
        return state.trendingRepositoriesLanguages;
    }

    @Selector()
    static getLanguageTrendingRepositoriesNumber(state: TrendingRepositoryStateModel): number{
        return state.languageTrendingRepositoriesNumber;
    }

    @Selector()
    static getLanguageTrendingRepositories(state: TrendingRepositoryStateModel): Repository[]{
        return state.languageTrendingRepositories;
    }

    @Action(GetTrendingRepositoriesLanguages)
    getLanguages({getState, setState}: StateContext<TrendingRepositoryStateModel>): Observable<string[]> {
        return this.repositoryService.getTrendingRepositoriesLanguages().pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                trendingRepositoriesLanguages: result,
            });
        }));
    }

    @Action(GetLanguageTrendingRepositoriesNumber)
    getRepositoriesNumber( {getState, setState}: StateContext<TrendingRepositoryStateModel>,
                           {language}: GetLanguageTrendingRepositoriesNumber): Observable<number> {
        return this.repositoryService.getLanguageTrendingRepositoriesNumber(language).pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                languageTrendingRepositoriesNumber: result,
            });
        }));
    }

    @Action(GetLanguageTrendingRepositories)
    getRepositories( {getState, setState}: StateContext<TrendingRepositoryStateModel>,
                     {language}: GetLanguageTrendingRepositories): Observable<Repository[]> {
        return this.repositoryService.getLanguageTrendingRepositories(language).pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                languageTrendingRepositories: result,
            });
        }));
    }
}
