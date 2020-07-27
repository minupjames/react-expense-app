
//object destructuring

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    // name: 'Penguin'
  }
}

const { name: publisherName = 'self publish' } = book.publisher

console.log(publisherName)
