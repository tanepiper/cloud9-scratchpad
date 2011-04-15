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
        currentScratch: null
        
        hook: ->
            @nodes.push mnuView.appendChild new apf.item
                caption: 'Scratchpad'
                onclick: =>
                    @scratchpad()
        
        scratchpad: ->
            ext.initExtension @
            @scratchpadWindow.show()
            
        init: ->
            @scratchpadTabs = scratchpadTabs
            @scratchpadAdd = scratchpadAdd
            @scratchpadClose = scratchpadClose
            @scratchpadWindow = scratchpadWindow
            
            @scratchpadClose.addEventListener 'click', =>
                @scratchpadWindow.close()
            @scratchpadAdd.addEventListener 'click', =>
                @addTab()
            @scratchpadTabs.addEventListener 'close', =>
                @totalScratchpads--
            
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
            
            @scratchpadClose.removeEventListener 'click'
            @scratchpadAdd.removeEventListener 'click'
            @scratchpadTabs.destroy true, true
            @scratchpadAdd.destroy true, true
            @scratchpadClose.destroy true, true
            
            @scratchpadWindow.destroy true, true
            return
            
        addTab: ->
            @totalScratchpads++
            
            generateTab = =>
                new_editor = new apf.textarea
                    id: "scratchpad#{@totalScratchpads}Code"
                    flex: 1
                    realtime: true
                    border: 0
                    showprintmargin: false
                    printmargincolumn: 0
                    width: 780
                    height: 400
                
                new_page = new apf.page
                    id: "scratchpad#{@totalScratchpads}"
                    caption: "Scratch Pad #{@totalScratchpads + 1}"
                    name: "scratchpadPage#{@totalScratchpads}"
                    closebtn: true
                    childNodes: [
                        new_editor
                    ]
                    
                return new_page
                
            @scratchpadTabs.appendChild generateTab()
)