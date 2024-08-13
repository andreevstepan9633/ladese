const url = new URL(window.location.href);
url.searchParams.set('key', 'value');
console.log(url.href); // Logs the modified URL with the added query parameter
