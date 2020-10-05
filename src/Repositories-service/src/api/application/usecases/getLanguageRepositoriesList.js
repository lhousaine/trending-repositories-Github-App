export default function getLanguageRepositoriesListUsecase(RepositoryService) {

    function Execute(language) {
        return RepositoryService.getLanguageRepositoriesList(language);
    }
    return {
        Execute
    };
}
