<h1 align="center">Sagitarius</h1>

## Introduction


Minimal, easy to use, fast Object Document Mapping(ODM) library for NeDB. Supports type-checking and schema validation.


## Installation
```bash
npm install sagitarius
```
```bash
yarn add sagitarius
```
```bash
pnpm add sagitarius
```


## Quick Start
Create and initialize the model:
```js
import { Model } from "sagitarius";
class User extends Model{
    constructor(doc){
        super(doc)
        Object.assign(this, doc);
    }
}
```
Define a schema to be able to perform validation:
```js
User.define("User", {
    username: String,
    age: Number,
});
```


Create a new user:

```js
const user = new User({ username: "Rednexie", age: 18 });
await user.save()
```


Update user properties:

```js
user.age = 19;
await user.save();
```

## API Reference

### Instance Methods
<ul>
<li><a href="#save">save()</a> Saves the new or updated instance to the database.</li>
<li><a href="#delete">delete()</a> Saves the new or updated instance to the database.</li>
<li><a href="#tojson">toJSON()</a> Saves the new or updated instance to the database.</li>
<li><a href="#validate">validate()</a> Saves the new or updated instance to the database.</li>
</ul>

<strong id="save">async interface.save()</strong>
<br>Creates a new instance of the model with the provided document.


<strong id="delete">async interface.delete()</strong>
<br>Deletes the document from the database.


<strong id="tojson">async interface.toJSON()</strong>
<br>Converts the document from the database to a JavaScript Object.


<strong id="validate">async interface.validate()</strong>
<br>Checks the datatypes and properties of the document. Returns true if valid, false if not.



### Model Methods

<ul>

<li><a href="#async-modeldefinename-schema-path" class="method-link">Model.define(name, schema, path?)</a> - Creates a new database model.</li>
<li><a href="#async-modelvalidated" class="method-link">Model.validate(d)</a> - If the schema exists, checks if the document is valid.</li>

<li><a href="#async-modelcreated" class="method-link">Model.create(d)</a> - Creates a document and saves it to the database.</li>
<li><a href="#async-modelcreatemanyd" class="method-link">Model.createMany(d[])</a> - Creates multiple documents and saves them to the database.</li>
<li><a href="#async-modelfindquery" class="method-link">Model.find(query)</a> - Finds matching document instances in the database.</li>
<li><a href="#async-modelfindonequery" class="method-link">Model.findOne(query)</a> - Finds a matching document from the database or returns null.</li>
<li><a href="#async-modelupdatequeryd" class="method-link">Model.update(query, d)</a> - Finds matching documents from the database and updates them with the given document.</li>
<li><a href="#async-modelupdateonequeryd" class="method-link">Model.updateOne(query, d)</a> - Finds a matching document from the database or returns null.</li>
<li><a href="#async-modeldeletequery" class="method-link">Model.delete(query)</a> - Finds matching documents and removes them from the database.</li>
<li><a href="#async-modeldeleteonequery" class="method-link">Model.deleteOne(query)</a> - Finds a matching document and removes it from the database.</li>
<li><a href="#async-modelexistsquery" class="method-link">Model.exists(query)</a> - Checks if any document matching the query exist in the database.</li>
<li><a href="#async-modelcountquery" class="method-link">Model.count(query)</a> - Counts how many matching documents exists in the database.</li>
</ul>



<h4 id="modeldefine">async Model.define(name, schema, path?)</h4>
<p>Initializes the model and creates a corresponding database. You can customize database name and path. If you want to do schema validation and type-checking, you have to define a schema.</p>

<h4 id="modelvalidate">async Model.validate(d)</h4>
<p>Checks the datatypes and properties of the document with the model's schema. Returns true if valid, false if not.</p>
<h4 id="modelcreate">async Model.create(d)</h4>
<p>Creates a document after validating it if schema exists, without constructing a class.</p>
<h4 id="modelcreatemany">async Model.createMany(d[])</h4>
<p>Bulk creates multiple documents after validating each without constructing a class.</p>
<h4 id="modelfind">async Model.find(query)</h4>
<p>Finds all documents that are matching the query. If none found, returns an empty array.</p>
<h4 id="modelfindone">async Model.findOne(query)</h4>
<p>Finds the first element that is matching the given query. If none found, returns null</p>
<h4 id="modelupdate">async Model.update(query, d)</h4>
<p>Updates all documents that match the query, with the given document.</p>
<h4 id="modelupdateone">async Model.updateOne(query, d)</h4>
<p>Updates the first document that matches the query, with the given document.</p>
<h4 id="modeldelete">async Model.delete(query)</h4>
<p>Deletes all documents that match the query.</p>
<h4 id="modeldeleteone">async Model.deleteOne(query)</h4>
<p>Deletes the first document that matches the query.</p>
<h4 id="modelexists">async Model.exists(query)</h4>
<p>Counts all documents that match the query. Returns true if the number is bigger than 0, false if not.</p>
<h4 id="modelcount">async Model.count(query)</h4>
<p>Counts all documents that match the given query.</p>

