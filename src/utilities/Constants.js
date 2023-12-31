export const MENU = [
    { name: "Home", path: "/", current: false },
    { name: "Catalog", path: "/catalog", current: false }
]

export const TMDB_API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmM0Mzc3OTNlNWZkMjBlYjFkOTk4MWZjOTZlMjYxMSIsInN1YiI6IjY0ZGNkZWFmZDEwMGI2MTRiMGE0OTlkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8_jJRgBvXgvp7cWeAdJShTmQO5Td-vtfITZYGTPzIrM"

export const TMDB_FETCH_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TMDB_API_KEY}`
    }
};

export const TMDB_RANKED_API_URL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
export const TMDB_SEARCH_API_URL = "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query="
export const TMDB_DETAILED_API_URL = "https://api.themoviedb.org/3/movie/"

export const TMDB_IMAGE_URL_SMALL = "https://image.tmdb.org/t/p/w200"
export const TMDB_IMAGE_URL_BIG = "https://image.tmdb.org/t/p/w500"

export const GIPHY_API_KEY = "TfJcQtMMzlfbT4dz3AVffs9A9LWNs4DT"
export const GIPHY_SEARCH_URL = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=`

export const SEARCH_DELAY = 600
export const SEARCH_MIN_LENGTH = 2

export const MAX_MOVIES_ON_PAGE = 14

export const MOVIE_PRICE = 1

export const MESSAGES = {
    EMPTY_SEARCH_RESULT: "Your search did not have any mathes. Try different keywords."
}