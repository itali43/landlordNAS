'use strict'

var Token = function(address) {
  this.payto = Blockchain.transaction.from;
  this.address = address;
}


var LandRegistry = function() {
  LocalContractStorage.defineProperty(this, "_LTitles");
};

LandRegistry.prototype = {
  init: function() {
    this._LTitles = new Array();
  },
  tokens: function() {
    return this._LTitles;
  },

  register: function(address) {
    var tokens = this._LTitles
    tokens.forEach(function(token){
      if (token.address == address) {
        return;
      }
    })
    tokens.push(new Token(address))
    this._LTitles = tokens
  }
};

module.exports = LandRegistry
