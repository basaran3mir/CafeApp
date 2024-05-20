export class Coffee {
    private _id: number = 0;
    private _image: string = '';
    private _name: string = '';
    private _price: number = 0;
    private _onDiscount: boolean = false;
    private _newPrice: number = 0;

    constructor(id: number, name: string, price: number, onDiscount: boolean) {
        this._id = id;
        this._image = "assets/images/coffee.png";
        this._name = name;
        this._price = price;
        this._onDiscount = onDiscount;
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

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
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
    }

    setDiscount(percent: number) {
        this._newPrice = parseFloat((this._price - this._price / percent).toFixed(2))
      }

}
