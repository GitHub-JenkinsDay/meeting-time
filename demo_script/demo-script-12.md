At this point we could all collaborate in determining whether the proposed changes met
requirements and were ready to merge, but for now I'll just merge it myself

  _click Merge Pull Request_
  _click Confirm Merge_

    _click on the code tab_

Now when we look at the master branch, we see our changes

We can delete our new branch now, because we’re done integrating the new ‘feature’

    _click branches_

    _click trash next to feature A_

But how to synch up our Git client with the changes in the GitHub version of the repository?

Easy, with the Git pull command

    _return to terminal_

First, switch to the master branch with the git checkout command:

    _git checkout master_

No new changes in our world here

Just for fun, let’s see which branches our local repository thinks are active with the git branch command

    _git branch -v_

Our featureA branch is still here.  Hmm.  And if I look at the README.md file

    _cat README.md_

it looks like we’re not in synch with the GitHub version…

We fix that with the git pull command.  Just like push, but in reverse.

    _git pull origin master_

Yup, there’s some updates…

    _cat README.md_
