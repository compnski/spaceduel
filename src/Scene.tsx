import React from "react";
import ReactDOM from "react-dom";
import Matter from "matter-js";
import MatterAttractors from "matter-attractors";
import Mousetrap from "mousetrap";
import decomp from "poly-decomp";

declare const window: any;

window.decomp = decomp;


//import MatterWrap from 'matter-wrap';

var heading = 0;
const thrusterForce = 0.001;
const angularVelocityDelta = 0.01;
const shipVertices = [{'x':0, 'y':10}, {'x':20, 'y':20}, {'x':20, 'y':0}];

class Scene extends React.Component {
    constructor(props:any) {
	super(props);
	this.state = {};
    }

    componentDidMount() {
	Matter.use(
	    'matter-wrap', // not required, just for demo
	    'matter-attractors', // PLUGIN_NAME
	    'matter-collision-events'
	);

	var Engine = Matter.Engine,
	    Render = Matter.Render,
	    Runner = Matter.Runner,
	    Body = Matter.Body,
	    //Common = Matter.Common,
	    //MouseConstraint = Matter.MouseConstraint,
	    //Mouse = Matter.Mouse,
	    World = Matter.World,
	    Bodies = Matter.Bodies;

	// create engine
	var engine = Engine.create(),
	    world = engine.world;

	// create renderer
	var render = Render.create({
	    element: document.body,
	    engine: engine,
	    options: {
		width: Math.min(document.documentElement.clientWidth, 1024),
		height: Math.min(document.documentElement.clientHeight, 1024),
		wireframes: false,
	    }
	});

	Render.run(render);

	// create runner
	var runner = Runner.create();
	Runner.run(runner, engine);

	// add bodies
	world.bodies = [];
	world.gravity.scale = 0;

	//engine.timing.timeScale = 1.5;

	var radius = 5;

		function spawnBody(x:number, y:number, vertices:any, mass:number, fillColor:string) {
	    return Bodies.fromVertices(
		x, y,
		vertices,
		{
		    render: {
			fillStyle: fillColor,
		    },
		    mass: mass,
		    frictionAir: 0,
		    plugin: {
			attractors: [
			    // there is a built in helper function for Newtonian gravity!
			    // you can find out how it works in index.js
			    MatterAttractors.Attractors.gravity
			],
		    }
		}
	    );
	}
	var body = spawnBody(450, 300, shipVertices, 1, 'red');
	Body.setAngle(body, Math.PI/2);
	Body.setVelocity(body, {x:5, y:0});
	World.add(world, body);

	
	var blueBody = spawnBody(250, 400, shipVertices, 1, 'blue');
	Body.setAngle(blueBody, Math.PI/2);
	Body.setVelocity(blueBody, {x:0, y:-5});
	World.add(world, blueBody);

	
	var star = Bodies.circle(500,500,20, { mass: 20000, frictionAir:0.5, plugin: {
	    attractors: [
		MatterAttractors.Attractors.gravity

	    ]}});
	World.add(world, star);

	Mousetrap.bind("left", function() {
	    //Body.rotate(body, -0.1)
	    //Body.setAngle(body, body.angle % (2*Math.PI))
	    Body.setAngularVelocity(body, body.angularVelocity - angularVelocityDelta);
	    //console.log(body.angle);
	})
	Mousetrap.bind("right", function() {
	    Body.setAngularVelocity(body, body.angularVelocity + angularVelocityDelta);
	})

	
	Mousetrap.bind("up", function() {
	    var force = -thrusterForce;
	    Body.applyForce(body, body.position, {
		x: Math.cos(body.angle) * force,
		y: Math.sin(body.angle) * force
	    });
	});

	Mousetrap.bind("down", function() {
	    var force = thrusterForce;
	    Body.applyForce(body, body.position, {
		x: Math.cos(body.angle) * force,
		y: Math.sin(body.angle) * force
	    });
	});


	Mousetrap.bind(["backspace", "space"], function() {
	    console.log("Fire!");
	    

	});

	Matter.Events.on(engine, 'collisionStart', function(event) {
	    console.log(event.pairs.slice());
	    let a = event.pairs[0].bodyA;
	    let b = event.pairs[0].bodyB;
	    console.log([a,b]);
	    if (a != null && b != null) {
		a.render.fillStyle = 'green';
		b.render.fillStyle = 'green';
	    }
	    // check bodies, do whatever...
	});
		var lastDotAt = 0;
		Matter.Events.on(runner, "tick", function(event){
			if (event.timestamp > lastDotAt + 100) {
				console.log(event.timestamp);
				lastDotAt = event.timestamp;
				var dot = Bodies.circle(body.position.x, body.position.y, 2, {
					collisionFilter: { mask: 0 },
					isSensor: true,
					mass: 0,
					isStatic: true,
					render: { fillStyle: 'red' },
				})
				dot.mass = 0;
				console.log(dot)
				World.add(world, dot)
				window.setTimeout(function() {
					World.remove(world, dot)
				}, 1000)
			}
			/*
			//{timestamp: 67249.99999999668, name: "tick", source: {…}}
			//name: "tick"
			//source:
		//correction: 1
		//counterTimestamp: 40036.375
		//delta: 16.666666666666668
		//deltaHistory: (60) [6.940000000002328, 6.9539999999979045, 6.9539999999979045, 6.949000000000524, 6.955000000001746, 6.944000000003143, 6.958999999995285, 6.980000000003201, 6.927999999999884, 6.936999999998079, 6.957000000002154, 6.966999999996915, 6.930000000000291, 6.946000000003551, 6.951999999997497, 6.974000000001979, 6.924999999995634, 6.974000000001979, 6.936999999998079, 6.93300000000454, 6.949000000000524, 6.951999999997497, 6.968000000000757, 6.947999999996682, 6.947000000000116, 6.938999999998487, 6.953000000001339, 6.944000000003143, 6.955999999998312, 6.947000000000116, 6.968000000000757, 6.953000000001339, 6.957999999998719, 6.936000000001513, 6.977999999995518, 6.927000000003318, 6.94999999999709, 6.961000000002969, 6.934999999997672, 6.944999999999709, 6.961000000002969, 6.949000000000524, 6.97099999999773, 6.931000000004133, 6.940999999998894, 6.955999999998312, 6.945999999996275, 6.950000000004366, 6.955999999998312, 6.953000000001339, 6.94999999999709, 6.942000000002736, 6.977999999995518, 6.935000000004948, 6.953000000001339, 6.945999999996275, 6.944000000003143, 6.958999999995285, 6.942000000002736, 6.945999999996275]
		//deltaMax: 33.333333333333336
		//deltaMin: 16.666666666666668
		//deltaSampleSize: 60
		//enabled: true
		//events: {tick: Array(1)}
		//fps: 144.1245599999997
		//frameCounter: 60
		//frameRequestId: 11590
		//isFixed: false
		//timePrev: 40453.393
		//timeScalePrev: 1
		//__proto__: Object
		//timestamp: 67249.99999999668
		//__proto__: Object
		//console.log(event);
*/
	});




	}

    render() {
	return <div ref="scene" />;
    }
}
export default Scene;
