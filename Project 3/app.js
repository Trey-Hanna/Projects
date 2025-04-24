var main = function() {
  var volume;
  var state;

  // The PLAY button
  $('#play').click(function() {
    $('#message').text("Playing track");
    $('#player').trigger("play");
  });

  // The PAUSE button
  $('#pause').click(function() {
    $('#message').text("Track paused");
    $('#player').trigger("pause");
  });

  // The STOP button
  $('#stop').click(function() {
    $('#player').trigger("pause"); // Pause the music
    $('#player').prop('currentTime', 0); // Reset the current time to the beginning
    $('#message').text("Track stopped");
  });

  // The MUTE button
  $('#mute').click(function() {
    $('#player').prop('muted', true);
    $('#message').text("Track muted");
  });

  // The UNMUTE button
  $('#unmute').click(function() {
    $('#player').prop('muted', false);
    $('#message').text("Track unmuted");
  });

  // The VOL UP button
  $('#volumeUp').click(function() {
    var currentVolume = $('#player').prop('volume');
    if (currentVolume < 1) {
      $('#player').prop('volume', currentVolume + 0.1);
    }
  });

  // The VOL DOWN button
  $('#volumeDown').click(function() {
    var currentVolume = $('#player').prop('volume');
    if (currentVolume > 0) {
      $('#player').prop('volume', currentVolume - 0.1);
    }
  });
};

$(document).ready(main);