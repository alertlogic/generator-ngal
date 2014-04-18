> [Yeoman](http://yeoman.io) generator


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-ngal from npm, run:

```
$ npm install -g generator-ngal
```

### Getting To Know ngal

```
$yo ngal Name
```
Creates a complete module named Name, the below commands will allow you to generate single sections of code.
```
$yo ngal:config Name
```
```
$yo ngal:controller Name
```
```
$yo ngal:directive Name
```
```
$yo ngal:main Name
```
```
$yo ngal:service Name
```
```
$yo ngal:version Name
```
