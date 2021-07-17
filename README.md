# LaDebug 🐞 JulySlam JavaScript Contest - Starter 
### A starter repo for LaDebug July Slam JavaScript contest. Use this repo to quickly setup the directory structure and files. It is highly advised to go through the document thoroughly.

<br>

## Getting started 🤸‍♂️
- Use the GitHub Classroom link to create a private repo - https://classroom.github.com/a/bqTxlaR3
- Clone the repo from your profile using `git clone https://github.com/<your-username>/julyslam-js-todo-<your-username>` 

<hr>

## About the assessment 🎈
ToDo lists are a nice place to start implementing your *web development concepts*. Given the functionality of a sophisticated ToDo list: **creating new ToDos, 
deleting older ones, modifying the existing ones**. To implement these functions, we need JavaScript.

There is a lot to experiment. You can add animations, AJAX, make use of storages and APIs, and a lot more.

**Your code should let the user do the following:**

1. **add new ToDos**
2. **modify existing ToDos**
3. **delete existing ToDos**

You are free to build up on it, and add some additional functionality like having a weather widget ☁.

**Directory Structure**

📄 index.html *-- HTML code goes here*

📄 README.md *-- Read Me file, no changes required*

📁 scripts *-- JS files will be stored here*

&nbsp;→&nbsp;&nbsp; 📄 core.js *-- JS code goes here*

📁 styles *-- CSS files will be stored here*

&nbsp;→&nbsp;&nbsp; 📄 style.css *-- CSS goes here*

📁 res *-- All static resources (images, docs, etc.) will be stored here*

&nbsp;→&nbsp;&nbsp; 📄 favicon_128x128.png *-- Default 128x128 favicon*

📁 vendor *-- If you are using any libraries and not using a CDN*

📁 misc *-- Anything that does not fit into other directories*
<hr>

## Rules & Guidelines 📝
1. **Good coding practices** and conforming to **coding standards** is a plus 📚.
2. Use of **[jQuery](https://jquery.com/)** should be **avoided**. Vanilla JS is cool 😎!
3. Using Google (and Stack Overflow) is **allowed** ✅; however, significant **plagiarism will 
   lead to disqualification** ❌.
4. Use of **libraries** is **allowed**, but should be **avoided**. Try to use in-built JS methods 🏹.
5. Write **good commit messages**. We'll review your commit history ⏳.
6. This is **not a CSS contest**, and we do not expect you to write a lot of CSS. You can skip CSS
   altogether, but a little CSS is always nice 😉.
7. ~~Javascript~~❌ **JavaScript** ✅
8. ~~Github~~❌ **GitHub**✅
9. You can use **any code editor/IDE** that you like. As long as your code works, editor/IDE does not matter 💻.

<hr>


## Suggested Readings 📕
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JS Coding Best Practices & Standards](https://gist.github.com/antonrogov/1216380/21800f463af3d3a98e98083c4bc109e44f981ef4)
- [JS Glossary](https://www.codecademy.com/articles/glossary-javascript)
- [HTML5 Coding Standards](https://www.w3schools.com/html/html5_syntax.asp)
- [CSS Coding Standards](https://docs.ckan.org/en/ckan-2.7.3/contributing/css.html)

<hr>

## Recommended Dev Environment 👨‍💻
*This section is subjective. Although, I use this environment setup, and I recommend it - it is a matter of personal preference.
You can be an amazing coder and still use Vi or Notepad*
- Editor 🖥: 
  - [Visual Studio Code](https://code.visualstudio.com/download)
- Plugins 🔌:
  - [Live Server by Ritwick Dey](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  - [Quokka.js by Wallaby.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)
  - [Bracket Pair Colorizer by CoenraadS](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
  - [Thunder Client by Ranga Vadhineni](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
  - [JS & CSS Minifier by olback](https://marketplace.visualstudio.com/items?itemName=olback.es6-css-minify)
- Theme & Icon Pack 🎨:
  - Material Theme Darker
  - Material Product Icons

<hr>

## Coding Guidelines 📑
### 1. Be generous with comments

Bad Code 👎:  
```js
var flag = 1;
var iter = 0;

while(flag){
	doSomething(flag);
	++iter;
}

console.log(iter);
```
Good Code 👍:
```js
var flag = 1; // Set flag to 1
var iter = 0; // Set iter to 0

while(flag){
	doSomething(flag); // Check if flag status has changed
	++iter;            // Increment iter if status not changed
}

console.log(iter);    // Print the iter value
```
### 2. Use consistent case throughout your documents.

Bad Code 👎:  
```js
var foo_bar = "Bad example";
var fooBar  = "You should avoid it";
```
Good Code 👍:
```js
var fooBarA = "Consistent case";
var fooBarB = "is more readable";
```

### 3. Use user-friendly names for variables, functions, and classes.

Bad Code 👎:  
```js
var x = { 
		"javascript": "is amazing", 
		"best practice": "user-friendly names" 
		};

console.log(x["javascript"]);

```
Good Code 👍:
```js
var json = { 
		"javascript": "is amazing", 
		"best practice": "user-friendly names" 
		};

console.log(json["javascript"]);
```

### 4. Use proper and consistent indentations and spacing.

Bad Code 👎:  
```js
function thisIsAnExample( args ){
	var iter=0;
	var iterSecondary = 1;
	var iterTertiary= 2;
	
	return iter+ iterSecondary + iterTertiary;
}
```
Good Code 👍:
```js
function thisIsAnExample(args){
	var iter = 0,
		iterSecondary = 1,
		iterTertiary = 2;
	
	return iter + iterSecondary + iterTertiary;
}
```
