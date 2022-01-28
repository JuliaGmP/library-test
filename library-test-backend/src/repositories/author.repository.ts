import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LibraryTestDataSource} from '../datasources';
import {Author, AuthorRelations} from '../models';

export class AuthorRepository extends DefaultCrudRepository<
  Author,
  typeof Author.prototype.id,
  AuthorRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: LibraryTestDataSource,
  ) {
    super(Author, dataSource);
  }
}
