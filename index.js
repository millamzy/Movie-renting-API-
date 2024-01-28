class Movie {
    constructor(title, director, genre, price) {
      this.title = title;
      this.director=director;
      this.genre = genre;
      this.price = price;
      this.isAvailable = true;
    }
  }
  
  class EmptyStore {
    constructor() {
      this.movies = [];
    }
  
    add(title, director, genre, price) {
      const newAddMovie= new Movie(title,director, genre, price);
      this.movies.push(newAddMovie);
    }
  
    rent(title) {
      const movie = this.movies.find(movie => movie.title === title);
      if (movie && movie.isAvailable) {
        movie.isAvailable = false;
        console.log(`the movie has been rented : ${movie.title}`);
      } else {
        console.log('Movie not available ');
      }
    }
  
    return(title) {
      const movie = this.movies.find(movie => movie.title === title);
      if (movie && !movie.isAvailable) {
        movie.isAvailable = true;
        console.log(`You have returned the movie: ${movie.title}`);
      } else {
        console.log('Invalid movie title or movie is already available');
      }
    }
  }
  
  // Example usage
  const myMovieStore = new EmptyStore();
  myMovieStore.add('The  Superman', 'Drama', 10);
  myMovieStore.add('killer', 'Sci-Fi', 12);
  
  myMovieStore.rent('The  Superman');
  myMovieStore.rent('The Matrix');
  myMovieStore.return('The  Superman');
  