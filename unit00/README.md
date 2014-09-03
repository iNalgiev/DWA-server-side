# Preparation

check your mail!

# Classroom Activities

## Checklist

1. **Teaching material check.** Can each student see the instructions for the first two weeks?
1. **Software download check.** Does each student have the required software installed -and configured?

Software:
- [Webstorm](http://www.jetbrains.com/webstorm/) + license (see your mail)
- [vagrant box](https://github.com/theotheu/vagrant-dev)
- [putty (windows)](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) or [iterm2 for mac](http://iterm2.com/)
Niet meer nodig als je de git shell (van github) gebruikt!
- github gui client for [windows](https://windows.github.com/) or [mac](https://mac.github.com/)
- [mysql workbench](http://www.mysql.com/products/workbench/)
- [robomongo](http://robomongo.org/)
- [firefox](https://www.mozilla.org/nl/firefox/new/)
- [chrome](http://www.google.nl/intl/nl/chrome/browser/)


## Install and initialize virtual machine

1. Follow the steps in [this README]
(https://github.com/theotheu/vagrant-dev/blob/master/README.md)
1. Leave the virtual machine up and running (or start it again).

## Make sure you understand the directory mapping. 

1. Go to the home directory on the virtual machine: ```cd ~``` 
(your home directory is /home/vagrant!)
1. In this directory create a test.txt file: ```touch test.txt```
1. Now find this test file on your host machine 
(using the command line and a file explorer).

## Clone your private SERVER-SIDE repo to your local machine

1. In your local virtual machine go your home (~) directory. 
1. On github.com navigate to your the private repo for the SERVER course.
1. Copy the clone url from this page (make sure to copy the https version).
1. On the command line of your local machine clone your remote repo by:
  
  ```
  git clone <paste the clone url here>
  ```

You'll probably get a warning that the repo is empty. No problem.

## Download material from Unit 0
 
1. On your local machine dive into the repo you just cloned. 
1. Download the zip-archive 'unit0' and extract it to into this directory.
1. Run ```git status``` and check that all files are untracked
1. Add all files to the local repo by running ```git add .```
1. Run ```git status``` again to see the effect (you should get in the habit
of running this command if you're planning to use the command line for git).
1. Now commit the files by running ```git commit -m "Initial commit"```
1. Your files are committed to your local repo only. If you want to show 
your files to us, you should commit them to the remote repo:
```git push```
1. Check your remote repo on github.com to check that all files are there.

## Clone your private CLIENT-SIDE repo to your local machine

1. Same workflow as server-side.

## Adding unit01 from server-side and client-side to the correct repo 

1. Unzip unit01 for the server-side course and unit01 for the client-side
   course in the correct repos.
1. Add the files and commit them to your local repo, and push them to 
 the remote repo on github.com.

## 'Handing in'

## Practice running node on your vagrant machine

## Practice deployment on server3


## Test deploy

1. Deploy the folder and its content to server3
1. Copy the url to test.html from a browser and paste it in the form below.  



# Links
[Node.js installation manual](http://goo.gl/19fIOu)
