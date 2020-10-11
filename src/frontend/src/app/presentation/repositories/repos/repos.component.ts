import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TrendingRepositoryState } from 'src/app/core/ngxs-state-management/states/Trending.Repositories.state';
import { Repository } from 'src/app/data/models/Repository';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  language: string;

  @Select(TrendingRepositoryState.getLanguageTrendingRepositories) languageTrendingRepositories: Observable<Repository[]>;
  @Select(TrendingRepositoryState.getCurrentLanguage) currentLanguage: Observable<string>;


  constructor() { }

  ngOnInit(): void {
    this.currentLanguage.subscribe(result => {
      this.language = result;
    });
    console.log(this.language);
  }

}
