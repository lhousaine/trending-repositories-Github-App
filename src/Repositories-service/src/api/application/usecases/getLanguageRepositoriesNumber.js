export default function getLanguageRepositoriesNumberUsecase(RepositoryService) {

    function Execute(language) {
        return RepositoryService.getLanguageRepositoriesNumber(language);
    }
    return {
        Execute
    };
}
