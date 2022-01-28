import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    postgresql: {
      table: 'Author',
    },
  },
})
export class Author extends Entity {
  @property({
    id: true,
    type: 'Number',
    generated: true
  })
  id: number;

  @property({
    type: 'string',
    required: true
  })
  name: string;

  @property({
    type: 'string',
  })
  pseudonym?: string;

  @property({
    type: 'date',
    required: true,
  })
  birthDate: string;

  @property({
    type: 'date'
  })
  deathDate: string;


  constructor(data?: Partial<Author>) {
    super(data);
  }
}

export interface AuthorRelations {
  // describe navigational properties here
}

export type AuthorWithRelations = Author & AuthorRelations;
