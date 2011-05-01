define (require, exports, module) ->
    ide = require 'core/ide'
    ext = require 'core/ext'
    util = require 'core/util'
    dock = require 'ext/dockpanel/dockpanel'
    editors = require 'ext/editors/editors'
    markup = require 'text!ext/scratchpad/scratchpad.xml'
    
    return ext.register 'ext/scratchpad/scratchpad',
        name: 'Scratchpad'
        dev: 'Tane Piper'
        type: ext.GENERAL
        alone: yes
        markup: markup
        hotitems: {}
        nodes: []
        
        totalScratchpads: 0
        currentScratch: null
        
        hook: ->     
            sectionPad = dock.getSection "scratchpad"
            dock.registerPage sectionPad, null, =>
                ext.initExtension @
                return scratchpad0
            ,
                primary:
                    backgroundImage: "/static/style/images/debugicons.png"
                    defaultState: { x: -6, y: -217 }
                    activeState: { x: -6, y: -217 }
            return
            
        init: ->
            @tabScratchpad = tabScratchpad
            
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
            @nodes = []
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
                
            @tabScratchpad.appendChild generateTab()
            return
