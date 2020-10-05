export default function mapRepositoryResponse(repo = {}) {
    return Object.freeze({
        id: repo.id,
        name: repo.name,
        ownerLogin: repo.owner.login,
        language: repo.language,
        starsNumber: repo.stargazers_count
    });
}
