self.addEventListener('install', event => {
    console.log('Service worker installing...');
    // Add a call to skipWaiting here if you want to trigger
    // the update of the service worker as soon as it's installed
});

self.addEventListener('activate', event => {
    console.log('Service worker activating...');
    // Do some work or clean up after activation
});

self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
    // You can add custom fetch logic here
});
