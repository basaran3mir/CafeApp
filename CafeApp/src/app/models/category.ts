export class Category {
    private _id: number = 0;
    private _image: string = '';
    private _name: string = '';

    constructor(id: number, image:string, name: string) {
        this._id = id;
        this._image = image;
        this._name = name;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

}
