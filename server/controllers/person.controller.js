const Person = require('../models/person.model')
module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({message: "Hello World"});
}
module.exports.createPerson = (request, response) => {
    // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Person.create(request.body) //This will use whatever the body of the client's request sends over
        .then(person => response.status(200).json(person))
        .catch(err => response.status(404).json(err));
}