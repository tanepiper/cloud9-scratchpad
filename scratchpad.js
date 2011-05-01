(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  define(function(require, exports, module) {
    var dock, editors, ext, ide, markup, util;
    ide = require('core/ide');
    ext = require('core/ext');
    util = require('core/util');
    dock = require('ext/dockpanel/dockpanel');
    editors = require('ext/editors/editors');
    markup = require('text!ext/scratchpad/scratchpad.xml');
    return ext.register('ext/scratchpad/scratchpad', {
      name: 'Scratchpad',
      dev: 'Tane Piper',
      type: ext.GENERAL,
      alone: true,
      markup: markup,
      hotitems: {},
      nodes: [],
      totalScratchpads: 0,
      currentScratch: null,
      hook: function() {
        var sectionPad;
        sectionPad = dock.getSection("scratchpad");
        dock.registerPage(sectionPad, null, __bind(function() {
          ext.initExtension(this);
          return scratchpad0;
        }, this), {
          primary: {
            backgroundImage: "/static/style/images/debugicons.png",
            defaultState: {
              x: -6,
              y: -217
            },
            activeState: {
              x: -6,
              y: -217
            }
          }
        });
      },
      init: function() {
        return this.tabScratchpad = tabScratchpad;
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
        this.tabScratchpad.appendChild(generateTab());
      }
    });
  });
}).call(this);
