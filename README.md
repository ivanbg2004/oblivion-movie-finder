# ODH Movie Finder

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/didaquis/search-movies-react/graphs/commit-activity)

A web application powered by Python and Flask to search for movies using the TMDb API. Brought to you by Oblivion Development & Hosting.

## Table of Contents

-   [About](#about)
-   [Disclaimer](#disclaimer)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Setup and Installation](#setup-and-installation)
-   [Usage](#usage)
-   [Configuration](#configuration)
-   [Error Handling](#error-handling)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)

## About

ODH Movie Finder is a user-friendly web application that allows you to search for movies and retrieve information such as titles, release dates, posters, and more. It leverages the TMDb API to provide accurate and up-to-date movie data. Developed and maintained by [Oblivion Development & Hosting](https://odh.ivan-vcard.xyz) as a showcase of our web development and API integration expertise.

## Disclaimer

This project is intended solely as a title research tool. It does not provide access to, or distribution of, any copyrighted video content. Oblivion Movie Finder is not affiliated with or intended to be a platform for illegal content distribution, and will not function in the same manner as services like Cuevana3 or similar platforms. Our goal is to provide a helpful resource for finding movie information, while fully respecting copyright laws and regulations.

## Features

-   **Movie Search:**  Quickly search for movies by title.
-   **Detailed Information:** Retrieve essential movie details, including release year and poster.
-   **User-Friendly Interface:** A clean and intuitive design for a seamless search experience.
-   **Responsive Design:** Works well on various screen sizes.
-   **Robust Error Handling:** Clear error messages for common issues.
-   **Loading Indicator:** Visual feedback during API requests.

## Technologies Used

-   **Backend:**
    -   Python 3.x
    -   Flask: A micro web framework for Python.
    -   requests:  An elegant and simple HTTP library for Python.
    -   python-dotenv:  For loading environment variables.
-   **Frontend:**
    -   HTML5
    -   CSS3
    -   JavaScript (Vanilla)
-   **API:**
    -   [TMDb API](https://www.themoviedb.org/documentation/api):  The Movie Database API.

## Setup and Installation

Follow these steps to set up and run the ODH Movie Finder on your local machine:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/ivanbg2004/oblivion-movie-finder.git
    cd oblivion-movie-finder
    ```

2.  **Install Python Dependencies:**

    It's highly recommended to use a virtual environment. If you haven't already, create and activate one:

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Linux/macOS
    # venv\Scripts\activate  # For Windows (PowerShell: .\venv\Scripts\Activate.ps1 - you know it's verbose, oh come on... Get Linux now!)
    ```

    **Path Separators:** (For those on... less fortunate operating systems) If you encounter issues with file paths, ensure you're using forward slashes `/` rather than backslashes `\` in your configuration files. Python usually handles this automatically, but just in case.

    Then, install the required packages:

    ```bash
    pip install -r requirements.txt
    ```

4.  **Configure Environment Variables:**

    -   Create a `.env` file in the root directory of the project.
    -   Add your TMDb API key to the `.env` file:

        ```
        TMDB_API_KEY=YOUR_TMDB_API_KEY
        ```

        Replace `YOUR_TMDB_API_KEY` with your actual TMDb API key.

## Usage

1.  **Run the Application:**

    ```bash
    python app.py
    ```

2.  **Access the Application:**

    Open your web browser and navigate to `http://127.0.0.1:5000` (or the address shown in the console).

3.  **Search for Movies:**

    Enter a movie title in the search bar and click the "Search" button. The search results will be displayed below the search area.

## Configuration

-   **TMDb API Key:** The TMDb API key is configured through the `.env` file. Ensure it's correctly set up for the application to function.
-   **Logging Level:** You can adjust the logging level in `app.py` by changing the `app.logger.setLevel()` line. For example:

    ```python
    app.logger.setLevel(logging.DEBUG) # For more detailed logging
    ```

## Error Handling

The application includes error handling for common issues, such as:

-   **Missing Search Query:** Displays an alert if the search bar is empty.
-   **API Errors:** Handles errors from the TMDb API (e.g., network errors, invalid API key... or perhaps your firewall is overzealous?).
-   **No Results Found:** Informs the user if no movies match the search criteria.

## Contributing

Contributions are welcome! If you find a bug or have an idea for a new feature, please open an issue or submit a pull request.

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Submit a pull request to the main branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Oblivion Development & Hosting: [https://odh.ivan-vcard.xyz](https://odh.ivan-vcard.xyz)

---

Developed with ❤️ by [@ivanbg_2004](https://github.com/ivanbg2004) and remastered by [Oblivion Development & Hosting](https://odh.ivan-vcard.xyz) 6 years later.
Oblivion Development & Hosting is a Linux-first company, but we reluctantly support other platforms.