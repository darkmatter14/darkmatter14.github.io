function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    console.log("Taking a break...");
    await sleep(2000);
    console.log("Two seconds later");
}

alert('Before exports');

export class ItemCard {
    constructor(name, description, item_type, stats
        , top, bottom, left, right) {
        this.name = name;
        this.description = description;
        this.item_type = item_type;
        this.stats = stats;
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
}

export let data_list = [
    {
        'Name': 'Scrap Shield',
        'Item_type_stats': ['2', '7', '3'],
        'Effects': 'Add +1 to all HL, Block',
        'Location': 'Blacksmith',
        'Affinities': {
            'top': '',
            'bottom': '',
            'left': '',
            'right': 'Red'
        },
        'Resources': [
            { name: 'Bone', quantity: '3' },
            { name: 'Scrap', quantity: '2' },
            { name: 'Leather', quantity: '3' }
        ],
        'Required': ''
    },
    {
        'Name': 'Bone Axe',
        'Item_type_stats': ['2', '6', '3'],
        'Effects': 'Frail, Savage',
        'Location': 'Bone Smith',
        'Affinities': {
            'top': '',
            'bottom': '',
            'left': 'Red',
            'right': ''
        },
        'Resources': [{ name: 'Bone', quantity: '1' }, { name: 'Organ', quantity: '1' }],
        'Required': ''
    },
    {
        'Name': 'Bone Blade',
        'Item_type_stats': ['2', '6', '2'],
        'Effects': 'Frail',
        'Location': 'Bone Smith',
        'Affinities': {
            'top': '',
            'bottom': '',
            'left': 'Red',
            'right': ''
        },
        'Resources': [{ name: 'Bone', quantity: '1' }],
        'Required': ''
    },
    {
        'Name': 'Bone Club',
        'Item_type_stats': ['2', '6', '5'],
        'Effects': 'Cumbersome',
        'Location': 'Bone Smith',
        'Affinities': {
            'top': '',
            'bottom': '',
            'left': 'Red',
            'right': 'Red'
        },
        'Resources': [{ name: 'Bone', quantity: '3' }],
        'Required': ''
    },
    {
        'Name': 'Bone Dagger',
        'Item_type_stats': ['3', '7', '1'],
        'Effects': 'On perfect hit, gain +1 survival',
        'Location': 'Bone Smith',
        'Affinities': {
            'top': 'Red',
            'bottom': '',
            'left': 'Red',
            'right': ''
        },
        'Resources': [{ name: 'Bone', quantity: '1' }],
        'Required': ''
    },
    {
        'Name': 'Bone Darts',
        'Item_type_stats': ['1', '7', '3'],
        'Effects': 'Frail',
        'Location': 'Bone Smith',
        'Affinities': {
            'top': '',
            'bottom': '',
            'left': 'Red',
            'right': ''
        },
        'Resources': [{ name: 'Bone', quantity: '1' }],
        'Required': ''
    },
    {
        'Name': 'Bone Pickaxe',
        'Item_type_stats': ['1', '8', '2'],
        'Effects': 'Mineral Gathering in Hunt',
        'Location': 'Bone Smith',
        'Affinities': {
            'top': 'Green',
            'bottom': '',
            'left': '',
            'right': ''
        },
        'Resources': [{ name: 'Bone', quantity: '1' }, { name: 'Leather', quantity: '1' }],
        'Required': 'Ammonia'
    }
];

alert('After exports');
demo();
