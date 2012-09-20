// Wrapped in JavaScript, to avoid cross-origin restrictions, created using wrap-in-js.sh
define(function() {
return '<a:application xmlns:a="http://ajax.org/2005/aml">\n' +
'    <a:window\n' +
'        id = "scratchpadWindow"\n' +
'        title = "Scratchpad"\n' +
'        center = "true"\n' +
'        modal = "false"\n' +
'        buttons = "close"\n' +
'        kbclose = "true"\n' +
'        width = "800"\n' +
'        height = "500">\n' +
'        \n' +
'        <a:tab id="scratchpadTabs" height="400">\n' +
'            <a:page id="scratchpad0" caption="Scratchpad 1">\n' +
'                <a:textarea\n' +
'                    id="scratchpad0Code"\n' +
'                    flex="1"\n' +
'                    realtime="true"\n' +
'                    border="0"\n' +
'                    showprintmargin="false"\n' +
'                    printmargincolumn="0"\n' +
'                    width="780"\n' +
'                    height="400" />\n' +
'            </a:page>\n' +
'        </a:tab>\n' +
'        <a:divider />\n' +
'        <a:hbox pack="start" padding="5" edge="10 10 5 10">\n' +
'            <a:button id="scratchpadAdd">Add New Pad</a:button>\n' +
'            <a:button id="scratchpadClose">Close</a:button>\n' +
'        </a:hbox>\n' +
'    </a:window>\n' +
'</a:application>\n' +
'';});
