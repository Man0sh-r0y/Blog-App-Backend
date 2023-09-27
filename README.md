# Blog App Backend

This is the backend for a Blog App that provides various functionalities for managing blog posts. You can interact with this project using Postman or any API client of your choice. If the default port (`8000`) isn't working, you can try port `5000`.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- MongoDB installed and running.

## Installation

**Step 1**: Install Dependencies for the project:
```bash
npm install
```

**Step 2**: To Run the Project
```bash
npm run dev
```

## Routes

1. **Create Post:** Create a new blog post.

    - Method: POST
    - URL: `http://localhost:8000/api/v1/createPost`

    Example request body:

    ```json
    {
        "user": "Ram Sen",
        "title": "Post Title",
        "body": "Post Content (Body)"
    }
    ```

2. **Get All Posts:** Retrieve a list of all blog posts.

    - Method: GET
    - URL: `http://localhost:8000/api/v1/getPosts`

3. **Get Post by ID:** Retrieve a specific blog post by its ID.

    - Method: GET
    - URL: `http://localhost:8000/api/v1/getPostById/:id`
     (replace `:id` with a valid post ID)

4. **Edit Post:** Update an existing blog post.

    - Method: PUT
    - URL: `http://localhost:8000/api/v1/editPost`

    Example request body:

    ```json
    {
        "postID": "Enter the Post ID here",
        "title": "Update the post title",
        "body": "Update the post content"
    }
    ```

5. **Delete Post:** Delete a blog post.

    - Method: DELETE
    - URL: `http://localhost:8000/api/v1/deletePost`

    Example request body:

    ```json
    {
        "postID": "Enter the Post ID here"
    }
    ```

6. **Like a Post:** Like a specific blog post.

    - Method: POST
    - URL: `http://localhost:8000/api/v1/like`

    Example request body:

    ```json
    {
        "postID": "Enter the Post ID here",
        "user": "Sam Gupta"
    }
    ```

7. **Unlike a Post:** Remove a like from a blog post.

    - Method: POST
    - URL: `http://localhost:8000/api/v1/unlike`

    Example request body:

    ```json
    {
        "postID": "Enter the Post ID here",
        "user": "Sam Gupta"
    }
    ```

8. **Comment on a Post:** Add a comment to a blog post.

    - Method: POST
    - URL: `http://localhost:8000/api/v1/comment`

    Example request body:

    ```json
    {
        "postID": "Enter the Post ID here",
        "user": "Sam Gupta",
        "body": "Thanks for sharing!"
    }
    ```

9. **Edit Comment:** Edit an existing comment on a blog post.

    - Method: PUT
    - URL: `http://localhost:8000/api/v1/editComment`

    Example request body:

    ```json
    {
        "postID": "Enter the Post ID here",
        "user": "Sam Gupta",
        "body": "Great Share!"
    }
    ```

10. **Delete Comment:** Delete a comment from a blog post.

    - Method: DELETE
    - URL: `http://localhost:8000/api/v1/deleteComment`

    Example request body:

    ```json
    {
        "postID": "Enter the Post ID here",
        "user": "Sam Gupta"
    }
    ```

## How to Use

1. Use the provided URLs with the appropriate HTTP methods and request bodies to interact with the blog app backend.

2. Make sure to replace `Enter the Post ID here` with actual post ID when making requests.

3. You can test these routes using Postman or any other API client of your choice.

Enjoy managing your blog posts with this Simple Blog App Backend!
