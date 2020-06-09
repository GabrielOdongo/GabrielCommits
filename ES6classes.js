class Movies {
  constructor(name, releaseYear, genre, ratings) {
    this.name = name;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.ratings = ratings;
  }
  watch() {
    console.log("Watch Online");
  }
}
let rocky = new Movies("Rocky", 1976, ["Drama", "Sports"], {
  IMDb: "8.1 / 10",
  Metacritic: "70%"
});
console.log(rocky);
// Movies {
//     name: 'Rocky',
//         releaseYear: 1976,
//             genre: ['Drama', 'Sports'],
//                 ratings: { IMDb: '8.1 / 10', Metacritic: '70%' }
// }

rocky.watch();
//Watch Online