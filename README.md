# Practice Exam - Full RESTful API

Create a full RESTful API using the Facebook database structure you created in the previous assignment, including an Express app and a Postgres database. This app should have the following routes, with corresponding SQL statements:

- **Users** 
  - GET `/users` - Get all users.
  - GET `/users/:id` - Get single user.
  - POST `/users` - Add single user.
  - DELETE `/users/:id` - Delete user with the corresponding `id`.
- **Posts**
  - GET `/posts` - Get all posts.
  - GET `/posts/:id` - Get single post.
  - POST `/posts` - Add single post.
  - PATCH `/posts/:id` - Edit single post.
  - DELETE `/posts/:id` - Delete single post.
- **Likes**
  - GET `/likes` - Get all likes.
  - GET `/likes/posts/:id` - Get all likes for a single post.[?]
  - POST `/likes` - Add single like.
  - DELETE `/likes/:id` - Delete single like.
- **Comments**
  - GET `/comments` - Get all comments.
  - GET `/comments/posts/:id` - Get all comments for a single post. [?]
  - POST `/comments` - Add single comment.
  - PATCH `/comments/:id` - Edit single comment.
  - DELETE `/comments/:id` - Delete single comment.
- **Albums**
  - GET `/albums` - Get all albums.
  - POST `/albums` - Add new album.
- **Pictures**
  - GET `/pictures` - Get all pictures.
  - GET `/pictures/albums/:id` - Get all pictures for a single album.
  - POST `/pictures` - Add single picture.
  - DELETE `/pictures/:id` - Delete single picture.

The responses from your Express app should have three keys: `status`, `message`, and `body`. For example, when I send a GET request for a single user, I should get back something that looks like this:

```js
{
  status: "success",
  message: "got single user",
  body: {
    id: 1,
    name: "Reed",
    age: 46
  }
}
```
