
const prompt = require('prompt');
const model = require('./model.js');

const bookArray = [];
const magazineArray = [];


console.log('Benvenuto in book manager');

startMenu();




////////// FUNZIONI PER AVVIARE IL MENU DI AVVIO
function startMenu() {

    console.log('Sono disponibili tre opzioni');
    console.log('1)  Aggiungi una pubblicazione');
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
        addPublication();
      } else if (result.selection === '2') {
        publicationMenu();  
        // printBooks(bookArray);
      } else if (result.selection === '3') {
        console.log('Grazie e a presto!')
        process.exit();
      } else {
          console.log('Selezione non disponibile');
          startMenu();
      }
}

////////// FUNZIONI PER AGGIUNGERE UNA PUBBLICAZIONE
function addPublication() {

    console.log('Sono disponibili tre opzioni');
    console.log('1)  Aggiungi una rivista');
    console.log('2)  Aggiungi un libro');
    console.log('3)  Torna indietro');

    prompt.start();

  const schema = {
    properties: {
      selection: {
        description: 'Seleziona una delle opzioni',
      }
    }
  };

  prompt.get(schema, addPublicationManager);

}
function addPublicationManager(err, result) {
    if (result.selection === '1') {
        insertMagazine();
    } else if (result.selection === '2') {
        insertBook();
    } else if (result.selection === '3') {
        startMenu();
    } else {
        console.log('Selezione non disponibile');
        addPublication();
    }
}

////////// FUNZIONI PER AGGIUNGERE I LIBRI
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

////////// FUNZIONI PER AGGIUNGERE LE RIVISTE
function insertMagazine() {
  const schema = {
      properties: {
        title: {
          description: 'Inserisci il titolo',
        },
        publisher: {
          description: 'Inserisci la casa editrice',
        },
        realease: {
          description: 'Inserisci il data di pubblicazione',
        },
        periodicy: {
          description: 'Inserisci il frequenza di uscita',
        },
        type: {
          description: 'Inserisci il tipologia',
        },
        price: {
          description: 'Inserisci la prezzo',
        },
      }};
  
    prompt.get(schema, insertMagazineManager);
}
function insertMagazineManager(err, result) {
    const magazine = new model.Magazine(result.title, result.publisher, result.realease, result.periodicy, result.type, result.price);
    magazineArray.push(magazine);
    startMenu();
}


////////// FUNZIONI PER ACCEDERE AL MENU' DELLE PUBBLICAZIONI
function publicationMenu() {

  console.log('Sono disponibili quattro opzioni');
  console.log('1)  Visualizza le riviste');
  console.log('2)  Visualizza i libri');
  console.log('3)  Visualizza tutte le pubblicazioni');
  console.log('4)  Torna indietro');

  prompt.start();

const schema = {
  properties: {
    selection: {
      description: 'Seleziona una delle opzioni',
    }
  }
};

prompt.get(schema, publicationMenuManager);

}
function publicationMenuManager (err, result){
  if (result.selection === '1') {
    viewPublication(magazineArray);
} else if (result.selection === '2') {
  viewPublication();
} else if (result.selection === '3') {
  viewPublication(bookArray);
  viewPublication(magazineArray);
} else if (result.selection === '4') {
  startMenu();
} else {
  console.log('Selezione non disponibile');
  publicationMenu();  
}

}


////////// FUNZIONI PER VISUALIZZARE GLI ELENCHI
function viewPublication() {

  console.log('Sono disponibili tre opzioni');
  console.log('1)  Visualizza in ordine alfabetico');
  console.log('2)  Visualizza in ordine di pubblicazione');
  console.log('3)  Torna indietro');

  prompt.start();

const schema = {
  properties: {
    selection: {
      description: 'Seleziona una delle opzioni',
    }
  }
};

prompt.get(schema, viewPublicationManager);

}
function viewPublicationManager (err, result){
  if (result.selection === '1') {
    printPublication(bookArray);
} else if (result.selection === '2') {
    printPublication(bookArray);
} else if (result.selection === '3') {
    printPublication(bookArray);
    printPublication(magazineArray);
} else if (result.selection === '4') {
  startMenu();
} else {
  console.log('Selezione non disponibile');
  viewPublication();  
}

}
function printPublication(array) {
  for (const publication of array) {
      console.log(publication.toString())
  }
}

////////// FUNZIONI PER ORDINARE