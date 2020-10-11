export class GetTrendingRepositoriesLanguages {
    static readonly type = '[Trending Repositories Languages] Get';
    constructor() {
    }
}

export class GetLanguageTrendingRepositoriesNumber {
    static readonly type = '[Language Trending Repositories Number] Get';
    constructor(public language: string) {
    }
}

export class GetLanguageTrendingRepositories {
    static readonly type = '[Language Trending Repositories] Get';
    constructor(public language: string) {
    }
}
