import { request } from '@octokit/request';

export default function FetchTrendingRepository(priorDaysNumber) {
    return request(
        'GET /search/repositories?q=created:>{date}&sort=stars&order=desc&page={page}&per_page={per_page}',
        {
            date: priorDaysNumber,
            page: 1,
            per_page: 100
        }
    );
}
