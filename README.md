# Project1_Report



**a. What server framework did you choose and why?**

**Ans**:  I have used noje.js(v5.7.1) as server framework. 
      Generally, nodejs is very useful where the application (website) 
      needs continuous connections to server and also it is comparatively
      faster than other frameworks.

**b. What client framework did you choose and why?**

**Ans**:  I have used angularjs as client framework. AngularJs is perfect for 
      single-page-application. It provides additional functionalities after creation of MVC
      components. Also, through it's Directives, it is not necessary to manipulate
      the DOM to simulate them.

**c. What aspect of the implementation did you find easy, if any, and why?**

**Ans**:  As growing availibility of information on internet, it was easy to get 
      instruction on both angularjs and node.js to design the required files for
      project implementation.

**d. What aspect of the implementation did you find hard, if any, and why?**

**Ans**:  Connection between backend(node.js) and frontend(angularjs) was quite challenging
      because this was the first time I am creating frontend and backend individually.
      Moreover,deploying the application on heroku was straight forward. But it took long
      to solve some errors encountered during deployement  eventhough they were minor 
      yet difficult to find.

**e. What components OTHER than your client and server framework did you install,**
**if any, and if so, what is their purpose for your solution?**

**Ans**:  After installing nodejs and angularjs, I came to know about Webstorm,So i intalled it.
      In that software I can create both angular and nodejs projects which made the whole
      process comparatively easy.

**f. What Ubuntu commands are required to deploy and run your server?**

**Ans**:  Linux terminal commands were used to deploy the project as listed below:
      heroku login - used to log into heroku account
      git clone <path> - used to create clone folder of github repository
      cd <foldername> - used to step into clone folder
      heroku create <appname> - used to create application on heroku
      git push heroku master - used to push(deploy) the code
      heroku open - used to open or run the created application in browser
