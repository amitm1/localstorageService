var saveValue = function(key, value){
var that =this;
var mystorage = localStorage;
mystorage.setItem(key, value);
return true
}

var getValue = function(key){
var mystorage = localStorage;
var value = mystorage.getItem(key);
return value;
}
