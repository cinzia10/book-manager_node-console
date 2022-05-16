
const { start } = require('prompt');
const prompt = require('prompt');
const model = require('./model.js');

const bookArray = [];

console.log('Benvenuto in book manager');

startMenu();

function startMenu() {

    console.log('Sono disponibili tre opzioni');
    console.log('1)  Aggiungi un libro');
    console.log('2)  Lista dei libri');
    console.log('3)  Esci');

    prompt.start();

const schema = {
    properties: {
      selection: {
        description: 'Seleziona una delle opzioni',
      }
    }
  };

  prompt.get(schema, startMenuManager);

}


  function startMenuManager(err, result) {
      if (result.selection === '1') {
          insertBook()
      } else if (result.selection === '2') {
          
      } else if (result.selection === '3') {
        console.log('Grazie e a presto!')
        process.exit();
      } else {
          console.log('Selezione non disponibile');
          startMenu();
      }
  }

  function insertBook() {
    const schema = {
        properties: {
          title: {
            description: 'Inserisci il titolo',
          },
          author: {
            description: 'Inserisci l\'autore',
          },
          publisher: {
            description: 'Inserisci la casa editrice',
          }
        }};
    
      prompt.get(schema, insertBookManager);
  }

  function insertBookManager(err, result) {
      const book = new model.Book(result.title, result.author, result.publisher);
      bookArray.push(book);
      startMenu();
  }