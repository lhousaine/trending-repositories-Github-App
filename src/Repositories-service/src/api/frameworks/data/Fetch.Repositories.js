import { request } from '@octokit/request';
import PriorDateHelper from '../common/Date.Helper';

export default function FetchTrendingRepository() {
    const priorDaysNumber = PriorDateHelper(30);
    async function Execute() {
        const result = await request(
            'GET /search/repositories?q=created:>{date}&sort=stars&order=desc&page=1&per_page=100',
            {
                date: priorDaysNumber
            }
        );
        return result.data.items;
    }
    return {
        Execute
    };

}
