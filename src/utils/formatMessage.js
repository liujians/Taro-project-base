export default function(key) {
  let $const;
  if (process.env.APP_TYPE === 'project1') {
    $const = require('../locales/project1');
  } else {
    $const = require('../locales/project2');
  }
  console.log($const.default[key]);
  return $const.default[key];
}
