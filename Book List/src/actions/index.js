export function selectBook (book) {
  //console.log("A Book has been selected..!!!", book.title);
  // selectBook is an actionCreator, it needs to return an action an pbject with type property
  return{
    type: 'BOOK_SELECTED',
    payload:book

  };
}
