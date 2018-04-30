And there’s our new version of README.md

And that’s how Git and GitHub work together!!

#### Merge conflicts

So if you remember earlier, we had some other edits to the README.md file that we made from inside GitHub.  Let’s go look at that pull request

    _open earlier pull request_

Rut roh.  There’s conflicts, whatever those are.

A conflict occurs when there are two commits that attempt to modify the same line in a given file.

Let’s take a look

    _click Resolve conflicts_

Generally good development practice and communication can prevent the vast majority of conflicts from developing, but they’re not completely unavoidable.

in this case, GitHub is showing us where it thinks the conflicts are

I can resolve them by editing the file to choose one or the other of the versions, or even combining them

In this case I think I like my version better, so I’m going to delete the version on master

    _delete everything  between the ===s and the ___master_
    _delete the top conflict marker_

And now mark it as resolved

    _click mark as resolved_

and commit my changes

Now I can merge the Pull Request!

    _click merge pull request_

    _click confirm merge_

Sweet.  Now when I look at the README.md file on the master branch

    _click code_

I can see that my changes were applied.
