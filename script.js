
var prompt = require('prompt');

const schema = {
    properties: {
      name: {
        description: 'Inserisci il tuo nome',
      },
      surname: {
        description: 'Inserisci il tuo cognome',
      },
      yob: {
        description: 'Inserisci il tuo anno di nascita',
      },
    }
  };

  prompt.start();

  
  prompt.get(schema, promptResultManager);

  function promptResultManager(err, result) {
      console.log(result);
  }