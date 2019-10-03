//---------------------------------------
// SKU data model
//---------------------------------------
export interface SKU {
    itemId: string;
    name: string;
    unitPrice: number;
    image: string;
}

//---------------------------------------
// LineItem data model
//---------------------------------------
export interface LineItem {
    sku: SKU;
    quantity: number;
}

//Assuming this local data is coming from database
export const INVENTORY: SKU[] = [
    {
        itemId: 'abc',
        name: 'Acord Squash',
        unitPrice: 1,
        image: 'assets/fruits/acorn_squash.png'
    },
    {
        itemId: 'bcd',
        name: 'Apple',
        unitPrice: 3,
        image: 'assets/fruits/apple.png'
    },
    {
        itemId: 'cde',
        name: 'Celery',
        unitPrice: 0.4,
        image: 'assets/fruits/celery.png'
    },
    {
        itemId: 'def',
        name: 'Potato',
        unitPrice: 2.50,
        image: 'assets/fruits/potato.png'
    },
    {
        itemId: 'efg',
        name: 'pumpkin',
        unitPrice: 9,
        image: 'assets/fruits/pumpkin.png'
    },
    {
        itemId: 'fgh',
        name: 'Sugar Snap',
        unitPrice: 1,
        image: 'assets/fruits/sugar_snap.png'
    },
    {
        itemId: 'ghi',
        name: 'Zucchini',
        unitPrice: 5,
        image: 'assets/fruits/zucchini.png'
    },
    {
        itemId: 'hij',
        name: 'Harold',
        unitPrice: 3.40,
        image: 'assets/fruits/harold.png'
    },
    {
        itemId: 'ijk',
        name: 'Lettuce',
        unitPrice: 0.90,
        image: 'assets/fruits/lettuce.png'
    }
];