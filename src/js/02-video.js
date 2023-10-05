import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
let currentTime = 0;
const player = new Player('vimeo-player', {
  id: 236203659,
  width: 640,
});
player.on(
  'timeupdate',
  throttle(function getTime(e) {
    currentTime = e.seconds;
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(currentTime)
    );
    console.log(currentTime);
  }, 1000)
);
player
  .setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

console.log(player);
