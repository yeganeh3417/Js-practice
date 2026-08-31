const movies = [
    {
        id: 1,
        title: "Inception",
        genre: "Sci-Fi",
        year: 2010,
        rating: 8.8,
        price: 5,
        duration: 148,
    },
    {
        id: 2,
        title: "The Dark Knight",
        genre: "Action",
        year: 2008,
        rating: 9.0,
        price: 4,
        duration: 152,
    },
    {
        id: 3,
        title: "Interstellar",
        genre: "Sci-Fi",
        year: 2014,
        rating: 8.7,
        price: 6,
        duration: 169,
    },
    {
        id: 4,
        title: "The Godfather",
        genre: "Drama",
        year: 1972,
        rating: 9.2,
        price: 3,
        duration: 175,
    },
    {
        id: 5,
        title: "Parasite",
        genre: "Thriller",
        year: 2019,
        rating: 8.5,
        price: 5,
        duration: 132,
    },
    {
        id: 6,
        title: "Avengers: Endgame",
        genre: "Action",
        year: 2019,
        rating: 8.4,
        price: 7,
        duration: 181,
    },
    {
        id: 7,
        title: "The Matrix",
        genre: "Sci-Fi",
        year: 1999,
        rating: 8.7,
        price: 4,
        duration: 136,
    },
    {
        id: 8,
        title: "Pulp Fiction",
        genre: "Crime",
        year: 1994,
        rating: 8.9,
        price: 5,
        duration: 154,
    },
    {
        id: 9,
        title: "Forrest Gump",
        genre: "Drama",
        year: 1994,
        rating: 8.8,
        price: 4,
        duration: 142,
    },
    {
        id: 10,
        title: "The Shawshank Redemption",
        genre: "Drama",
        year: 1994,
        rating: 9.3,
        price: 3,
        duration: 142,
    },
    {
        id: 11,
        title: "Fight Club",
        genre: "Drama",
        year: 1999,
        rating: 8.8,
        price: 5,
        duration: 139,
    },
    {
        id: 12,
        title: "Gladiator",
        genre: "Action",
        year: 2000,
        rating: 8.5,
        price: 5,
        duration: 155,
    },
    {
        id: 13,
        title: "Titanic",
        genre: "Romance",
        year: 1997,
        rating: 7.9,
        price: 4,
        duration: 194,
    },
    {
        id: 14,
        title: "The Lord of the Rings",
        genre: "Fantasy",
        year: 2001,
        rating: 8.8,
        price: 6,
        duration: 178,
    },
    {
        id: 15,
        title: "Joker",
        genre: "Thriller",
        year: 2019,
        rating: 8.4,
        price: 6,
        duration: 122,
    },
    {
        id: 16,
        title: "Whiplash",
        genre: "Drama",
        year: 2014,
        rating: 8.5,
        price: 4,
        duration: 106,
    },
    {
        id: 17,
        title: "The Prestige",
        genre: "Mystery",
        year: 2006,
        rating: 8.5,
        price: 5,
        duration: 130,
    },
    {
        id: 18,
        title: "Django Unchained",
        genre: "Western",
        year: 2012,
        rating: 8.5,
        price: 6,
        duration: 165,
    },
    {
        id: 19,
        title: "The Wolf of Wall Street",
        genre: "Comedy",
        year: 2013,
        rating: 8.2,
        price: 5,
        duration: 180,
    },
    {
        id: 20,
        title: "The Green Mile",
        genre: "Drama",
        year: 1999,
        rating: 8.6,
        price: 4,
        duration: 189,
    },
    {
        id: 21,
        title: "Goodfellas",
        genre: "Crime",
        year: 1990,
        rating: 8.7,
        price: 4,
        duration: 146,
    },
    {
        id: 22,
        title: "The Departed",
        genre: "Crime",
        year: 2006,
        rating: 8.5,
        price: 5,
        duration: 151,
    },
    {
        id: 23,
        title: "Saving Private Ryan",
        genre: "War",
        year: 1998,
        rating: 8.6,
        price: 5,
        duration: 169,
    },
    {
        id: 24,
        title: "The Silence of the Lambs",
        genre: "Thriller",
        year: 1991,
        rating: 8.6,
        price: 4,
        duration: 118,
    },
    {
        id: 25,
        title: "The Lion King",
        genre: "Animation",
        year: 1994,
        rating: 8.5,
        price: 3,
        duration: 88,
    },
    {
        id: 26,
        title: "Toy Story",
        genre: "Animation",
        year: 1995,
        rating: 8.3,
        price: 3,
        duration: 81,
    },
    {
        id: 27,
        title: "Finding Nemo",
        genre: "Animation",
        year: 2003,
        rating: 8.2,
        price: 4,
        duration: 100,
    },
    {
        id: 28,
        title: "The Incredibles",
        genre: "Animation",
        year: 2004,
        rating: 8.0,
        price: 4,
        duration: 115,
    },
    {
        id: 29,
        title: "Spider-Man: No Way Home",
        genre: "Action",
        year: 2021,
        rating: 8.2,
        price: 7,
        duration: 148,
    },
    {
        id: 30,
        title: "Iron Man",
        genre: "Action",
        year: 2008,
        rating: 7.9,
        price: 5,
        duration: 126,
    },
    {
        id: 31,
        title: "Black Panther",
        genre: "Action",
        year: 2018,
        rating: 7.3,
        price: 6,
        duration: 134,
    },
    {
        id: 32,
        title: "Guardians of the Galaxy",
        genre: "Action",
        year: 2014,
        rating: 8.0,
        price: 5,
        duration: 121,
    },
    {
        id: 33,
        title: "Jurassic Park",
        genre: "Adventure",
        year: 1993,
        rating: 8.2,
        price: 4,
        duration: 127,
    },
    {
        id: 34,
        title: "Back to the Future",
        genre: "Adventure",
        year: 1985,
        rating: 8.5,
        price: 4,
        duration: 116,
    },
    {
        id: 35,
        title: "Indiana Jones",
        genre: "Adventure",
        year: 1981,
        rating: 8.4,
        price: 4,
        duration: 115,
    },
    {
        id: 36,
        title: "The Truman Show",
        genre: "Comedy",
        year: 1998,
        rating: 8.2,
        price: 4,
        duration: 103,
    },
    {
        id: 37,
        title: "La La Land",
        genre: "Musical",
        year: 2016,
        rating: 8.0,
        price: 5,
        duration: 128,
    },
    {
        id: 38,
        title: "The Grand Budapest Hotel",
        genre: "Comedy",
        year: 2014,
        rating: 8.1,
        price: 5,
        duration: 99,
    },
    {
        id: 39,
        title: "Mad Max: Fury Road",
        genre: "Action",
        year: 2015,
        rating: 8.1,
        price: 6,
        duration: 120,
    },
    {
        id: 40,
        title: "A Beautiful Mind",
        genre: "Drama",
        year: 2001,
        rating: 8.2,
        price: 4,
        duration: 135,
    },
    {
        id: 41,
        title: "The Social Network",
        genre: "Drama",
        year: 2010,
        rating: 7.8,
        price: 5,
        duration: 120,
    },
    {
        id: 42,
        title: "Shutter Island",
        genre: "Mystery",
        year: 2010,
        rating: 8.2,
        price: 5,
        duration: 138,
    },
    {
        id: 43,
        title: "Memento",
        genre: "Mystery",
        year: 2000,
        rating: 8.4,
        price: 4,
        duration: 113,
    },
    {
        id: 44,
        title: "The Revenant",
        genre: "Adventure",
        year: 2015,
        rating: 8.0,
        price: 6,
        duration: 156,
    },
    {
        id: 45,
        title: "Bohemian Rhapsody",
        genre: "Biography",
        year: 2018,
        rating: 7.9,
        price: 5,
        duration: 134,
    },
    {
        id: 46,
        title: "Oppenheimer",
        genre: "Biography",
        year: 2023,
        rating: 8.6,
        price: 8,
        duration: 180,
    },
    {
        id: 47,
        title: "Barbie",
        genre: "Comedy",
        year: 2023,
        rating: 6.8,
        price: 7,
        duration: 114,
    },
    {
        id: 48,
        title: "Dune",
        genre: "Sci-Fi",
        year: 2021,
        rating: 8.0,
        price: 7,
        duration: 155,
    },
    {
        id: 49,
        title: "Top Gun: Maverick",
        genre: "Action",
        year: 2022,
        rating: 8.2,
        price: 7,
        duration: 130,
    },
    {
        id: 50,
        title: "Everything Everywhere All at Once",
        genre: "Sci-Fi",
        year: 2022,
        rating: 7.8,
        price: 6,
        duration: 139,
    },
];

