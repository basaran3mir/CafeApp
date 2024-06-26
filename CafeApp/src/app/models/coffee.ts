export class Coffee {
    private _id: number;
    private _image: string;
    private _categoryId: number;
    private _name: string;
    private _price: number;
    private _inStock: boolean;
    private _onDiscount: boolean;
    private _newPrice: number;

    constructor(id: number, image:string, categoryId: number, name: string, price: number, inStock: boolean) {
        this._id = id;
        this._image = image;
        this._categoryId= categoryId;
        this._name = name;
        this._price = price;
        this._inStock = inStock;
        this._onDiscount = false;
        this._newPrice = this._price;
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

    get categoryId(): number {
        return this._categoryId;
    }

    set categoryId(value: number) {
        this._categoryId = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get inStock(): boolean {
        return this._inStock;
    }

    set inStock(value: boolean) {
        this._inStock = value;
    }

    get onDiscount(): boolean {
        return this._onDiscount;
    }

    set onDiscount(value: boolean) {
        this._onDiscount = value;
    }

    get newPrice(): number {
        return this._newPrice;
    }
    
    set newPrice(value: number) {
        this._newPrice = value;
        this._onDiscount = true;
    }

}
