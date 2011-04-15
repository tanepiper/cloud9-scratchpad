Cloud9 Scratchpad Extension
==================================

This is a simple extension to add a scratchpad window to Cloud9. If you are
refactoring code, it makes it much easier to copy and paste blocks of code
around, rather than having to create untitled files or Alt-Tab between Cloud9
and a local text editor

Installation
------------

This extension currently only works with self-hosted copies of Cloud9 (either via
cloning `https://github.com/ajaxorg/cloud9` or `npm install cloud9`).  Third-party
extensions are not supported on c9.io.

    git clone git://github.com/tanepiper/cloud9-scratchpad.git cloud9/client/ext/scratchpad

Open the `Windows -> Extension Manager` window, put the path to the extension in
    ext/scratchpad/scratchpad

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