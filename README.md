grunt-githooks-commentator
==========================

This skeleton project shows a simple use case of Grunt (with jslint and nodeunit) and githooks to prevent commits that do not pass the automated Grunt tasks. 

In addition, you will receive a spoken message commenting on your commit.

##Setup

Clone the repo, and install with `npm install`. 

Then turn up the volume and make some commits (some that will pass the Grunt tasks, some that will fail), and enjoy!

##Trigger tests manually

To ensure that you don't get absued with bad commits, run `grunt` at any time to manually trigger the grunt tasks.

##Customization

The `passArray` and `failArray` in `hooks_custom_templates/pre-commit.js` hold the messages that will be read out when a commit passes or fails the build tasks.

Apply changes made to this file by running `grunt githooks`.

##Platforms

This project uses the `say` command that is currently only supported on MacOS.
