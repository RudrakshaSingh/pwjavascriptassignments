// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.
var books = [{title: 'Book 1',author: 'author 1',year: 2005},
    {title: 'Book 2',author: 'author 2',year: 2010},
    {title: 'Book 3',author: 'author 3',year: 2008},
    {title: 'Book 4',author: 'author 4',year: 2015}];
function filterAndCapitalize(books){
    return books.filter(function(books){
        return books.year>=2010
    }).map(function(book){
    book.author = book.author.toUpperCase()
    return book}
    )
}
let a = filterAndCapitalize(books)
console.log(a);
