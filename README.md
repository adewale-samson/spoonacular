# Recipe Search App

This is a React-based web application that allows users to search for recipes, view detailed recipe information, and navigate between different pages. The app utilizes the Material-UI library for styling and `react-router-dom` for routing.

## Features

- Search for recipes by name, ingredients, and nutrients.
- View a list of recipes on the homepage.
- Click on a recipe card to view detailed information.
- Navigate back to the homepage from the recipe details page.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory using the terminal.
3. Install the required dependencies using the following command:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

The app should now be running locally on `http://localhost:3000`.

## Folder Structure

The project follows a structured organization to manage components and pages effectively:

- `src/Components`: Contains reusable components like `Card` that are used throughout the app.
- `src/Pages/Homepage.js`: Displays the homepage where users can search for recipes and see a list of recipe cards.
- `src/Pages/Recipe.js`: Displays detailed information about a selected recipe, including image, title, content, ingredients, instructions, and nutrient information.
- `src/theme.js`: Defines the Material-UI theme for consistent styling.

## Routing

The app uses the `react-router-dom` library to manage routing:

- `/`: The homepage where users can search for recipes and see a list of recipe cards.
- `/recipe`: The recipe details page where users can view detailed information about a selected recipe.

## Usage

1. Open the app in your web browser by navigating to `http://localhost:3000` (if it's not already open).

2. **Homepage:**
   - Enter search criteria in the search bar to search for recipes.
   - Click on a recipe card to view its detailed information.

3. **Recipe Details Page:**
   - On the recipe details page, you can see the image, title, content, ingredients, instructions, and nutrient information for the selected recipe.
   - Click the "Back to homepage" button to navigate back to the homepage.

## Contributing

Contributions are welcome! If you find any bugs or want to add features, feel free to create issues or pull requests in the repository.

## License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy exploring and experimenting with this Recipe Search App! If you have any questions or suggestions, please don't hesitate to contact us.