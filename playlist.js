var Song = require('./song');

var Playlist = function(){
  this.songs = [];
  this.songNameArray = [];
};
Playlist.prototype.addSong = function(song){
  this.songs.push(song);
}

Playlist.prototype.removeSong = function(song){
  var index = this.findSong(song);
  if(index !== false){
    this.songs.splice(index,1);
  }
}

Playlist.prototype.findSong = function(song){
  for (var i = 0; i < this.songs.length; i++) {
    if(this.songs[i].name === song.name){
      return i;
    }
  }
  return false;
}
Playlist.prototype.isEmpty = function () {
  if (this.songs.length === 0){
    return true;
  } else {
    return false
  }
};
Playlist.prototype.songNames = function () {
  this.songNameArray = [];
  for (var i = 0; i < this.songs.length; i++) {
    this.songNameArray.push(this.songs[i].name);
  }
  return this.songNameArray;
}

Playlist.prototype.forNumber = function () {

};

module.exports = Playlist;
