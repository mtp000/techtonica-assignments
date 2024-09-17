# Welcome to My Tuyen's Library

## About

This is a rest API project that connects to a postgresql database.

The server acts as a pseudo-librarian, allowing you to get a list of books (not filtered by availability), add new books to the library database, checkout a book, and delete a book from database.

## Start Server

This is the command and response to start the server. The default port is 5001.
![terminal start](images/terminal-start.png)

## Get Route 

This is the route to get all books in library database.
 ![get books route](images/get-books-route.png)

## Post Route 

This is the route to post books. Technically, no information is required to post a new bookThe required information to post a new book is
isbn, title, author, last_reserved_at, is_available.

Below is the snapshot of a successful post request.
![post request was successful](images/post-route-1.png)

This the result of a successful post request. By using a get request to dispaly all books in current table, 
you can see a new book was added.
![new book added shown at bottom of table](images/post-route-2.png)


## Put Route

This is the route to make a reservation for a book. 

Below is an example of the reservation successfully made. The result is the is_available property is set to false
to indicate the book is no longer available for checkout. The last_reserved_at property takes the value of the 
date that was passed in by the client.
![put request was success](images/put-route-1.png) 

![is_avialable property is changed to false to indicate book has been reserved](images/put-route-2.png)

 ## Delete Route

This the route to delete a book from the library database.

Below is a successful delete request.
![delete request was successful](images/delete-route-1.png)

Below shows the book that was deleted is so no longer in the library database.
![book is no longer in table](images/delete-route-2.png)
