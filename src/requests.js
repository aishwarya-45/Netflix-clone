const api_key = "3ccd054a25ccc756685ace6ed06c5a93";


const requests = {
    fetchPopular : `/movie/popular/?api_key=${api_key}&language=en-US&page=1`,
    fetchNetflixOriginal :`/discover/tv/?api_key=${api_key}&with_networks=213`,
    fetchTopRated : `/movie/top_rated/?api_key=${api_key}&language=en-US`,
    fetchActionMovies : `/discover/movie/?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies : `/discover/movie/?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie/?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie/?api_key=${api_key}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie/?api_key=${api_key}&with_genres=99`,
}

export default requests;