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
      totalScratchpads: 0,
      currentScratch: null,
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
        this.scratchpadClose.addEventListener('click', __bind(function() {
          return this.scratchpadWindow.close();
        }, this));
        return this.scratchpadAdd.addEventListener('click', __bind(function() {
          return this.addTab();
        }, this));
      },
      init: function() {
        this.scratchpadTabs = scratchpadTabs;
        /*
                    @scratchpadTabs.addEventListener 'focus', (e) =>
                        console.log 'focus', e
                        e.currentTarget.enable()
                    @scratchpadTabs.addEventListener 'beforeswitch', =>
                        console.log 'beforeswitch', arguments
                    @scratchpadTabs.addEventListener 'afterswitch', =>
                        console.log 'afterswitch', arguments
                    @scratchpadTabs.addEventListener 'close', =>
                        console.log 'close', arguments
                    */
        this.scratchpadAdd = scratchpadAdd;
        this.scratchpadWindow = scratchpadWindow;
        this.scratchpadClose = scratchpadClose;
        return this.currentScratch = scratchpad0Code;
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
      },
      addTab: function() {
        var generateTab;
        this.totalScratchpads++;
        generateTab = __bind(function() {
          var new_editor, new_page;
          new_editor = new apf.textarea({
            id: "scratchpad" + this.totalScratchpads + "Code",
            flex: 1,
            realtime: true,
            border: 0,
            showprintmargin: false,
            printmargincolumn: 0,
            width: 780,
            height: 400
          });
          new_page = new apf.page({
            id: "scratchpad" + this.totalScratchpads,
            caption: "Scratch Pad " + (this.totalScratchpads + 1),
            name: "scratchpadPage" + this.totalScratchpads,
            closebtn: true,
            childNodes: [new_editor]
          });
          return new_page;
        }, this);
        return this.scratchpadTabs.appendChild(generateTab());
      }
    });
  });
}).call(this);
