const concurrently = require('concurrently');

const commands = [
//{ command: 'cd CAMER_TECH-MobileEnd && npx ionic serve', name: 'Ionic', prefixColor: 'blue' },
{ command: 'cd CAMER_TECH-webEnd && npx serve .', name: 'HTML5', prefixColor: 'green' }
];

concurrently(commands, {
prefix: 'name',
killOthers: ['failure', 'success'],
});