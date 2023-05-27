# Google Place Autocomplete React App

This is a simple single-page React application that uses Google Place Autocomplete to find places and display them on a map. It incorporates Redux for state management, Material-UI for the user interface, and follows best practices for code organization and scalability.

## Features

- Autocomplete search input that fetches place suggestions from the Google Places API.
- Display of search results on list.
- Redux integration for state management.
- Material-UI components for a visually appealing user interface.
- Redux-Observable Epics for handling asynchronous actions.
- Higher-Order Components (HOCs) for additional functionality and logging.
- Functional programming principles for improved code maintainability.

## Installation

1. Clone the repository:

   ```shell
   git clone <repository-url>

2. Install dependencies:

   ```shell
   npm install

3. Obtain a Google Places API key. Replace 'YOUR_API_KEY' in src/epics/autocompleteEpic.js with your actual API key.

4. Start the development server:

    ```shell
   npm start

5. Open the application in your browser:

    ```shell
    http://localhost:3000

## Folder Structure

- src/components: Contains the main components of the application.
- src/epics: Includes the Redux-Observable epics for handling asynchronous actions.
- src/hoc: Contains Higher-Order Components for additional functionality.
- src/redux: Holds the Redux store, actions, and reducers for state management.
- src/index.js: Entry point of the application.

## Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

Feel free to customize the content of the Readme.md file based on your project's specific details and requirements.



