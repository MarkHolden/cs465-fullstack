export interface Trip {
    _id: string, // internal MongoDB PK
    code: string,
    name: string,
    length: string,
    start: Date,
    resort: string,
    perPerson: string,
    image: string,
    description: string,
};