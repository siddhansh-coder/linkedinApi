const neo4j = require('neo4j-driver');

async function createNeoConnection()
{

    const driver = neo4j.driver(
        'neo4j://localhost:7687',
        neo4j.auth.basic('neo4j', 'My@neo77')
      );
      const session = driver.session();
      
      (async () => {
        try {
          const result = await session.run(
            'CREATE (n:Person {name: $name}) RETURN n',
            { name: 'sam' }
          );
      
          result.records.forEach(record => {
            console.log(record.get('n').properties);
          });
        } finally {
          await session.close();
          await driver.close();
        }
      })();
      
}

module.exports = {createNeoConnection};
