import { Model } from "./index.js"

class User extends Model{
    constructor(doc){
        super(doc)
        Object.assign(this, doc);
    }
}

User.define('Users', {
    a: String,
    b: String,
    c: String,
})

const user = new User({
    a: 'a',
    b: 'b',
    c: 'c',
})


User.create({
    a: 'string',
    b: 'string',
    c: 1
})