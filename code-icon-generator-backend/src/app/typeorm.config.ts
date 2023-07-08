/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/func-call-spacing */
const { DataSource } = require('typeorm');
const {
  GitRepo,
} = require('../app/features/icons/entities/git-repo.entity');
const {
  TreeItem,
} = require('../app/features/icons/entities/tree-item.entity');

const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'code_icon_generator',
  entities: [GitRepo, TreeItem],
  logging: true,
  uuidExtension: 'pgcrypto',
  migrations: ['./src/**/migrations'],
});

module.exports.default = appDataSource;
