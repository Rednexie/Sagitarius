import NeDB from "@seald-io/nedb";

export class Model{
        
    static async xgetDatabase(){
        if(!this.database){
            this.database = new NeDB({
                autoload: true,
                onload: err => {
                    if(err) throw err;
                },
                filename: this.xgetPathName() + this.xgetModelName() + '.json',
            })
        }

        return this.database;
    }





    static xgetModelName(){
        return Model.modelName;
    }
    static xgetPathName(){
        return Model.pathName || './';
    }
    static xcircularToJSON(doc = {}){
        return JSON.parse(JSON.stringify(doc));
    }


    static define(name, schema, path){
        Model.modelName = name;
        Model.pathName = path;

    }






    // model instance methods

    async save(){
        const db = await Model.xgetDatabase();
        const document = await Model.xcircularToJSON(this)
        if(this && this._id){
            const { numAffected } = await db.updateAsync({ _id: this._id }, document, );
        }
        else{
            await db.insertAsync(document);
        }
        return document;
    }

    async delete(){
        const db = await Model.xgetDatabase();
        const document = await Model.xcircularToJSON(this)
        return await db.removeAsync(document, { multi: false });
    }

    toJSON(){
        return { ...this }    
    }

    // model instance methods



    // Model class methods

    static async find(query, projection){
        const db = await Model.xgetDatabase();
        return await db.findAsync(query, projection)
    }
    static async findOne(query, projection){
        const db = await Model.xgetDatabase();
        return await db.findOneAsync(query, projection)
    }
    static async update(query, update, options) {
        const db = await Model.xgetDatabase();
        const { numAffected } = await db.updateAsync(
          query,
          { $set: update },
          { multi: true, ...options },
        );
        return numAffected;
    }

    static async updateOne(query, update, options) {
        const db = await Model.xgetDatabase();
        const { numAffected } = await db.updateAsync(
          query,
          { $set: update },
          { multi: false, ...options },
        );
        return this.xcircularToJSON(update);
    }

    static async remove(query, options) {
        const db = await Model.xgetDatabase();
        const numRemoved = await db.removeAsync(query, {
          multi: true,
          ...options,
        });
        return numRemoved;
    }

    static async delete(query, options) {
        const db = await Model.xgetDatabase();
        const numRemoved = await db.removeAsync(query, {
          multi: true,
          ...options,
        });
        
        
        return numRemoved;        
    }

    static async findById(_id, projection) {
        const db = await Model.xgetDatabase();
        return await db.findOneAsync({ _id }, projection);
    }

    static async count(query){
        const db = await Model.xgetDatabase();
        return await db.countAsync(query);
    }

    static async create(d){
        const db = await Model.xgetDatabase();
        if(d && d._id){
            await db.updateAsync({ _id: d._id }, d);
            return  Model.xcircularToJSON(d)
        }
        else{
            await db.insertAsync(d);
            return Model.xcircularToJSON(d);
        }
    }

    static async delete(query){
        const db = await Model.xgetDatabase();
        return await db.removeAsync(query, {multi: true});
    }
    static async deleteOne(query){
        const db = await Model.xgetDatabase();
        return await db.removeAsync(query, {multi: false});
    }
    




}


