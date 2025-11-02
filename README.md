# Appscrip Task - Product Listing Page

A React-based Product Listing Page (PLP) application that displays a collection of products fetched from the Fake Store API. This app allows users to browse products, apply filters, sort by various criteria, and search for specific items.

### Live Project

- **Link**: https://appscrip-task-psaiprathap.netlify.app

## Features

- **Product Display**: Displays products in a responsive grid layout with images, titles, prices, and ratings.
- **Category Filtering**: Filter products by category (e.g., electronics, jewelry, men's clothing, women's clothing).
- **Sorting Options**:
  - Sort by price: Low to High or High to Low.
  - Sort by rating: High to Low or Low to High.
- **Search Functionality**: Search products by title.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Real-time Updates**: Filters and sorts update the product list dynamically.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **React Icons**: For icons used in the UI components.
- **Fake Store API**: External API for fetching product data (https://fakestoreapi.com/products).
- **CSS**: For styling the application.
- **Create React App**: For project setup and build tools.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory:
   ```
   cd appscrip-task-psaiprathap
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server:

```
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### Building for Production

To build the app for production:

```
npm run build
```

This builds the app to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### Running Tests

To launch the test runner:

```
npm test
```

This runs the test suite in interactive watch mode.

## Project Structure

- `src/App.js`: Main application component handling state and API calls.
- `src/components/`: Contains reusable components like Header, Filters, ProductGrid, ProductCard, and Footer.
- `public/`: Static assets and HTML template.

## API

The application fetches product data from [Fake Store API](https://fakestoreapi.com/products). No authentication is required for this public API.

## Contributing

Feel free to fork this repository and submit pull requests for improvements or bug fixes.

