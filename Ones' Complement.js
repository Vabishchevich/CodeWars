function onesComplement(n) {
return n.replace(/[01]/g, function(n) {
return 1 - n;
});
};
