import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Repository } from '../models/Repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  API_REPOSITORIES_URL = environment.REPOSITORIES_API_URL;

  constructor(private http: HttpClient) {
  }

  public getTrendingRepositoriesLanguages(): Observable<string[]> {
    return this.http.get<string[]>(this.API_REPOSITORIES_URL + '/languages');

  }

  public getLanguageTrendingRepositoriesNumber(language: string): Observable<number> {
    return this.http.get<any>(
      this.API_REPOSITORIES_URL + '/' + language + '/number',
      {observe: 'response'}
      ).pipe(map((response) => response.body.repositoriesNumber));
  }

  public getLanguageTrendingRepositories(language: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.API_REPOSITORIES_URL + '/' + language + '/repos');
  }

}
