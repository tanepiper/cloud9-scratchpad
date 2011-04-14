(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  define(function(require, exports, module) {
    var editors, ext, ide, markup, util;
    ide = require('core/ide');
    ext = require('core/ext');
    util = require('core/util');
    editors = require('ext/editors/editors');
    markup = require('text!ext/scratchpad/scratchpad.xml');
    return ext.register('ext/scratchpad/scratchpad', {
      name: 'Scratchpad',
      dev: 'Tane Piper',
      type: ext.GENERAL,
      alone: true,
      markup: markup,
      commands: {
        'scratchpad': {
          hint: 'Show the scratchpad'
        }
      },
      hotitems: {},
      nodes: [],
      hook: function() {
        return this.nodes.push(mnuView.appendChild(new apf.item({
          caption: 'Scratchpad',
          onclick: __bind(function() {
            return this.scratchpad();
          }, this)
        })));
      },
      scratchpad: function() {
        ext.initExtension(this);
        this.scratchpadWindow.show();
        return this.scratchpadClose.addEventListener('click', __bind(function() {
          return this.scratchpadWindow.close();
        }, this));
      },
      init: function() {
        this.scratchpadWindow = scratchpadWindow;
        return this.scratchpadClose = scratchpadClose;
      },
      enable: function() {
        this.nodes.each(function(item) {
          item.enable();
        });
      },
      disable: function() {
        this.nodes.each(function(item) {
          item.disable();
        });
      },
      destroy: function() {
        this.nodes.each(function(item) {
          item.destroy(true, true);
        });
        this.nodes = [];
        this.scratchpadWindow.destroy(true, true);
      }
    });
  });
}).call(this);
