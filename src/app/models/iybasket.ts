export interface BasketItem {
    itemName: string
    itemvalue: number;
}

export class Basket {
    investmentLOB: string | undefined;
    basketHeader: string | undefined;
    basketData: BasketItem[] = [];

    constructor(lob: string, headerName: string) {
    }

    addBasketData(name: string, value: number) {
        let basket: BasketItem = {
            itemName: name,
            itemvalue: value
        }
        try {
            this.basketData.push(basket);
        } catch (error) {
            console.log('failed to add basket item: '+ name + ' for LOB:' + this.investmentLOB);
        } 
    }
}


