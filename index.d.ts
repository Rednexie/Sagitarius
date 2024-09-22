import Datastore from '@seald-io/nedb';

export interface D {
    _id?: string;
    [key: string]: any; // Allow for additional fields
}

export declare class Model {
    // Instance methods
    save(): Promise<D>;
    delete(): Promise<void>;
    toJSON(): D;

    // Static methods
    static find<D>(query: Partial<D>, projection?: Partial<D>): Promise<D[]>;
    static findOne<D>(query: Partial<D>, projection?: Partial<D>): Promise<D | null>;
    static update<D>(query: Partial<D>, update: Partial<D>, options?: Datastore.UpdateOptions): Promise<number>;
    static updateOne<D>(query: Partial<D>, update: Partial<D>, options?: Datastore.UpdateOptions): Promise<D>;
    static remove<D>(query: Partial<D>, options?: Datastore.RemoveOptions): Promise<number>;
    static delete<D>(query: Partial<D>, options?: Datastore.RemoveOptions): Promise<number>;
    static findById<D>(_id: string, projection?: Partial<D>): Promise<D | null>;
    static count<D>(query: Partial<D>): Promise<number>;
    static create<D>(d: D): Promise<D>;
    static delete<D>(query: Partial<D>): Promise<number>;
    static deleteOne<D>(query: Partial<D>): Promise<number>;

    static define(name: string, schema: object, path: string): void;
}
