import Datastore from '@seald-io/nedb';

export interface D {
    _id?: string;
    [key: string]: any; // Allow for additional fields
}

export interface Schema {
    [key: string]: { new (...args: any[]): any };

}
export declare class Model {
    // Instance methods
    save(): Promise<D>;
    delete(): Promise<void>;
    toJSON(): D;
    validate(): Boolean;
    static find<D>(query: Partial<D>, projection?: Partial<D>): Promise<D[]>;
    static findOne<D>(query: Partial<D>, projection?: Partial<D>): Promise<D | null>;
    static update<D>(query: Partial<D>, update: Partial<D>, options?: Datastore.UpdateOptions): Promise<number>;
    static updateOne<D>(query: Partial<D>, update: Partial<D>, options?: Datastore.UpdateOptions): Promise<D>;
    static remove<D>(query: Partial<D>, options?: Datastore.RemoveOptions): Promise<number>;
    static delete<D>(query: Partial<D>, options?: Datastore.RemoveOptions): Promise<number>;
    static findById<D>(_id: string, projection?: Partial<D>): Promise<D | null>;
    static exists<D>(query: Partial<D>): Promise<boolean>
    static count<D>(query: Partial<D>): Promise<number>;
    static create<D>(d: D): Promise<D>;
    static createMany<D>(arr: D[]):Promise<D[]>
    static delete<D>(query: Partial<D>): Promise<number>;
    static deleteOne<D>(query: Partial<D>): Promise<number>;



    static validate<D>(doc: D): Boolean
    static define(name: string, schema: Schema, path?: string): void;
}
