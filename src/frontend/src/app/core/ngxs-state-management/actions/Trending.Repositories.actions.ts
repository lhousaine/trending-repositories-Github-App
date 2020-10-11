export class GetTrendingRepositoriesLanguages {
    static readonly type = '[Trending Repositories Languages] Get';
    constructor() {
    }
}

export class SetCurrentLanguage {
    static readonly type = '[Language] Set';
    constructor(public language: string) {
    }
}