// const titleYear = movies.map((movie) => {
//     return movie.title + " - " + movie.year;
// });
// console.log(titleYear);


// const sortedByPrice = [...movies].sort((a, b) => a.price - b.price);
// const cheapest = sortedByPrice[0];
// const mostExpensive = sortedByPrice[sortedByPrice.length - 1];
// console.log(cheapest.title, mostExpensive.title);


// const interstellar = movies.find((movie) => movie.title === "Interstellar");
// console.log(interstellar.year);


// const incredibles = movies.find((movie) => movie.title === "The Incredibles");
// console.log(incredibles.duration, incredibles.rating);


// const hasAboveNine = movies.some((movie) => movie.rating > 9);
// console.log(hasAboveNine);


// const hasAfter2025 = movies.some((movie) => movie.year > 2025);
// console.log(hasAfter2025);


// const hasComedy = movies.some((movie) => movie.genre === "Comedy");
// console.log(hasComedy);


// const allUnderTen = movies.every((movie) => movie.price < 10);
// console.log(allUnderTen);


// const genres = movies.map((movie) => movie.genre);
// console.log(genres.includes("Horror"));


// const byRating = [...movies].sort((a, b) => a.rating - b.rating);
// console.log(byRating);


// const after2015 = movies.filter((movie)=> movie.year > 2015);
// console.log(after2015);


