export default function getTrendingRepositoriesLanguagesUsecase(RepositoryService) {

    function Execute() {
        return RepositoryService.getTrendingRepositoriesLanguages();
    }
    return {
        Execute
    };
}
