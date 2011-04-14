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
        this.scratchpadAdd = scratchpadAdd;
        this.scratchpadTabs = scratchpadTabs;
        this.scratchpadWindow = scratchpadWindow;
        this.scratchpadClose = scratchpadClose;
        return this.scratchpad0Code = scratchpad0Code;
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
        var scratch_pad;
        this.totalScratchpads++;
        scratch_pad = new apf.page({
          id: "scratchpad" + this.totalScratchpads,
          caption: "Scratch Pad " + (this.totalScratchpads + 1),
          name: "scratchpadPage" + this.totalScratchpads,
          closebtn: true,
          childNodes: [
            new apf.codeeditor({
              id: "scratchpad" + this.totalScratchpads + "Code",
              flex: 1,
              realtime: true,
              border: 0,
              showprintmargin: false,
              printmargincolumn: 0,
              width: 780,
              height: 400
            })
          ]
        });
        return this.scratchpadTabs.appendChild(scratch_pad);
        /*
                    @totalScratchpads++
                    
                    new_code = new apf.codeeditor
                        id: "scratchpad#{@totalScratchpads}Code"
                        flex: 1
                        realtime: true
                        border: 0
                        showprintmargin: false
                        printmargincolumn: 0
                        width: 780
                        height: 400
                        
                    new_tab = @scratchpadTabs.add "Scratch Pad #{@totalScratchpads + 1}", "scratchpad-#{@totalScratchpads}"
                    setTimeout ->
                        new_tab.insertMarkup new_code
                    , 1
                    */
      }
    });
  });
}).call(this);
