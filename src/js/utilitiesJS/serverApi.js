import axios from 'axios';
import Notiflix from 'notiflix';

const KEY = `7770a554235a470dd8487676c4d97407`;

class ServerApi {
  #page = 1;
  total_results = 200;
  request_count = 1;

  KEY = `api_key=7770a554235a470dd8487676c4d97407`;
  baseUrl = `https://api.themoviedb.org/3`;
  baseSrc = `https://image.tmdb.org/t/p/w500`;

  async getPopularMovie() {
    const data = await axios({
      url: `${this.baseUrl}/trending/movie/week?${this.KEY}&page=${this.#page}`,
    });

    return await data.data;
  }

  async getMovieOnDemand(query) {
    const data = await axios({
      url: `${this.baseUrl}/search/movie?${this.KEY}&language=en-US&page=${
        this.#page
      }&include_adult=false&query=${query}`,
    });
    if (this.request_count === 1 && data.data.results.length) {
      Notiflix.Notify.success('We found movies', {
        position: 'center-top',
        fontFamily: 'inherit',
        borderRadius: '25px',
        clickToClose: true,
      });
    }

    return await data.data;
  }

  async getDetailsMovie(id) {
    const data = await axios({
      url: `${this.baseUrl}/movie/${id}?${this.KEY}&language=en-US`,
    });

    return await data.data;
  }

  async getTrailer(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=7770a554235a470dd8487676c4d97407&language=en-US`
    );
    const data = response.json();
    return data;
  }
  // async getTrailer(id) {
  //   const data = await axios({
  //     url: `${this.baseUrl}/movie/${id}?${this.KEY}&language=en-US`,
  //   });
  //   return await data;
  // }

  setPage(page) {
    this.#page = page;
  }

  setTotalResults(total) {
    this.total_results = total;
  }

  incrementRequestCount() {
    this.request_count++;
  }

  setRequestCount() {
    this.request_count = 1;
  }
}

export const serverApi = new ServerApi();
