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
            
            @scratchpadClose.addEventListener 'click', =>
                @scratchpadWindow.close()
                
            @scratchpadAdd.addEventListener 'click', =>
                @addTab()
            
        init: ->
            
            @scratchpadTabs = scratchpadTabs
            
            ###
            @scratchpadTabs.addEventListener 'focus', (e) =>
                console.log 'focus', e
                e.currentTarget.enable()
            @scratchpadTabs.addEventListener 'beforeswitch', =>
                console.log 'beforeswitch', arguments
            @scratchpadTabs.addEventListener 'afterswitch', =>
                console.log 'afterswitch', arguments
            @scratchpadTabs.addEventListener 'close', =>
                console.log 'close', arguments
            ###
            @scratchpadAdd = scratchpadAdd
            
            @scratchpadWindow = scratchpadWindow
            @scratchpadClose = scratchpadClose
            
            @currentScratch = scratchpad0Code
            
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