export default function getTrendingRepositoriesLanguages(RepositoryService) {

    function Execute() {
        return RepositoryService.getTrendingRepositoriesLanguages();
    }
    return {
        Execute
    };
}
