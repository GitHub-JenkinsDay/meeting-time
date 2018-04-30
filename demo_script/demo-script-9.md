#### Git

Now it’s time to work with our new repository using Git on our development machines

    _click code tab_

The first thing I’m going to do is to clone my repository using Git

GitHub provides a handy way of getting the necessary URL.

    _click the Clone or download button_

Just copy it to the clipboard

    _click copy_

and now we’re ready to start using Git

    _open terminal_

The first thing we need to do is to clone the repository from GitHub down to our development machine.  We use the Git clone command to do this, supplying the URL to the repository on GitHub

    _git clone     _ctrl-v__

Git creates a new project directory, downloads the files, and sets up the connection between our repository and the one on GitHub.

    _cd DellDemo_
    _ls_
There’s our README.md file.  Not much else at the moment

Remembering our GitHub flow, the first thing to do is to create a feature branch so I can add and edit files without affecting master.

We use the git checkout -b     _branch_name_ command for this

    _git checkout -b featureA_

And now we’re on a new branch!

BTW, anytime we want to find out what’s going on, or where we are in our Git repository, just type git status

    _git status_

That’ll tell you the branch you’re currently working on, as well as whether there are any local changes that might need to be committed.

What's in the README file?

  _cat README.md_
