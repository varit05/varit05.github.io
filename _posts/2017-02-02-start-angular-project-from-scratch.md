---
layout: post
section-type: post
title: Start Angular project from scratch
category: AngularJS
tags: [ 'Angular' ]
---

### Start Angular project from scratch

Well, There are a number of ways to start the Application with Angular(Angular 2). Here I will give you a couple of ways to start an angular app.

### Prerequisite: 

NodeJs [Stable Version](https://nodejs.org/en/)

### 1. Using Angular-CLI

In order to start a project with Angular CLI, you need to Install angular-cli globally by running below command. 

<pre><code data-trim class="c">
npm install -g angular-cli
</code></pre>

To create a new project is as simple as running the below command.

before running below command, Make sure to navigate to the folder in which you need to create an app.
<pre><code data-trim class="c">
ng new my-angular-app
</code></pre>

In above command, my-angular-app is a name of your app. you can give any name instead of it.

my-angular-app folder has all the necessary files to start an angular app.

In order to run the project locally, run the below command.

<pre><code data-trim class="c">
ng serve
</code></pre>

<small>Upon successful build, the app will be hosted on localhost:4200.</small>

### Using Angular2-seed

angular2-seed is a simple starter project demostrating the basic concepts of Angular 2.


Clone or Fork the Github [Angular2-seed](https://github.com/angular/angular2-seed) project and follow the steps written in usage.
