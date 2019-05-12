 /**
 * TODO: create function getSingletonCreator which:
 *  1. returns function which returns another function singletonCreator;
 *  2. singletonCreator - every called time should return same object.

 * usage example:
 * const singletonCreator = getSingletonCreator();
 * const firstObj = singletonCreator(); // {};
 * const secondObj = singletonCreator(); // {};

  * firstObj === secondObj; // true;
 */

function getSingletonCreator(){
   let instance;
   return () => {
     if (!instance) {
       instance = {};
     }

     return instance;
   }
}

module.exports = getSingletonCreator;

