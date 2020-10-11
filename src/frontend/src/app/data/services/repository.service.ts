import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repository } from '../models/Repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  API_REPOSITORIES_URL = 'http://localhost:3000/api/repositories';

  constructor(private http: HttpClient) {
  }

  public getTrendingRepositoriesLanguages(): Observable<string[]> {
    return this.http.get<string[]>(this.API_REPOSITORIES_URL + '/languages');
  }

  public getLanguageTrendingRepositoriesNumber(language: string): Observable<number> {
    return this.http.get<any>(this.API_REPOSITORIES_URL + language + '/number')
    .pipe(map((response) => response.body.repositoriesNumber));
  }

  public getLanguageTrendingRepositories(language: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.API_REPOSITORIES_URL + language + '/repos');
  }

}
