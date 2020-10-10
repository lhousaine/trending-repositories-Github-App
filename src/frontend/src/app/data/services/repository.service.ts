import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RepositoriesNumber } from '../models/Repositories.Number';
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

  public getLanguageTrendingRepositoriesNumber(language: string): Observable<RepositoriesNumber> {
    return this.http.get<RepositoriesNumber>(this.API_REPOSITORIES_URL + language + '/number');
  }

  public getLanguageTrendingRepositories(language: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.API_REPOSITORIES_URL + language + '/repos');
  }

}
