var Song = require('./song');

var Playlist = function(){
  this.songs = [];
};
Playlist.prototype.addSong = function(song){
  this.songs.push(song);
}
Playlist.prototype.isEmpty = function () {
  if (this.songs.length === 0){
    return true;
  } else {
    return false
  }
};


Playlist.prototype.forNumber = function () {

};

module.exports = Playlist;
