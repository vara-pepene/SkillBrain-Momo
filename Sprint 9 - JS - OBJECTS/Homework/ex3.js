//Create a function that processes an array of book objects

function displayBooks(books) {
  for (let i = 0; i < books.length; i++) {
    let book = books[i];

    console.log(book.title + " by " + book.author);

    if (book.isRead) {
      console.log(`You have already read "${book.title}" by ${book.author}`);
    } else {
      console.log(`You need to read "${book.title}" by ${book.author}`);
    }
  }
}
