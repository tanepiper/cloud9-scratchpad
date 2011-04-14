define((require, exports, module) ->
    ide = require 'core/ide'
    ext = require 'core/ext'
    util = require 'core/util'
    editors = require 'ext/editors/editors'
    markup = require 'text!ext/scratchpad/scratchpad.xml'
    
    return ext.register 'ext/scratchpad/scratchpad',
        name: 'Scratchpad'
        dev: 'Tane Piper'
        type: ext.GENERAL
        alone: yes
        markup: markup
        commands:
            'scratchpad': hint: 'Show the scratchpad'
        hotitems: {}
        nodes: []
        
        totalScratchpads: 0
        
        hook: ->
            @nodes.push mnuView.appendChild new apf.item
                caption: 'Scratchpad'
                onclick: =>
                    @scratchpad()
        
        scratchpad: ->
            ext.initExtension @
            @scratchpadWindow.show()
            
            @scratchpadClose.addEventListener 'click', =>
                @scratchpadWindow.close()
                
            @scratchpadAdd.addEventListener 'click', =>
                @addTab()
            
        init: ->
            @scratchpadAdd = scratchpadAdd
            @scratchpadTabs = scratchpadTabs
            @scratchpadWindow = scratchpadWindow
            @scratchpadClose = scratchpadClose
            
        enable : () ->
            @nodes.each (item) ->
                item.enable()
                return
            return
        
        disable: () ->
            @nodes.each (item) ->
                item.disable()
                return
            return
                    
        destroy : () ->
            @nodes.each (item) ->
                item.destroy true, true
                return
            @nodes = [];
            @scratchpadWindow.destroy true, true
            return
            
        addTab: ->
            @totalScratchpads++
            
            generateTab = =>
                return new apf.page
                    id: "scratchpad#{@totalScratchpads}"
                    caption: "Scratch Pad #{@totalScratchpads + 1}"
                    name: "scratchpadPage#{@totalScratchpads}"
                    closebtn: true
                    childNodes: [
                        new apf.codeeditor
                            id: "scratchpad#{@totalScratchpads}Code"
                            flex: 1
                            realtime: true
                            border: 0
                            showprintmargin: false
                            printmargincolumn: 0
                            width: 780
                            height: 400
                    ]
                
            @scratchpadTabs.appendChild generateTab()
)