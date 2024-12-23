# Book_Review_Platform
The platform allows users to register, view, add, edit, and delete books, as well as write and manage reviews for those books. Users can search for books, see the latest reviews, and rate books based on their personal experiences.

Features
1) User Registration and Authentication: Users can sign up, log in, and manage their accounts.
2) CRUD Operations for Books: Users can add new books, view, edit, and delete existing books.
3) Review System: Each book has a review section where users can add, edit, and delete reviews.
4) Book Rating: Users can rate books from 1-5 stars.
5) Search and Filter: Users can search for books by title, author, genre, or rating.

# Backend: .NET Core (C#)
1) Technologies:
    Framework: ASP.NET 
    CoreDatabase: MySQL
    Authentication: JWT (JSON Web Tokens) for user authentication
    ORM: Entity Framework Core (for database interaction)
2) Backend API Endpoints:
    POST /api/auth/register: Register a new user
    POST /api/auth/login: Login a user and generate a JWT token
    GET /api/books: Get all books
    POST /api/books: Add a new book
    GET /api/books/{id}: Get book details by ID
    PUT /api/books/{id}: Edit book details
    DELETE /api/books/{id}: Delete a book
    POST /api/reviews: Add a review for a book
    GET /api/reviews/{bookId}: Get all reviews for a specific book
    PUT /api/reviews/{id}: Edit a review
    DELETE /api/reviews/{id}: Delete a review

# Frontend: React
1) Technologies:
    Frontend Framework: React
    State Management: React Context or Redux for managing user state and book data
    UI Library: Material-UI or Bootstrap for styling
    HTTP Requests: Axios for making API requests
    
2) Frontend Components:
    App: Main component that holds routing and context
    BookList: Displays all books in a list
    BookDetails: Displays detailed information about a book, with an option to add a review
    ReviewForm: Form to add or edit reviews
    Auth: Components for user login and registration

# Database: MySQL

# Testing Plan
1) Unit Testing:
    Test individual components, services, and API endpoints to ensure each function works correctly in isolation.
    Use xUnit for backend testing in .NET.
    Use Jest for frontend testing (e.g., testing React components).

2) Integration Testing:
    Test the full flow of data from frontend to backend, ensuring CRUD operations are functioning correctly. This should also include interactions with the database.
    Use Postman or Swagger for manual API testing.
    Use Cypress for end-to-end testing of the frontend.
3) UI Testing:
    Use React Testing Library for testing the UI components in React.
    Test form validation, correct rendering of lists, and error handling.
4) Performance Testing:
    Use JMeter or LoadRunner to simulate multiple users interacting with the application and evaluate the performance of the backend.
5) Security Testing:
    Test for potential security vulnerabilities such as SQL Injection, XSS (Cross-Site Scripting), and CSRF (Cross-Site Request Forgery).
    Use OWASP ZAP for automated security testing.

