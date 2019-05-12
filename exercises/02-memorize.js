/**
 * TODO: write a function memorizeCreator, which:
 *  1. creates a function - memorize;
 *  2. memorize takes one primitive argument;
 *  3. memorize returns array of all arguments which it has been called since memorize creation.
 *
 *
 * usage example:
 *
 * const memorize = memorizeCreator();
 *
 * memorize(1); // [1];
 * memorize(2); // [1, 2];
 * memorize(null); // [1, 2, null];
 * memorize('4'); // [1, 2, null, '4'];
 * memorize('paula'); // [1, 2, null, '4', 'paula'];
 */

function memorizeCreator(){

}

module.exports = memorizeCreator;

