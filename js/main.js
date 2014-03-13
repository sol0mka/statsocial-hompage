// Generated by CoffeeScript 1.6.2
(function() {
  var App;

  App = (function() {
    function App() {
      this.vars();
      this.initScroll();
      this.initController();
      this.buildAnimations();
      this.initParallax();
    }

    App.prototype.vars = function() {
      this.$main = $('#js-main');
      this.$body = $(document.body);
      this.scrollPos = 0;
      this.$window = $(window);
      this.$window.height();
      this.$script1 = this.$('#js-script1');
      this.$script2 = this.$('#js-script2');
      this.$scence = this.$('#js-curtain1');
      this.$scence2 = this.$('#js-curtain2');
      this.$scence3 = this.$('#js-curtain3');
      this.$carousel = this.$('#js-carousel');
      this.$plane = this.$('#js-plane');
      return this.prevPlaneProgress = -1;
    };

    App.prototype.initController = function() {
      return this.controller = $.superscrollorama({
        triggerAtCenter: false,
        playoutAnimations: true
      });
    };

    App.prototype.initScroll = function() {
      var it;

      this.scroller = new IScroll('#js-main', {
        probeType: 3,
        mouseWheel: true
      });
      document.addEventListener('touchmove', (function(e) {
        return e.preventDefault();
      }), false);
      it = this;
      this.scroller.on('scroll', function() {
        return it.updateScrollPos(this, it);
      });
      return this.scroller.on('scrollEnd', function() {
        return it.updateScrollPos(this, it);
      });
    };

    App.prototype.initParallax = function() {
      this.$scence.parallax();
      return this.$scence2.parallax();
    };

    App.prototype.updateScrollPos = function(that, it) {
      return it.controller.setScrollContainerOffset(0, -(that.y >> 0)).triggerCheckAnim(true);
    };

    App.prototype.onBuildingsUpdate = function() {
      var method;

      method = this.curtainTextTween2.totalProgress() >= 1 ? 'hide' : 'show';
      return this.$scence[method]();
    };

    App.prototype.buildAnimations = function() {
      var $animas, $buildings, $bush, $bushes, $clip, $cloudParts, $clouds, $el, $iconBanner, $quoCurtain, $ticket1, $ticket2, $tickets, bush, dur, i, start, _i, _j, _len, _ref,
        _this = this;

      $quoCurtain = this.$('#js-quo-curtain');
      $tickets = this.$('#js-tickets');
      $ticket1 = this.$('#js-ticket1');
      $ticket2 = this.$('#js-ticket2');
      $clip = this.$('#js-clip');
      this.frameDurationTime = 1000;
      this.curtainTween1 = TweenMax.to(this.$('#js-left-curtain'), 1, {
        left: '-50%'
      });
      this.curtainTween2 = TweenMax.to(this.$('#js-right-curtain'), 1, {
        left: '100%'
      });
      start = 1;
      dur = this.frameDurationTime;
      this.controller.addTween(start, this.curtainTween2, dur);
      this.rightPeelTween = TweenMax.to(this.$('#js-right-peel, #js-right-peel-gradient'), 1, {
        css: {
          width: '100%'
        }
      });
      this.controller.addTween(start, this.rightPeelTween, dur);
      this.curtainTextTween2 = TweenMax.to(this.$('#js-quo-curtain'), 1, {
        css: {
          left: '-100%'
        }
      });
      this.controller.addTween(start, this.curtainTextTween2, dur);
      start = start + dur;
      dur = this.frameDurationTime;
      this.controller.addTween(start, this.curtainTween1, dur);
      this.leftPeelTween = TweenMax.to(this.$('#js-left-peel, #js-left-peel-gradient'), 1, {
        css: {
          width: '100%'
        }
      });
      this.controller.addTween(start, this.leftPeelTween, this.frameDurationTime);
      start = start + dur;
      dur = this.frameDurationTime;
      this.groundTween = TweenMax.to(this.$('#js-ground'), 1, {
        css: {
          y: 0
        }
      });
      this.controller.addTween(start, this.groundTween, dur);
      this.bgTween = TweenMax.to(this.$('#js-bg'), 1, {
        css: {
          opacity: 1
        }
      });
      this.controller.addTween(start, this.bgTween, dur);
      start = start + dur;
      dur = 1;
      $clouds = this.$('.cloud-b');
      this.cloudTween = TweenMax.to($clouds, 1, {
        onComplete: (function() {
          return $clouds.addClass('is-anima');
        }),
        onReverseComplete: (function() {
          return $clouds.removeClass('is-anima');
        })
      });
      this.controller.addTween(start, this.cloudTween, dur);
      start = start + dur + (this.frameDurationTime / 2);
      dur = this.frameDurationTime;
      $buildings = this.$('.building-b');
      for (i = _i = 0, _ref = $buildings.length; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        $el = $($buildings.eq(i));
        this.controller.addTween(start - (($buildings.length - i) * (this.frameDurationTime / $buildings.length)), TweenMax.to($el, .1, {
          css: {
            y: 0,
            bottom: 145
          },
          onComplete: (function() {
            var _this = this;

            this.target.addClass('is-show-label is-tip bounce-eff').removeClass('is-hide-label');
            return setTimeout((function() {
              return _this.target.addClass('is-hide-label');
            }), 3990);
          }),
          onReverseComplete: (function() {
            return this.target.removeClass('is-show-label is-tip bounce-eff');
          })
        }), dur);
      }
      this.curtainTextTween2 = TweenMax.to(this.$('.underline-text'), 1, {
        css: {
          top: '-25%'
        },
        onReverseComplete: (function() {
          return _this.$('.underline-text').css({
            'top': '50%'
          });
        }),
        onUpdate: StatSocial.helpers.bind(this.onBuildingsUpdate, this)
      });
      this.controller.addTween(start - (this.frameDurationTime / 10), this.curtainTextTween2, dur);
      start = start + dur - (this.frameDurationTime / 1.5);
      dur = 3 * this.frameDurationTime;
      this.$plane = this.$('#js-plane');
      this.$planeInner = this.$plane.find('#js-plane-inner');
      this.$planeText = this.$plane.find('#js-plane-text');
      this.$moon = this.$('#js-moon');
      this.planeTween = TweenMax.to(this.$plane, .75, {
        css: {
          left: '-100%'
        },
        onUpdate: StatSocial.helpers.bind(this.onPlaneUpdate, this),
        onComplete: function() {
          return _this.isPlaneText = false;
        }
      });
      this.controller.addTween(start, this.planeTween, dur);
      start = start + dur - 2 * this.frameDurationTime;
      dur = this.frameDurationTime;
      $bushes = $('.curtain3--bush-lh');
      for (i = _j = 0, _len = $bushes.length; _j < _len; i = ++_j) {
        bush = $bushes[i];
        $bush = $(bush);
        this.controller.addTween(start, TweenMax.to($bush, .75, {
          scale: 1
        }), dur);
      }
      this.$yAxes = this.$('#js-roller-y');
      this.$xAxes = this.$('#js-roller-x');
      this.$rollerLine1 = this.$('#js-roller-line1');
      this.$rollerLine2 = this.$('#js-roller-line2');
      this.rollerLine1 = this.$rollerLine1[0];
      this.rollerLine2 = this.$rollerLine2[0];
      this.$rollerLineBg2 = this.$('#js-roller-line-bg2');
      this.$rollerLineBg1 = this.$('#js-roller-line-bg1');
      this.$rollerLineBg4 = this.$('#js-roller-line-bg4');
      this.$rollerLineBg3 = this.$('#js-roller-line-bg3');
      this.$horizontalPattern = this.$('#js-check-horizontal-pattern');
      this.$horizontalPatternDouble = this.$('#js-check-horizontal-pattern-double');
      this.$rollerCabin1 = this.$('#js-roller-cabin1');
      this.$rollerCabinParent1 = this.$rollerCabin1.parent();
      this.$rollerCabin2 = this.$('#js-roller-cabin2');
      this.$rollerCabinParent2 = this.$rollerCabin2.parent();
      this.$rollerCabin3 = this.$('#js-roller-cabin3');
      this.$rollerCabinParent3 = this.$rollerCabin3.parent();
      this.$markerCircle = this.$('#js-marker-circle');
      this.$rollerCabin4 = this.$('#js-roller-cabin4');
      this.$rollerCabinParent4 = this.$rollerCabin4.parent();
      this.$rollerCabin5 = this.$('#js-roller-cabin5');
      this.$rollerCabinParent5 = this.$rollerCabin5.parent();
      this.$rollerCabin6 = this.$('#js-roller-cabin6');
      this.$rollerCabinParent6 = this.$rollerCabin6.parent();
      this.$rollerCabin7 = this.$('#js-roller-cabin7');
      this.$rollerCabinParent7 = this.$rollerCabin7.parent();
      this.$ferrisWheel = this.$('#js-ferris-wheel');
      this.$rollerText = this.$('#js-roller-text');
      this.rollerLine2Length = this.rollerLine2.getTotalLength();
      this.rollerText = this.$rollerText[0];
      this.rollerTextOffset = parseInt(this.rollerText.getAttribute('startOffset'), 10);
      this.rollerAxesTween = TweenMax.to({}, .75, {
        onUpdate: StatSocial.helpers.bind(this.onRollerAxesUpdate, this)
      });
      this.controller.addTween(start, this.rollerAxesTween, dur);
      this.prepareBuildingLine(1);
      this.prepareBuildingLine(2);
      start = start + dur - (this.frameDurationTime / 2);
      dur = 3 * this.frameDurationTime;
      this.rollerRailsTween1 = TweenMax.to({
        y: 500
      }, .75, {
        y: 0,
        onUpdate: StatSocial.helpers.bind(this.onRollerRails1Update, this)
      });
      this.controller.addTween(start, this.rollerRailsTween1, dur);
      this.rollerRailsTween2 = TweenMax.to({
        y: 500
      }, 1, {
        y: 0,
        onUpdate: StatSocial.helpers.bind(this.onRollerRails2Update, this)
      });
      this.controller.addTween(start, this.rollerRailsTween2, dur);
      start = start + dur;
      dur = this.frameDurationTime;
      this.gridSimplifyTween = TweenMax.to({
        x: 0
      }, 1, {
        x: 1300,
        onUpdate: StatSocial.helpers.bind(this.onGridSimplifyUpdate, this)
      });
      this.controller.addTween(start, this.gridSimplifyTween, dur);
      this.lineSimplifyTween = TweenMax.to({
        curve: 0
      }, 1, {
        curve: 40,
        onUpdate: StatSocial.helpers.bind(this.onLineSimplifyUpdate, this)
      });
      this.controller.addTween(start, this.lineSimplifyTween, dur);
      this.axesSimplifyTween = TweenMax.to(this.$('#js-roller-x, #js-roller-y'), 1, {
        opacity: 0
      });
      this.controller.addTween(start, this.axesSimplifyTween, dur);
      start = start + dur;
      dur = 3 * this.frameDurationTime;
      this.rollerTextTween = TweenMax.to({
        offset: this.rollerLine2.getTotalLength()
      }, 1, {
        offset: this.rollerTextOffset,
        onUpdate: StatSocial.helpers.bind(this.onRollerTextUpdate, this),
        onStart: function() {
          return _this.showTrain1();
        }
      });
      this.controller.addTween(start, this.rollerTextTween, dur);
      start = start + dur - (this.frameDurationTime / 2);
      dur = 1;
      this.rollerCabinsTriggerTween = TweenMax.to({}, 1, {
        onComplete: (function() {
          _this.initRollerCabins();
          return _this.showTrain2();
        }),
        onReverseComplete: (function() {
          var _ref1, _ref2;

          if ((_ref1 = _this.rollerCabinsTween) != null) {
            _ref1.pause();
          }
          if ((_ref2 = _this.rollerCabinsTween2) != null) {
            _ref2.pause();
          }
          return _this.hideTrain2();
        })
      });
      this.controller.addTween(start, this.rollerCabinsTriggerTween, dur);
      start = start + dur - this.frameDurationTime;
      dur = 1;
      this.carouselTriggerTween = TweenMax.to({}, 1, {
        onComplete: (function() {
          _this.$scence3.addClass('is-show-carousel');
          return setTimeout((function() {
            return _this.$carousel.addClass('is-open');
          }), 200);
        }),
        onReverseComplete: function() {
          _this.$carousel.removeClass('is-open');
          return setTimeout((function() {
            return _this.$scence3.removeClass('is-show-carousel');
          }), 800);
        }
      });
      this.controller.addTween(start, this.carouselTriggerTween, dur);
      start = start + dur;
      dur = 3 * this.frameDurationTime;
      this.planeTween2 = TweenMax.to(this.$plane, .75, {
        css: {
          left: '100%'
        },
        onUpdate: StatSocial.helpers.bind(this.onPlaneUpdate2, this),
        onStart: function() {
          _this.$plane.show();
          _this.isPlaneHide = false;
          return _this.$planeText.text('stats on 25,000+ brands, interests, celebrities, and TV shows', {
            onComplete: function() {
              return _this.isPlaneText = false;
            }
          });
        }
      });
      this.controller.addTween(start, this.planeTween2, dur);
      start = start + dur - (2 * this.frameDurationTime);
      dur = 1;
      this.ferrisWheelTriggerTween = TweenMax.to({}, 1, {
        onComplete: (function() {
          _this.$scence3.addClass('is-show-ferris-wheel');
          return setTimeout((function() {
            return _this.$ferrisWheel.addClass('is-open');
          }), 200);
        }),
        onReverseComplete: function() {
          _this.$ferrisWheel.removeClass('is-open');
          return setTimeout((function() {
            return _this.$scence3.removeClass('is-show-ferris-wheel');
          }), 800);
        }
      });
      this.controller.addTween(start, this.ferrisWheelTriggerTween, dur);
      start = start + dur + (2 * this.frameDurationTime);
      dur = 3 * this.frameDurationTime;
      this.ferrisText = this.$('#js-ferris-text')[0];
      this.ferrisTextPath = this.$('#ferris-script')[0];
      this.ferrisTextTween = TweenMax.to({
        offset: 2300
      }, 1, {
        offset: 100,
        onUpdate: StatSocial.helpers.bind(this.onFerrisTextUpdate, this)
      });
      this.controller.addTween(start, this.ferrisTextTween, dur);
      start = start + dur - (1.5 * this.frameDurationTime);
      dur = this.frameDurationTime;
      this.moonTween = TweenMax.to(this.$moon, .75, {
        x: 0,
        y: 0
      });
      this.controller.addTween(start, this.moonTween, dur);
      $cloudParts = this.$('.cloud-b > *');
      $iconBanner = $('.icon-banner');
      this.controller.addTween(start, TweenMax.to(this.$('.cabin--base, .icon-banner'), 1, {
        backgroundColor: '#f2d577'
      }), dur);
      this.controller.addTween(start, TweenMax.to(this.$('#js-bg'), 1, {
        backgroundColor: '#095273'
      }), dur);
      this.controller.addTween(start, TweenMax.to($cloudParts, 1, {
        backgroundColor: '#4b99bd',
        onStart: (function() {
          $cloudParts.addClass('no-transition-g-i');
          return $iconBanner.addClass('no-transition-g-i');
        }),
        onReverseComplete: (function() {
          $cloudParts.removeClass('no-transition-g-i');
          return $iconBanner.removeClass('no-transition-g-i');
        })
      }), dur);
      this.controller.addTween(start, TweenMax.to(this.$('.building-b'), 1, {
        backgroundColor: '#13688d'
      }), dur);
      this.controller.addTween(start, TweenMax.to(this.$('.human'), 1, {
        backgroundColor: '#153750'
      }), dur);
      this.controller.addTween(start, TweenMax.to(this.$('.bush-b > .part-be'), 1, {
        backgroundColor: '#70bb69'
      }), dur);
      this.controller.addTween(start, TweenMax.to(this.$('.bush-b.is-light > .part-be'), 1, {
        backgroundColor: '#55d38c'
      }), dur);
      this.controller.addTween(start, TweenMax.to(this.$('.ribbon-b, .ribbon-b > .rope-be, .ribbon-b > .rope2-be'), 1, {
        backgroundColor: '#6ab4d7'
      }), dur);
      this.controller.addTween(start, TweenMax.to(this.$('.ribbon-b > .text-be'), 1, {
        color: '#ffffff'
      }), dur);
      this.controller.addTween(start, TweenMax.to(this.$('.ribbon-b > .tale-be'), 1, {
        borderTopColor: '#6ab4d7'
      }), dur);
      this.controller.addTween(start, TweenMax.to(this.$('.ribbon-b > .tale2-be'), 1, {
        borderBottomColor: '#6ab4d7'
      }), dur);
      this.controller.addTween(start, TweenMax.to(this.$('.building-b > .tip-be'), 1, {
        borderBottomColor: '#18688d'
      }), dur);
      this.controller.addTween(start, TweenMax.to(this.$('.line, .check-pattern'), 1, {
        stroke: '#1b7daa'
      }), dur);
      this.controller.addTween(start, TweenMax.to(this.$('.line1, .check-pattern1'), 1, {
        stroke: '#2590be'
      }), dur);
      this.controller.addTween(start, TweenMax.to(this.$('.marker-circle'), 1, {
        fill: '#2590be'
      }), dur);
      this.controller.addTween(start, TweenMax.to(this.$('.svg-cabin-wheel'), 1, {
        fill: '#13527b'
      }), dur);
      this.controller.addTween(start, TweenMax.to(this.$('.svg-cabin-base'), 1, {
        fill: '#237ca6'
      }), dur);
      this.controller.addTween(start, TweenMax.to(this.$('.svg-cabin-base2'), 1, {
        fill: '#3f98c2'
      }), dur);
      this.controller.addTween(start, TweenMax.to(this.$('.svg-cabin-base3'), 1, {
        fill: '#1c7691'
      }), dur);
      this.controller.addTween(start, TweenMax.to(this.$('.svg-cabin-human'), 1, {
        fill: '#153750'
      }), dur);
      start = start + dur;
      dur = this.frameDurationTime;
      this.moonTween = TweenMax.to($('.moon-n-text--side'), 1, {
        y: -100,
        opacity: 0
      });
      this.controller.addTween(start, this.moonTween, dur);
      start = start + dur;
      dur = 3 * this.frameDurationTime;
      this.planeTween3 = TweenMax.to(this.$plane, 1, {
        css: {
          left: '-100%'
        },
        onUpdate: StatSocial.helpers.bind(this.onPlaneUpdate3, this),
        onStart: function() {
          _this.$plane.show();
          _this.isPlaneHide = false;
          return _this.$planeText.text('unparalleled demographics', {
            onComplete: function() {
              return _this.isPlaneText = false;
            }
          });
        }
      });
      this.controller.addTween(start, this.planeTween3, dur);
      start = start + dur - (2 * this.frameDurationTime);
      dur = this.frameDurationTime;
      this.entranceTween = TweenMax.to(this.$('#js-entrance'), 1, {
        y: 0
      });
      this.controller.addTween(start, this.entranceTween, dur);
      start = start + dur - (this.frameDurationTime / 2);
      dur = this.frameDurationTime;
      this.$baloonsLayer1 = this.$('.js-baloon__layer1');
      this.$baloonsLayer2 = this.$('.js-baloon__layer2');
      this.$baloonsLayer3 = this.$('.js-baloon__layer3');
      this.baloonsTween1 = TweenMax.to(this.$baloonsLayer1, 1, {
        marginTop: 0,
        onUpdate: StatSocial.helpers.bind(this.onBaloonsUpdate1, this)
      });
      this.controller.addTween(start, this.baloonsTween1, dur);
      this.baloonsTween2 = TweenMax.to(this.$baloonsLayer2, 1, {
        marginTop: 0,
        onUpdate: StatSocial.helpers.bind(this.onBaloonsUpdate2, this)
      });
      this.controller.addTween(start + (this.frameDurationTime / 6), this.baloonsTween2, dur);
      this.baloonsTween3 = TweenMax.to(this.$baloonsLayer3, 1, {
        marginTop: 0,
        onUpdate: StatSocial.helpers.bind(this.onBaloonsUpdate3, this)
      });
      this.controller.addTween(start + (this.frameDurationTime / 8), this.baloonsTween3, dur);
      this.groundKonfettiTween = TweenMax.to(this.$('#js-ground-confetti'), 1, {
        opacity: 1
      });
      this.controller.addTween(start, this.groundKonfettiTween, dur);
      start = start + dur + (this.frameDurationTime / 2);
      dur = 3 * this.frameDurationTime;
      this.planeTween4 = TweenMax.to(this.$plane, 1, {
        css: {
          left: '100%'
        },
        onUpdate: StatSocial.helpers.bind(this.onPlaneUpdate4, this),
        onStart: function() {
          _this.$plane.show();
          _this.isPlaneHide = false;
          return _this.$planeText.text('customer service you can rely on', {
            onComplete: function() {
              return _this.isPlaneText = false;
            }
          });
        }
      });
      this.controller.addTween(start, this.planeTween4, dur);
      start = start + dur - (1.5 * this.frameDurationTime);
      dur = 1;
      $animas = this.$('.anima-fork');
      this.logosTriggerTween = TweenMax.to({}, 1, {
        onComplete: (function() {
          return $animas.show();
        }),
        onReverseComplete: (function() {
          return $animas.hide();
        })
      });
      this.controller.addTween(start, this.logosTriggerTween, dur);
      start = start + dur + (2 * this.frameDurationTime);
      dur = 3 * this.frameDurationTime;
      this.planeTween5 = TweenMax.to(this.$plane, 1, {
        css: {
          left: '-100%'
        },
        onUpdate: StatSocial.helpers.bind(this.onPlaneUpdate5, this),
        onStart: function() {
          _this.$plane.show();
          _this.isPlaneHide = false;
          return _this.$planeText.text('just ask our clients how much they love us ', {
            onComplete: function() {
              return _this.isPlaneText = false;
            }
          });
        }
      });
      this.controller.addTween(start, this.planeTween5, dur);
      start = start + dur - (2 * this.frameDurationTime);
      dur = this.frameDurationTime;
      this.ticketsTween = TweenMax.to($tickets, 1, {
        y: 0
      });
      this.controller.addTween(start, this.ticketsTween, dur);
      start = start + dur - (this.frameDurationTime / 2);
      dur = this.frameDurationTime;
      this.ticket1 = TweenMax.to($ticket1, 1, {
        rotation: -20,
        y: -20,
        x: -50
      });
      this.controller.addTween(start, this.ticket1, dur);
      this.clip = TweenMax.to($clip, 1, {
        rotation: -3,
        y: 56,
        x: -70
      });
      this.controller.addTween(start, this.clip, dur);
      this.ticket2 = TweenMax.to($ticket2, 1, {
        rotation: -10
      });
      return this.controller.addTween(start, this.ticket2, dur);
    };

    App.prototype.onBaloonsUpdate1 = function() {
      if (this.baloonsTween1.totalProgress() >= 1) {
        return this.$baloonsLayer1.addClass('oscillate-eff');
      } else {
        return this.$baloonsLayer1.removeClass('oscillate-eff');
      }
    };

    App.prototype.onBaloonsUpdate2 = function() {
      if (this.baloonsTween2.totalProgress() >= 1) {
        return this.$baloonsLayer2.addClass('oscillate2-eff');
      } else {
        return this.$baloonsLayer2.removeClass('oscillate2-eff');
      }
    };

    App.prototype.onBaloonsUpdate3 = function() {
      if (this.baloonsTween3.totalProgress() >= 1) {
        return this.$baloonsLayer3.addClass('oscillate3-eff');
      } else {
        return this.$baloonsLayer3.removeClass('oscillate3-eff');
      }
    };

    App.prototype.onFerrisTextUpdate = function() {
      var pathProgress;

      pathProgress = this.ferrisTextTween.target.offset;
      return this.ferrisText.setAttribute('startOffset', "" + this.ferrisTextTween.target.offset);
    };

    App.prototype.onLineSimplifyUpdate = function() {
      if (this.lineSimplifyTween.totalProgress() > 0) {
        this.$markerCircle[0].setAttribute('class', 'marker-circle is-no-stroke');
      } else {
        this.$markerCircle[0].setAttribute('class', 'marker-circle');
      }
      return this.setLiveLinesCurve(this.lineSimplifyTween.target.curve);
    };

    App.prototype.onGridSimplifyUpdate = function() {
      this.$horizontalPattern.attr('transform', "translate(-" + this.gridSimplifyTween.target.x + ",0)");
      return this.$horizontalPatternDouble.attr('transform', "translate(-" + this.gridSimplifyTween.target.x + ",0)");
    };

    App.prototype.onRollerRails1Update = function() {
      if (this.rollerRailsTween1.totalProgress() < 1) {
        this.hideTrain1();
      }
      this.$rollerLine1.attr('transform', "translate(0," + this.rollerRailsTween1.target.y + ")");
      this.setLiveLinesProgress(this.rollerRailsTween1.totalProgress());
      this.$rollerLineBg1.attr('transform', "translate(0," + this.rollerRailsTween1.target.y + ")");
      return this.$rollerLineBg3.attr('transform', "translate(0," + this.rollerRailsTween1.target.y + ")");
    };

    App.prototype.onRollerRails2Update = function() {
      this.$rollerLine2.attr('transform', "translate(0," + this.rollerRailsTween2.target.y + ")");
      this.$rollerLineBg2.attr('transform', "translate(0," + this.rollerRailsTween2.target.y + ")");
      return this.$rollerLineBg4.attr('transform', "translate(0," + this.rollerRailsTween2.target.y + ")");
    };

    App.prototype.setLiveLinesProgress = function(progress) {
      var point, _i, _j, _len, _len1, _ref, _ref1;

      _ref = this.livePoints1;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        point = _ref[_i];
        point.setProgress(progress);
      }
      _ref1 = this.livePoints2;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        point = _ref1[_j];
        point.setProgress(progress);
      }
      return this.updateLine();
    };

    App.prototype.setLiveLinesCurve = function(curve) {
      var point, _i, _j, _len, _len1, _ref, _ref1;

      _ref = this.livePoints1;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        point = _ref[_i];
        point.curve = curve;
      }
      _ref1 = this.livePoints2;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        point = _ref1[_j];
        point.curve = curve;
      }
      return this.updateLine();
    };

    App.prototype.prepareBuildingLine = function(num) {
      var a, d, i, point, points, start, _i, _j, _len, _len1, _results;

      start = 9 * this.frameDurationTime;
      d = this["$rollerLine" + num].attr('d');
      d = d.replace(/m/gi, '');
      d = d.replace(/(\d)()(\-)/gi, '$1,$3');
      a = d.split(/l|\,/gi);
      points = [];
      for (i = _i = 0, _len = a.length; _i < _len; i = _i += 2) {
        point = a[i];
        points.push({
          x: parseInt(a[i], 10),
          y: parseInt(a[i + 1], 10),
          i: i,
          isFixed: i === 0 || i === a.length - 2
        });
      }
      this["livePoints" + num] = [];
      _results = [];
      for (_j = 0, _len1 = points.length; _j < _len1; _j++) {
        point = points[_j];
        _results.push(this["livePoints" + num].push(new window.StatSocial.RollerPoint(point)));
      }
      return _results;
    };

    App.prototype.updateLine = function() {
      this.serializeLine(1);
      return this.serializeLine(2);
    };

    App.prototype.serializeLine = function(num) {
      var char, i, lastPoint, point, str, _i, _len, _ref;

      str = 'M';
      lastPoint = {};
      _ref = this["livePoints" + num];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        point = _ref[i];
        char = i !== 0 ? 'S' : '';
        str += "" + char + (point.x - point.curve) + "," + point.y + " " + (point.x + point.curve) + "," + point.y;
        lastPoint = point;
      }
      this["$rollerLine" + num].attr('d', str);
      str += "L" + lastPoint.x + ",1300 L0,1300 z";
      this["$rollerLineBg" + num].attr('d', str);
      return this["$rollerLineBg" + (num + 2)].attr('d', str);
    };

    App.prototype.initRollerCabins = function() {
      if (!this.rollerCabinsTween) {
        this.rollerCabinsTween = TweenMax.to({
          p: this.rollerLine2Length
        }, 6, {
          p: -110,
          delay: 2,
          repeatDelay: 3,
          repeat: -1,
          onUpdate: StatSocial.helpers.bind(this.onRollerCabinsUpdate, this)
        });
      } else {
        this.rollerCabinsTween.resume();
      }
      if (!this.rollerCabinsTween2) {
        return this.rollerCabinsTween2 = TweenMax.to({
          p: this.rollerLine2Length
        }, 6, {
          p: -110,
          repeatDelay: 3,
          repeat: -1,
          onUpdate: StatSocial.helpers.bind(this.onRollerCabinsUpdate2, this)
        });
      } else {
        return this.rollerCabinsTween2.resume();
      }
    };

    App.prototype.onRollerCabinsUpdate2 = function() {
      var info1, info2, info3, info4, pathProgress;

      pathProgress = this.rollerCabinsTween2.target.p;
      info1 = this.getRollerPathInfo(pathProgress + 10, true);
      info2 = this.getRollerPathInfo(pathProgress + 50, true);
      info3 = this.getRollerPathInfo(pathProgress + 90, true);
      info4 = this.getRollerPathInfo(pathProgress + 130, true);
      this.$rollerCabinParent4.attr('transform', "translate(" + (info1.point.x - 22) + ", " + (info1.point.y - 25) + ") rotate(" + (info1.degree || 0) + ", 22, 21)");
      this.$rollerCabinParent5.attr('transform', "translate(" + (info2.point.x - 22) + ", " + (info2.point.y - 25) + ") rotate(" + (info2.degree || 0) + ", 22, 21)");
      this.$rollerCabinParent6.attr('transform', "translate(" + (info3.point.x - 22) + ", " + (info3.point.y - 25) + ") rotate(" + (info3.degree || 0) + ", 22, 21)");
      return this.$rollerCabinParent7.attr('transform', "translate(" + (info4.point.x - 22) + ", " + (info4.point.y - 25) + ") rotate(" + (info4.degree || 0) + ", 22, 21)");
    };

    App.prototype.onRollerCabinsUpdate = function() {
      var info1, info2, info3, pathProgress;

      pathProgress = this.rollerCabinsTween.target.p;
      info1 = this.getRollerPathInfo(pathProgress + 10);
      info2 = this.getRollerPathInfo(pathProgress + 50);
      info3 = this.getRollerPathInfo(pathProgress + 90);
      this.$rollerCabinParent1.attr('transform', "translate(" + (info1.point.x - 22) + ", " + (info1.point.y - 25) + ") rotate(" + (info1.degree || 0) + ", 22, 21)");
      this.$rollerCabinParent2.attr('transform', "translate(" + (info2.point.x - 22) + ", " + (info2.point.y - 25) + ") rotate(" + (info2.degree || 0) + ", 22, 21)");
      return this.$rollerCabinParent3.attr('transform', "translate(" + (info3.point.x - 22) + ", " + (info3.point.y - 25) + ") rotate(" + (info3.degree || 0) + ", 22, 21)");
    };

    App.prototype.hideTrain1 = function() {
      if (!this.isFirstTrainHide) {
        this.$rollerCabinParent1.fadeOut();
        this.$rollerCabinParent2.fadeOut();
        this.$rollerCabinParent3.fadeOut();
        return this.isFirstTrainHide = true;
      }
    };

    App.prototype.showTrain1 = function() {
      if (this.isFirstTrainHide) {
        this.$rollerCabinParent1.fadeIn();
        this.$rollerCabinParent2.fadeIn();
        this.$rollerCabinParent3.fadeIn();
        return this.isFirstTrainHide = false;
      }
    };

    App.prototype.hideTrain2 = function() {
      if (!this.isSecondTrainHide) {
        this.$rollerCabinParent4.fadeOut();
        this.$rollerCabinParent5.fadeOut();
        this.$rollerCabinParent6.fadeOut();
        this.$rollerCabinParent7.fadeOut();
        return this.isSecondTrainHide = true;
      }
    };

    App.prototype.showTrain2 = function() {
      if (this.isSecondTrainHide) {
        this.$rollerCabinParent4.fadeIn();
        this.$rollerCabinParent5.fadeIn();
        this.$rollerCabinParent6.fadeIn();
        this.$rollerCabinParent7.fadeIn();
        return this.isSecondTrainHide = false;
      }
    };

    App.prototype.onRollerTextUpdate = function() {
      var info1, info2, info3, pathProgress;

      pathProgress = this.rollerTextTween.target.offset;
      if (pathProgress > 100) {
        info1 = this.getRollerPathInfo(pathProgress - 20);
        info2 = this.getRollerPathInfo(pathProgress - 60);
        info3 = this.getRollerPathInfo(pathProgress - 100);
        this.$rollerCabinParent1.attr('transform', "translate(" + (info1.point.x - 22) + ", " + (info1.point.y - 25) + ") rotate(" + (info1.degree || 0) + ", 22, 21)");
        this.$rollerCabinParent2.attr('transform', "translate(" + (info2.point.x - 22) + ", " + (info2.point.y - 25) + ") rotate(" + (info2.degree || 0) + ", 22, 21)");
        this.$rollerCabinParent3.attr('transform', "translate(" + (info3.point.x - 22) + ", " + (info3.point.y - 25) + ") rotate(" + (info3.degree || 0) + ", 22, 21)");
      }
      return this.rollerText.setAttribute('startOffset', "" + this.rollerTextTween.target.offset);
    };

    App.prototype.getRollerPathInfo = function(progress, isSecondLine) {
      var cathetus, degree, hypotenuse, line, point, prevPoint, returnObj;

      line = !isSecondLine ? this.rollerLine2 : this.rollerLine1;
      point = line.getPointAtLength(progress);
      prevPoint = line.getPointAtLength(progress - 2);
      cathetus = point.x - prevPoint.x;
      hypotenuse = Math.sqrt(Math.pow(point.x - prevPoint.x, 2) + Math.pow(point.y - prevPoint.y, 2));
      degree = Math.acos(cathetus / hypotenuse) * (180 / Math.PI);
      if ((point.y - prevPoint.y) < 0) {
        degree = -degree;
      }
      return returnObj = {
        degree: degree,
        point: point
      };
    };

    App.prototype.onRollerAxesUpdate = function() {
      var progress;

      progress = this.rollerAxesTween.totalProgress();
      this.$yAxes.attr('transform', "translate(0," + (520 - (520 * progress)) + ")");
      return this.$xAxes.attr('transform', "translate(" + (-1240 + (1240 * progress)) + ",0)");
    };

    App.prototype.onPlaneUpdate = function() {
      var progress;

      progress = this.planeTween.totalProgress();
      if (this.prevPlaneProgress > progress) {
        !this.isPlaneFlip && this.$planeInner.addClass('is-flip');
        this.isPlaneFlip = true;
      } else {
        this.isPlaneFlip && this.$planeInner.removeClass('is-flip');
        this.isPlaneFlip = false;
      }
      this.prevPlaneProgress = progress;
      if (progress >= 1) {
        !this.isPlaneHide && this.$planeInner.addClass('is-flip');
        !this.isPlaneHide && this.$plane.hide();
        return this.isPlaneHide = true;
      } else {
        this.setPlaneText('detailed statistics over many fine segments');
        this.isPlaneText = true;
        this.isPlaneHide && this.$planeInner.addClass('is-flip');
        this.isPlaneHide && this.$plane.show();
        return this.isPlaneHide = false;
      }
    };

    App.prototype.onPlaneUpdate2 = function() {
      var progress;

      progress = this.planeTween2.totalProgress();
      if (this.prevPlaneProgress > progress) {
        !this.isPlaneFlip && this.$planeInner.removeClass('is-flip');
        this.isPlaneFlip = true;
      } else {
        this.isPlaneFlip && this.$planeInner.addClass('is-flip');
        this.isPlaneFlip = false;
      }
      this.prevPlaneProgress = progress;
      if (progress >= 1) {
        !this.isPlaneHide && this.$planeInner.removeClass('is-flip');
        !this.isPlaneHide && this.$plane.hide();
        return this.isPlaneHide = true;
      } else {
        this.setPlaneText('stats on 25,000+ brands, interests, celebrities, and TV shows');
        this.isPlaneText2 = true;
        this.isPlaneHide && this.$planeInner.addClass('is-flip');
        this.isPlaneHide && this.$plane.show();
        return this.isPlaneHide = false;
      }
    };

    App.prototype.onPlaneUpdate3 = function() {
      var progress;

      progress = this.planeTween3.totalProgress();
      if (this.prevPlaneProgress < progress) {
        !this.isPlaneFlip && this.$planeInner.removeClass('is-flip');
        this.isPlaneFlip = true;
      } else {
        this.isPlaneFlip && this.$planeInner.addClass('is-flip');
        this.isPlaneFlip = false;
      }
      this.prevPlaneProgress = progress;
      if (progress >= 1) {
        if (!this.isPlaneHide) {
          this.$planeInner.removeClass('is-flip');
          this.$plane.hide();
        }
        return this.isPlaneHide = true;
      } else {
        this.setPlaneText('unparalleled demographics');
        this.isPlaneText3 = true;
        this.isPlaneHide && this.$plane.show();
        return this.isPlaneHide = false;
      }
    };

    App.prototype.onPlaneUpdate4 = function() {
      var progress;

      progress = this.planeTween4.totalProgress();
      if (this.prevPlaneProgress > progress) {
        !this.isPlaneFlip && this.$planeInner.removeClass('is-flip');
        this.isPlaneFlip = true;
      } else {
        this.isPlaneFlip && this.$planeInner.addClass('is-flip');
        this.isPlaneFlip = false;
      }
      this.prevPlaneProgress = progress;
      if (progress >= 1) {
        if (!this.isPlaneHide) {
          this.$planeInner.addClass('is-flip');
          this.$plane.hide();
        }
        return this.isPlaneHide = true;
      } else {
        this.setPlaneText('customer service you can rely on');
        this.isPlaneText4 = true;
        this.isPlaneHide && this.$plane.show();
        return this.isPlaneHide = false;
      }
    };

    App.prototype.onPlaneUpdate5 = function() {
      var progress;

      progress = this.planeTween5.totalProgress();
      if (this.prevPlaneProgress > progress) {
        !this.isPlaneFlip && this.$planeInner.addClass('is-flip');
        this.isPlaneFlip = true;
      } else {
        this.isPlaneFlip && this.$planeInner.removeClass('is-flip');
        this.isPlaneFlip = false;
      }
      this.prevPlaneProgress = progress;
      if (progress >= 1) {
        if (!this.isPlaneHide) {
          this.$planeInner.removeClass('is-flip');
          this.$plane.hide();
        }
        return this.isPlaneHide = true;
      } else {
        this.setPlaneText('just ask our clients how much they love us');
        this.isPlaneText5 = true;
        this.isPlaneHide && this.$plane.show();
        return this.isPlaneHide = false;
      }
    };

    App.prototype.setPlaneText = function(text) {
      if (this.currPlaneText !== text) {
        this.$planeText.text(text);
        return this.currPlaneText = text;
      }
    };

    App.prototype.$ = function(selector) {
      return this.$main.find(selector);
    };

    App.prototype.onCurtain1Update = function() {
      if (this.curtainTween1.totalProgress() >= 1) {
        this.isFirstCurtainParallax && this.$scence.parallax('disable');
        this.isFirstCurtainParallax = false;
        return this.$scence.hide();
      } else {
        !this.isFirstCurtainParallax && this.$scence.parallax('enable');
        this.isFirstCurtainParallax = true;
        return this.$scence.show();
      }
    };

    App.prototype.onCurtain2Update = function() {
      if (this.$left.offset().left !== 0) {
        this.$script2.css({
          left: Math.max(this.$left.offset().left + this.$left.outerWidth(), this.$window.outerWidth() / 2 - this.$script2.outerWidth() / 2 - 20)
        });
      }
      if (this.curtain2LeftTween.totalProgress() >= 1) {
        this.isSecondCurtainParallax && this.$scence2.parallax('disable');
        this.isSecondCurtainParallax = false;
        this.$left.hide();
        return this.$right.hide();
      } else {
        !this.isSecondCurtainParallax && this.$scence2.parallax('enable');
        this.isSecondCurtainParallax = true;
        this.$left.show();
        return this.$right.show();
      }
    };

    App.prototype.onCurtain2UpdateEnd = function() {
      if (this.scriptTween3.totalProgress() >= 1) {
        return this.$scence2.hide();
      } else {
        return this.$scence2.show();
      }
    };

    return App;

  })();

  new App;

}).call(this);

/*
//@ sourceMappingURL=main.map
*/