// const byRatingThenPrice = [...movies].sort((a, b) => {
//     if (a.rating === b.rating) {
//         return a.price - b.price
//     }
//     return b.rating - a.rating;
// });
// console.log(byRatingThenPrice);


// movies.push({
//     id: 51,
//     title: "Heretic",
//     genre: "Horror",
//     year: 2024,
//     rating: 7.0,
//     price: 5,
//     duration: 111,
// });
// console.log(movies);




const dramaAfter2015 = movies.filter((movie) => {
    return movie.genre === "Drama" && movie.year > 2015 && movie.rating > 7.5
});
console.log(dramaAfter2015);


const longMovies = movies.filter((movie) => movie.duration > 150);
const longTitle = longMovies.map((movie) => movie.title).join(" & ");
console.log(longTitle);


let totalRating = 0;
movies.forEach((movie) => { totalRating += movie.rating });
const averageRating = totalRating / movies.length;
console.log(averageRating);


let mostExpensive = movies[0];
movies.forEach((movie) => {
    if(movie.price > mostExpensive.price) {
        mostExpensive = movie;
    }
});
console.log(mostExpensive.title);


const genreCount = {};
movies.forEach((movie) => {
    if(genreCount[movie.genre]) {
        genreCount[movie.genre]++;
    } else {
        genreCount[movie.genre] = 1;
    }
});
console.log(genreCount);


const highRated = movies.filter((movie) => movie.rating >= 8.5);
const highRatedSorted = [...highRated].sort((a, b) => a.price - b.price);
const highRatedTitles = highRatedSorted.map((movie) => movie.title).join(" & ");
console.log(highRatedTitles);


const hasAction = movies.some((movie) => movie.genre === "Action");
const hasDrama = movies.some((movie) => movie.genre === "Drama");
const hasComedy = movies.some((movie) => movie.genre === "Comedy");
const hasAllThree = hasAction && hasDrama && hasComedy;
console.log(hasAllThree);


const MatrixIndex = movies.findIndex((movie) => movie.title === "The Matrix");
movies.splice(MatrixIndex, 1);
console.log(movies);


const suggested = movies.filter((movie) => {
    return (movie.rating > 9 || movie.price < 6) && movie.duration < 150; 
});  
const suggestedSorted = [...suggested].sort((a, b) => b.rating - a.rating);
const suggestedTitles = suggestedSorted.map((movie) => movie.title).join(" & ");
console.log(suggestedTitles);