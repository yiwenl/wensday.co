// copyFolder.js

const fs = require('fs-extra');
const path = require('path');


const src = path.resolve(__dirname, '../dist/assets');
const dist = path.resolve(__dirname, '../assets');

const srcIndex = path.resolve(__dirname, '../dist/index.html');
const distIndex = path.resolve(__dirname, '../index.html');


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


const copyIndex = () => new Promise((resolve, reject) => {
	fs.copy(srcIndex, distIndex, err => {
		if(err) {
			reject(err);
		}

		resolve();
	});
});




emptyDist()
.then( copyAssets )
.then( copyIndex )
.then( ()=> {
	console.log('All Done');
})
.catch(err => {
	console.log('Error:', err);
});