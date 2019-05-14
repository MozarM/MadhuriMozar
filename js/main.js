//  function myFunction(greeting){
// var response = prompt("what is your name?");
// alert(greeting + " .." + response + "!");
// }
// myFunction(`good morning`);
// function add(a,b){
//   return a+b;
// }
// console.log(add(10,30));
// var movies = ['a','b','c'];
// movies.forEach(function(movie){   // with a anonymous funtion()
//   alert(movie);
// });

//movies.forEach( movie => alert(movie)); // with array element

// for(var movie of movies)
// {
//   console.log(movie);
// }
// //console.log(movies.pop('d'));
// console.log(movies);

var movie = {
  title : "test",
  time : "2 pm"
};

console.log(movie.time);
movie.status = "unavailable";

console.log(movie);

var movies = [
  {
    title : "test",
    time : "2 pm",
    status : "unavailable"
  },
  {
    title : "test2",
    time : "4 pm",
    status : "available"
  },
  {
    title : "test3",
    time : "6 pm",
    status : "available"
  }
];

for (var mov of movies){
  if(mov.status == "available"){
    console.log(`the movie : ${mov.title}`);
  }
}
