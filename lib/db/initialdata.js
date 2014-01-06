'use strict';

var mongoose = require('mongoose'),
    Service = mongoose.model('Service');

//Clear old things, then add things in
Service.find({}).remove(function() {
	Service.create({
		name : 'Storage',
		info : 'Used for both personal storage (like backups) and to pass data.',
		url: 'http://samweiss.lan/storage'
	}, {
		name : 'Torrent',
		info : 'The torrent web client.',
		url: 'http://samweiss.lan:8112'
	}, function(err) {
			console.log('Finished populating the initial available services');
		}
	);
});
