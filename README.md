# Bookinative-9000 - React Native Client

The Bookinative-9000 React Native Client is a mobile application built using React Native, serving as a client-side interface for the Bookinator-9000 project. This project is designed to provide users with a seamless experience for accessing and managing books from a list stored in a MongoDB database. The client application allows users to perform basic CRUD operations and also provides random book recommendations.

## Features

The Bookinative-9000 React Native Client would offer the following features:

1. **User Authentication**: Users can sign up, log in, and securely authenticate themselves using their credentials. This ensures that only authorized users can access and manage books.

2. **Book Listing**: Users can view a list of books fetched from the MongoDB database. The list displays relevant information about each book, such as the title, author, and publication date.

3. **Create New Book**: Users can add new books to the database by providing the necessary details, including the title, author, publication date, and any additional information.

4. **Update Book Details**: Users have the ability to update the details of an existing book. They can modify the title, author, publication date, or any other relevant information.

5. **Delete Book**: Users can remove a book from the database, effectively deleting it from the list.

6. **Random Book Recommendations**: The client application provides users with the option to receive random book recommendations from the stored list. Users can explore new books based on their preferences or discover new genres.

7. **Actual ML algorithm that would recommend**: A Tensorflow model connected to a python backend that would take in parameters for the recommendation and spit out a book.

## Features Implemented

- Browsable UI
- API connection established
- Conditional rendering of different screens
- GET API call

## Features yet to be implemented

- Finalised UI for secondary screens
- Formatted Response output on the secondary screens [primary screen renders it]
- ML algorithm that would recommend
- UPDATE and POST API calls


## Installation

To set up the Bookinative-9000 React Native Client on your local machine, please follow these steps:

1. Ensure that you have Node.js and npm (Node Package Manager) installed on your system. You can download them from the official Node.js website: [https://nodejs.org](https://nodejs.org)

2. Clone the repository to your local machine using the following command:

   ```
   git clone https://github.com/your-username/bookinative-9000.git
   ```

3. Navigate to the project directory:

   ```
   cd bookinative-9000
   ```

4. Install the required dependencies by running the following command:

   ```
   npm install
   ```

5. Update the configuration files with your MongoDB database credentials. Look for the configuration files in the project and modify the necessary fields to connect to your database.

6. Start the application by running the following command:

   ```
   npm start
   ```

7. Use the appropriate emulator or connect a physical device to view and interact with the Bookinative-9000 React Native Client.

## Technologies Used

The Bookinative-9000 React Native Client utilizes the following technologies:

- **React Native**: A JavaScript framework for building native mobile applications.
- **Expo**: A set of tools and services for developing and deploying React Native applications.
- **MongoDB**: A NoSQL database used for storing the list of books and related information.
- **Node.js**: A JavaScript runtime that allows executing JavaScript code outside of a web browser.
- **Express**: A minimal and flexible Node.js web application framework used for building the backend API.

## Contributing

Contributions to the Bookinative-9000 React Native Client are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes in your branch.
4. Test your changes thoroughly.
5. Commit your changes and push the branch to your forked repository.
6. Open a pull request and provide a detailed description of your changes.

## Support

If you have any questions, issues, or feature requests, please reach out to the project's repository on GitHub or contact me directly.

Happy reading with Bookinative-9000!