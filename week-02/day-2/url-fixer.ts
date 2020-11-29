'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
console.log('Original: ' + url);

url = url.replace('bot', 'odd');

let tempUrl: string[] = url.split('//');
url = tempUrl[0] + '://' + tempUrl[1];
console.log('Final:    ' + url);