'use strict';

var Token = function(address) {
    this.description = "";
    this.address = address;
}


var Registry = function() {
    LocalContractStorage.defineProperty(this, "_tokens");
};

Registry.prototype = {
    init: function() {
        this._tokens = new Array();
    },
    tokens: function() {
        return this._tokens;
    },

    register: function(address) {
        var tokens = this._tokens
        tokens.forEach(function(token) {
            if (token.address == address) {
                return;
            }
        })
        tokens.push(new Token(address))
        this._tokens = tokens
    }
};

module.exports = Registry
