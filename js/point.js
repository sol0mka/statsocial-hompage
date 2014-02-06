// Generated by CoffeeScript 1.6.2
(function() {
  var Point;

  Point = (function() {
    function Point(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.animate();
    }

    Point.prototype.vars = function() {
      this.isAnimate = true;
      this.x = this.o.x || 0;
      this.y = this.o.y || 0;
      this.startY = this.y;
      this.startX = this.x;
      return this.y = 100;
    };

    Point.prototype.animate = function() {
      var newX, newY, randomNumber;

      if (!this.isAnimate) {
        return;
      }
      randomNumber = StatSocial.helpers.getRand(0, 100);
      newY = StatSocial.helpers.getRand(-(this.startY / 2), this.startY / 2);
      newX = this.startX + StatSocial.helpers.getRand(-10, 10);
      return this.tween = TweenMax.to({
        y: this.y,
        x: this.x
      }, .5, {
        y: newY,
        x: newX,
        onUpdate: StatSocial.helpers.bind(this.onUpdate, this),
        onComplete: StatSocial.helpers.bind(this.animate, this)
      });
    };

    Point.prototype.onUpdate = function() {
      this.y = this.tween.target.y;
      return this.x = this.tween.target.x;
    };

    Point.prototype.pause = function() {
      this.isAnimate = false;
      return this.tween.pause();
    };

    Point.prototype.resume = function() {
      this.isAnimate = true;
      return this.tween.resume();
    };

    return Point;

  })();

  window.StatSocial.RollerPoint = Point;

}).call(this);

/*
//@ sourceMappingURL=point.map
*/
