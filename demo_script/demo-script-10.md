See how the changes proposed earlier aren’t reflected here?  That’s because we checked out the master branch, and those changes hadn’t been merged from the feature branch yet.

Let’s just make a few edits.  I'll use VI to keep from too much context switching....

    _edit the file in VI_

    _add I think that this is a great file _

    _Save the file_

Now let’s look at Git status once again…

    _git status_

Now we see that README.md has been modified on this branch.

But nothing has been staged for commit.

Now that we know what the staging area is, let's add README.md to our staging area with the git add command.

    _git add README.md_

Now if we use git status again, we can see that there are changes staged for commit

    _git status_

Let’s commit them to our local repository with the commit command.  Don’t forget the -m argument and to leave a detailed commit message

    _git commit -m ‘Updating README.md for awesomeness'_

One last look at git status…

    _git status_

we have no changes in our local repository to stage or commit.

Time to push our changes up to GitHub!

Git knows about our repository on GitHub because when we used the clone command, git automatically created a reference to it, called a remote.

If you’re interested, you can see which remotes are configured in your repository using the git remote -v command

    _git remote -v_

the term on the left is an alias for the remote so we don’t have to type out the entire URL.  Let’s push to origin using the push command

To send our changes to a remote repository, we use the git push command.  
