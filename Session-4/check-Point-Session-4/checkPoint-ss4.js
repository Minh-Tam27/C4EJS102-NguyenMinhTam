console.log('Ex 1:');
let movie = {
    title: 'Hoa Mộc Lan',
    year: 1998,
    rate: 8.5,
};
console.log(movie);
console.log('Ex 2:');
console.log('- Log all of property of movie:');
console.log('C1:');
console.log(movie.title);
console.log(movie.year);
console.log(movie.rate);
console.log('C2:');
console.log(movie['title']);
console.log(movie['year']);
console.log(movie['rate']);
console.log('- When log a non-existent property of the movie, ReferenceError in JavaScrip will be gotten');
console.log('Ex 3:');
let x = prompt('What you want to know?');
if (x == 'title')
{
    alert(movie.title);
}
else if (x == 'year')
{
    alert(movie.year);
}
else if (x == 'rate')
{
    alert(movie.rate);
}
else
{
    alert(x + 'is does not exist in our data');
}
console.log('Ex 4.1:');
movie.rate = 8.7;
console.log(movie.rate);
console.log('Ex 4.2');
movie.rate += 0.5;
console.log(movie.rate);
console.log('Ex 5:');
let y = prompt('What you want to update?');
if (y == 'title')
{
let z = prompt('What is the update?');
movie.title = z;
}
else if (y == 'year')
{
let z = prompt('What is the update?');
movie.year = z;
}
else if (y == 'rate')
{
let z = prompt('What is the update?');
movie.rate = z;
}
else {
    alert ('Please try again');
}
console.log(movie);
console.log('Ex 6:');
let i = prompt('What you want to upgrade?');
if (i !== 'title' || i !== 'year' || i !== 'rate')
{
    alert(i + ' does not exist in our data, we will add new');
    let n = prompt('Enter the new data');
    movie.i = n;
}
console.log(movie);
console.log('Ex 7.1:');
let movies = new Object();
movies.title = ['Kingsman', 'The kissing booth', 'A simple favor'];
movies.year = [2014, 2018, 2018];
movies.rate = [7, 9.3, 5.6];
console.log(movies);
console.log('Ex 7.2:');
console.log(movies.title[0]);
console.log(movies.year[0]);
console.log(movies.rate[0]);
console.log('Ex 7.3:');
console.log(movies.title[2]);
console.log('Ex 7.4:');
for (let i=0; i<movies.length; i++)
{
    console.log(movies[i]);
}
console.log('Ex 7.5:');
for (let i=0; i<movies.length; i++)
{
    console.log(movies.title[i]);
    console.log(movies.year[i]);
    console.log(movies.rate[i]);
    console.log('========================');
}
console.log('Ex 7.6:');
for (let i=0; i<movies.length; i++)
{
    movies.rate[i] += 0.7;
    console.log(movies[i]);
}
console.log('Ex 8.1:');
{
let movie = {
    title: 'Kingsman',
    year: 2014,
    rate: 7,
    characters: ['Merlin', 'Valentine', 'Galahad']
}
movie.cast = ['Mark Strong', 'Samuel.L.Jackson','Colin Firth'];
console.log('Ex 8.2:')
console.log(movie.title);
console.log(movie.year);
console.log(movie.rate);
console.log(movie.characters);
console.log(movie.cast);
}
console.log('Ex 9.1:');
{
let movies = new Object();
movies.title[0] = 'Mr and Mrs Smith';
movies.year[0] = 2005;
movies.rate[0] = 9;
movies.characters[0] = ['Jane Smith', 'John Smith'];
movies.cast[0] = ['Angelina Jolie', 'Brad Pitt'];
movies.title[1] = '21 Jump Street';
movies.year[1] = 2012;
movies.rate[1] = 9.5;
movies.characters[1] = ['Schmidt', 'Jenko', 'Dickson'];
movies.cast[1] = ['Jonah Hill', 'Channing Tatum', 'Ice Cube'];
movies.title[2] = 'Searching';
movies.year[2] = 2018;
movies.rate[2] = 10;
movies.characters[2] = ['David Kim', 'Margot', 'Detective Vick'];
movies.cast[2] = ['John Cho', 'Michelle La', 'Debra Messing'];
console.log('Ex 9.2:');
for(let i=0; i<movies.length; i++)
{
console.log(movies.title[i]);
console.log(movies.year[i]);
console.log(movies.rate[i]);
console.log(movies.characters[i]);
console.log(movies.cast[i]);
}
}




