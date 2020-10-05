export default function getLanguageRepositoriesNumber(RepositoryService) {

    function Execute() {
        return RepositoryService.getLanguageRepositoriesNumber();
    }
    return {
        Execute
    };
}
