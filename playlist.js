var Song = require('./song');

var Playlist = function(){
  this.songs = [];
  this.queue = [];
  this.currentSong = null;
};
Playlist.prototype.addSong = function(song){
  this.songs.push(song);
}

Playlist.prototype.removeSong = function(song){
  var index = this.find(song);
  if(index !== false){
    this.songs.splice(index,1);
  }
}

Playlist.prototype.swap = function(song1, song2){
  var song1Index = this.find(song1);
  var song2Index = this.find(song2);
  this.songs.splice(song1Index, 1, song2);
  this.songs[song2Index] = song1;
  //// 1  2  3
}

Playlist.prototype.nowPlaying = function(){
  if(this.currentSong === undefined){return null;}
  return this.currentSong;
}


Playlist.prototype.play = function(){
  this.currentSong = this.songs[0];
}

Playlist.prototype.next = function(){
  var i = this.find(this.currentSong);
  i++;
  this.currentSong = this.songs[i];
}

Playlist.prototype.totalLength = function(){
  var summedLength = 0;
  for (var i = 0; i < this.songs.length; i++) {
    summedLength += this.songs[i].length;
  }
  return summedLength;
}

Playlist.prototype.find = function(song){
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
  var songNameArray = [];
  for (var i = 0; i < this.songs.length; i++) {
    songNameArray.push(this.songs[i].name);
  }
  return songNameArray;
}

Playlist.prototype.forNumber = function () {

};

module.exports = Playlist;
