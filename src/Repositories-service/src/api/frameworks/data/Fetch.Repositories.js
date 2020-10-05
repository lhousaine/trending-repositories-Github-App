import { request } from '@octokit/request';
import PriorDateHelper from '../common/Date.Helper';

export default function FetchTrendingRepository() {
    const priorDaysNumber = PriorDateHelper(30);
    function Execute() {
        return request(
            'GET /search/repositories?q=created:>{date}&sort=stars&order=desc&page={page}&per_page={per_page}',
            {
                date: priorDaysNumber,
                page: 1,
                per_page: 100
            }
        ).data.items;
    }

    return {
        Execute
    };

}
