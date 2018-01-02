// copyFolder.js

const fs = require('fs-extra');
const path = require('path');


const src = path.resolve(__dirname, '../dist/assets');
const dist = path.resolve(__dirname, '../assets');

console.log(src);
console.log(dist);

const emptyDist = () => new Promise((resolve, reject)=> {
	fs.emptyDir(dist, (err) => {
		if(err) {
			reject();
		}

		resolve();
	});
});


const copyAssets = () => new Promise((resolve, reject) => {
	fs.copy(src, dist, err => {
		if(err) {
			reject(err);
		}

		resolve();
	});
});



emptyDist()
.then( copyAssets )
.then( ()=> {
	console.log('All Done');
})
.catch(err => {
	console.log('Error:', err);
});