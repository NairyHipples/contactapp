# contactapp
Jonatan Östling.
Assignment for my webdevelopment course.
This app is using MongoDB, MongoJS, Express, AngularJS, NodeJS, Body-Parser, jQuery and Bootstrap.

This is a contact list app, that helps you store update and delete contacts in a MongoDB database.

Unpack this project in which ever folder you want. Open up three command prompts.

1st prompt: Go in your mongodb folder on your pc via the prompt and when you are in the bin folder type and enter "mongod" to start the database.

2nd prompt: Same as the first prompt only now type and enter "mongo", and then "use contactlist" to use the database used for this project.

3rd prompt: Go into the project folder via the prompt and type and enter "node server.js" and you're up and running this application!

//SIDENOTE
There is a bug when pressing on 'edit' (pencil) to edit a contact, and then pressing on "add" (plus sign) so that you add the already existing contact.
This app works totally fine when you just press "add" (plus sign) when adding a new contact. After you've edited a contact, you should press "update" (check mark), and not on "add" (plus sign).
