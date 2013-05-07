# An Angular Directive Howto presentation.

## follow along

Currently running it on a heroku instance: [http://vast-reaches-2252.herokuapp.com](http://vast-reaches-2252.herokuapp.com).

It may take 15-20 sec to run if that instance was idle (free heroku instance goes to sleep after a few minutes of inactivities).

## run it locally:

Get the code:

```bash
git clone https://github.com/sebastienwindal/AngularDirectivesHowTo.git
```

then from the ```AngularDirectivesHowTo``` folder, install local dependency :

```bash
npm install
```

The you have multiple options:


### node

run from the ```AngularDirectivesHowTo``` folder

```bash
node web.js
```

and open [http://localhost:5000/](http://localhost:5000/) on your brwoser.

### Grunt

from the ```AngularDirectivesHowTo``` folder

```bash
grunt server
```

### serve static pages

From the ```AngularDirectivesHowTo/app``` folder you can run a web server of your choice...

```bash
python -m SimpleHTTPServer
```

or if you have node-static installed (```npm install -g node-static```):

```bash
static
```

