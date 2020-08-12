function Cat() {
	this.stomach = [];
}

Mouse.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
}

module.exports = Cat;