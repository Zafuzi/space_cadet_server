// Copyright 2020 Sleepless Software Inc. All Rights Reserved
delete require.cache[ module.filename ];	// always reload
const L = require( "log5" ).mkLog( "BUSTLE " )( 5 );	// sleepless super logger shit.
const express = require('express');
const sleepless = require('sleepless');
const DS = require("ds").DS;
const app = express();

// local directory containing this script because the working dir will likely be where the nodes.js server is.
const here = require("path").dirname( module.filename );
L.D( "here=" + here );

app.get("*", (req, res) => {
	res.send(ds);
});

app.post("/", (req, res) => {
	let id = req.body.id;
	let pos = req.body.pos;
	if( id && pos ) {
		ds[id] = pos
		ds.save();	
	} else {
		res.send({FUCK_YOU: "MISSING SOME SHIT YA KNOW"});
	}
});

module.exports = app;
