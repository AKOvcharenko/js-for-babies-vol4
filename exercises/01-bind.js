/**
 * TODO: write a function bind, which:
 *  1. takes two arguments -
 *    first - function for binding
 *    second - defined this
 *  2. creates a new function that, when called, has its this keyword set to the provided value.
 *
 * const marek = {
 *   name: 'marek',
 * };
 *
 * const jarek = {
 *   name: 'jarek',
 * };
 *
 * function fancyFunc() {
 *   return this.name;
 * }
 *
 * usage example:
 *
 * var bindedJarek = bind(fancyFunc, jarek);
 * var bindedMarek = bind(fancyFunc, marek);
 *
 * bindedJarek(); // 'jarek';
 * bindedMarek(); // 'marek';
 */

function bind(func, that){
  return function() {return func.call(that);}
}

module.exports = bind;
