import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjQ0MzdiOWI3MTE0MDM5ZmE0ZDY1YTkyZmUzM2VjOSIsInN1YiI6IjY1ZTFhMmY5Zjg1OTU4MDE4NjUxMDRiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IBzsbNqWNP54X6SATalfUWi_yZLp5dI7GH4hqS4vK0E'



const headers = {
    Authorization: ' bearer ' + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params

        })
        return data;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}
