 export const planOptions = {
    yearly: { Arcade: { price: 90 }, Advanced: { price: 120 }, Pro: { price: 150 } },
    monthly: { Arcade: { price: 9 }, Advanced: { price: 12 }, Pro: { price: 15 } },
}

export const planImages = {
    Arcade: 'icon-arcade.svg',
    Advanced: 'icon-advanced.svg',
    Pro: 'icon-pro.svg',
}

export const addOnOptions = {
    'Online service': { price: { monthly: 1, yearly: 10 }, description: 'Access to multiplayer games' },
    'Larger storage': { price: { monthly: 2, yearly: 20 }, description: 'Extra 1TB of cloud save' },
    'Customizable Profile': { price: { monthly: 2, yearly: 20 }, description: 'Custom theme on your profile' }
}