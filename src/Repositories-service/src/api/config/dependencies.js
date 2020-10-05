const { default: RepositoryServiceImpl } = require('../frameworks/data/Repository.Service.Impl');

const RepositoryService = new RepositoryServiceImpl();

// eslint-disable-next-line import/prefer-default-export
export { RepositoryService };
