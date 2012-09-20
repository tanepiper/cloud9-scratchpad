Cloud9 Scratchpad Extension
===========================

This is a simple extension to add a scratchpad window to Cloud9. If you are
refactoring code, it makes it much easier to copy and paste blocks of code
around, rather than having to create untitled files or Alt-Tab between Cloud9
and a local text editor

Installation
------------

This extension works with c9.io and with self-hosted copies of Cloud9 (either via
cloning `https://github.com/ajaxorg/cloud9` or `npm install cloud9`). To install
it, open the `Tools -> Extension Manager` window in Cloud9, and enter the extension
path:

    https://github.com/lennartcl/cloud9-scratchpad

or

    ext/scratchpad/scratchpad

for the self-hosted version.

Click add.  You can now open the window via the View menu.

Shortcut Keys & Command
-----------------------
This extension comes with the `scratchpad` command that you can type into the
command area to launch the window.

You can also add shortcut keys to your `ext/keybindings_default` files.  Edit
`default_win.js` or `default_mac.js` depending on your platform.  To enable
it add the following:

    return keys.onLoad({
        "ext" : {
            "scratchpad": {
                "scratchpad": "Ctrl-Shift-L"   
            }
        }
    })

For the Mac, use `Command-Option-L`, or choose your own key shortcuts.

Author: Tane Piper (@tanepiper)

Screenshot
----------
![A picture of Scratchpad](http://dl.dropbox.com/u/147175/scratchpad.png)
