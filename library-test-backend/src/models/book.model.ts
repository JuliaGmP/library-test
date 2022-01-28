import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Author} from './author.model';
import {Category} from './category.model';

@model({
  settings: {
    postgresql: {
      table: 'Book',
    },
    foreignKeys: {
      fk_order_authorId: {
        name: 'fk_order_authorId',
        entity: 'Author',
        entityKey: 'id',
        foreignKey: 'authorid',
        onDelete: 'CASCADE',
        onUpdate: 'SET NULL'
      },
      fk_order_categoryId: {
        name: 'fk_order_categoryId',
        entity: 'Category',
        entityKey: 'id',
        foreignKey: 'categoryid',
        onDelete: 'CASCADE',
        onUpdate: 'SET NULL'
      }
    }
  }
})
export class Book extends Entity {
  @property({
    id: true,
    type: 'Number',
    generated: true
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;
  @property({
    type: 'string',
  })
  description?: string;

  @belongsTo(() => Author)
  authorId: number;

  @belongsTo(() => Category)
  categoryId: number;

  constructor(data?: Partial<Book>) {
    super(data);
  }
}

export interface BookRelations {
  // describe navigational properties here
}

export type BookWithRelations = Book & BookRelations;
