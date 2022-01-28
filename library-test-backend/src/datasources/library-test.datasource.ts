import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler, AnyObject} from '@loopback/repository';
import {postgresUrl} from '../config/env';

const config = {
  name: 'postgres',
  connector: 'postgresql',
  url: '',
  host: '',
  port: 5432,
  user: 'postgres',
  password: 'pass',
  database: 'postgres'
};

//Config the DataSource with env. variables.
function updateConfig(dsConfig: AnyObject) {
  if(postgresUrl){
    dsConfig.url = postgresUrl;
  }
  return dsConfig;
}

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LibraryTestDataSource extends juggler.DataSource
  implements LifeCycleObserver {
    static dataSourceName = 'postgres';

  constructor(
    @inject('datasources.config.postgres', {optional: true})
    dsConfig: object = config,
  ) {
    super(updateConfig(dsConfig));
  }
}
