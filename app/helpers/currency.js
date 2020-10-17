/**
 * Function base Helper
 */
// import { helper } from '@ember/component/helper';
// export default helper(function currency(params, hash = {}) {
//   // {{currency 25 => 25.00}}
//   const [number] = params;
//   const {
//     sign = '$'  //set default as $ if hash is empty
//   } = hash;
//   const dollars = Math.floor(number);
//   let cents = Math.floor(number * 100 % 100);

//   if (cents.toString().length === 1) {
//     cents = '0' + cents;
//   }
//   return `${sign}${dollars}.${cents}`;
// });


/**
 * Class base Helper
 */
import Helper from '@ember/component/helper';

export default class currency extends Helper {
  compute(params, hash = {}) {
    // {{currency 25 => 25.00}}
    const [number] = params;
    const {
      sign = '$'  //set default as $ if hash is empty
    } = hash;
    const dollars = Math.floor(number);
    let cents = Math.floor(number * 100 % 100);
  
    if (cents.toString().length === 1) {
      cents = '0' + cents;
    }
    return `${sign}${dollars}.${cents}`;
  }
}