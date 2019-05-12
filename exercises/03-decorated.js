/**
 * TODO: decorate function greeter - YOU CANT CHANGE LINES 10 - 12;
 *
 * usage example:
 *
 * greeter('Jarek Mazur'); // hello there, Jarek Mazur;
 * greeter('Artem Ovcharenko'); // gtfo;
 */

function greeter(name){
  return `hello there, ${name}`;
}

const old = greeter;
greeter = function (name) {
  if(name === 'Artem Ovcharenko') return 'gtfo';
  return old.apply(this, arguments);
}

module.exports = greeter;

