var saveValue = function(key, value){
var that =this;
var mystorage = localStorage;
mystorage.setItem(key, value);
return true
}
