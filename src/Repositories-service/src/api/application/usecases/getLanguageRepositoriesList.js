export default function getLanguageRepositoriesList(RepositoryService) {

    function Execute() {
        return RepositoryService.getLanguageRepositoriesList();
    }
    return {
        Execute
    };
}
