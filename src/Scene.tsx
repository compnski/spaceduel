import React from "react";
import ReactDOM from "react-dom";
import Matter from "matter-js";
import MatterAttractors from "matter-attractors";
import Mousetrap from "mousetrap";
import decomp from "poly-decomp";
import MainLoop from "mainloop.js"


declare const window: any;


window.decomp = decomp;


//import MatterWrap from 'matter-wrap';

var heading = 0;
const thrusterForce = 0.001;
const angularVelocityDelta = 0.01;
const shipVertices = [{ 'x': 0, 'y':2  }, { 'x': 5, 'y': 4 }, { 'x': 5, 'y': 0 }];

const jumpForce = 0.01;
const starMass = 20000;
const bulletGunForce = 0.001;
const cloudGunForce = 0.000005;
const shipMass = 1;
const bulletMass = 0.5;
const cloudMass = 0.001;
const cloudRadius = 10;
const starRadius = 1;
const startingXPos = 500;
const Gravity = MatterAttractors.Attractors.gravityConstant;
const PhysicsFrameTime = 16.6666667


function forceFromAngle(angle:number, magnitude:number):Matter.Vector {
    return Matter.Vector.rotate(Matter.Vector.create(magnitude, 0), Math.PI + angle);
}


class Scene extends React.Component {
    constructor(props: any) {
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
            Vector = Matter.Vector,
            Bodies = Matter.Bodies;

        // create engine
        var engine = Engine.create(),
            world = engine.world;
        

        // create renderer
        var render = Render.create({
            element: this.refs.scene as any, 
            engine: engine,
            options: {
                width: Math.min(document.documentElement.clientWidth, 1024),
                height: Math.min(document.documentElement.clientHeight, 1024),
                wireframes: false,
            }
        });


        Render.run(render);

        // create runner
        //var runner = Runner.create();
        //Runner.run(runner, engine);

        
        // add bodies
        world.bodies = [];
        world.gravity.scale = 0;

        //engine.timing.timeScale = 1.5;

        var radius = 5;


        var star = Bodies.circle(startingXPos, 500, starRadius, {
            mass: starMass,
            frictionAir: 0,///0.5,
            plugin: {
                attractors: [
                    MatterAttractors.Attractors.gravity

                ]
            }
        });
        World.add(world, star);

        
        function spawnBody(x: number, y: number, vertices: any, mass: number, fillColor: string) {
            const body = Bodies.fromVertices(
                x, y,
                vertices,
                {
                    render: {
                        fillStyle: fillColor,
                    },
                    timeScale: 1,
                    mass: mass,
                    frictionAir: 0,//0.000001,
                }
            );
            World.add(world, body);
            const rotationalRadius = Math.abs(y-500);
            console.log("r=", rotationalRadius)
            const v = Math.sqrt((MatterAttractors.Attractors.gravityConstant * starMass) / rotationalRadius)*10;
            //const f = (forceFromAngle(Math.PI, -v));

            // v = X*cos(45) + Y*sin(45)
            const bodyA = star,
                  bodyB = body;

            var bToA = Matter.Vector.sub(bodyB.position, bodyA.position),
                distanceSq = Matter.Vector.magnitudeSquared(bToA) || 0.0001,
                normal = Matter.Vector.normalise(bToA),
                tangent = Matter.Vector.rotate(normal, Math.PI/2),
                magnitude = Math.sqrt((MatterAttractors.Attractors.gravityConstant * starMass) / rotationalRadius),//*17,//-MatterAttractors.Attractors.gravityConstant * (bodyA.mass * bodyB.mass / distanceSq),
                force = Matter.Vector.mult(tangent, magnitude*PhysicsFrameTime);

            //const f = Matter.Vector.rotate(Matter.Vector.mult(normal,4),Math.PI/2);
            const tau = Math.PI/2
            const e = 0
            const vX = -v * Math.sin(tau) / (1 - e * Math.cos(tau))
            const vY = v * Math.sqrt(1 - e*e) * Math.cos(tau) / (1-e*Math.cos(tau))
            const f ={"x":vX, "y":vY}
            //f["y"]=0;
            console.log("v=",v)
            console.log("f=",f)
                
            console.log("mag=", magnitude, "force=",force)

            
            Body.setVelocity(body, force)
           //Body.applyForce(body, normal, f)
            return body;
        }
        var body = spawnBody(startingXPos, 150, shipVertices, shipMass, 'red');
        


        var blueBody = spawnBody(startingXPos, 850, shipVertices, shipMass, 'blue');
        //World.add(world, blueBody);


        const fireBullet = function(shooter: Matter.Body) {
            const shipCenter = Matter.Vertices.centre(shooter.vertices)
            const gunCenter = Vector.add(shipCenter,
                Vector.rotate(Vector.create(-15, 0), shooter.angle))


            var bullet = Bodies.circle(gunCenter.x, gunCenter.y, 2, {
                mass: bulletMass,
                isSensor: true,
                frictionAir: 0.0001,
                render: { fillStyle: 'white' }
            });
            Body.setVelocity(bullet, shooter.velocity);

            Body.applyForce(bullet, shooter.position, forceFromAngle(shooter.angle, bulletGunForce));
            World.add(world, bullet);

        };

        const fireCloud = function(shooter: Matter.Body) {
            const shipCenter = Matter.Vertices.centre(shooter.vertices)
            const gunCenter = Vector.add(shipCenter,
                Vector.rotate(Vector.create(15, 0), shooter.angle))


            var bullet = Bodies.circle(gunCenter.x, gunCenter.y, 4, {
                mass: cloudMass,
                isSensor: true,
                frictionAir: 0.00001,
                render: { fillStyle: 'white' }
            });
            console.log(bullet.mass)
            Body.setVelocity(bullet, shooter.velocity);


            const bulletForce = forceFromAngle(shooter.angle, -cloudGunForce)
            Body.applyForce(bullet, shooter.position, bulletForce);
            World.add(world, bullet);
            window.setTimeout(function(){
                Body.scale(bullet, 2, 2)
                console.log(bullet.mass)}, 300)
            window.setTimeout(function(){
                Body.scale(bullet, 2, 2)
                console.log(bullet.mass)}, 600)

        };


        const crashIntoStar = function(body: Matter.Body) {
            World.remove(world, body);
        }
        const onCollide = function(event: Matter.IEventCollision<Matter.Engine>) {
            event.pairs.forEach(function(pair) {
                const { bodyA, bodyB } = pair;
                if (bodyA == star) {
                    crashIntoStar(bodyB);

                } else if (bodyB == star) {
                    crashIntoStar(bodyA);
                } else {
                console.log([bodyA, bodyB])
                if (bodyA != null && bodyB != null) {
                    bodyA.render.fillStyle = 'green';
                    bodyB.render.fillStyle = 'green';
                }
                    }
            });
        };

        const addDotFor = function(body: Matter.Body, color: string) {
            var dot = Bodies.circle(body.position.x, body.position.y, 2, {
                collisionFilter: { mask: 0 },
                isSensor: true,
                mass: 0,
                isStatic: true,
                render: { fillStyle: color },
            })
            var vel = body.velocity
            vel = Vector.mult(vel, 5)
            
            const yVel = Bodies.rectangle(body.position.x, body.position.y+vel.y/2, 1, vel.y, {collisionFilter: { mask: 0 }, isStatic: true, isSensor: true, mass:0, render: {fillStyle: color}})
            yVel.mass = 0
            const xVel = Bodies.rectangle(body.position.x+vel.x/2, body.position.y, vel.x, 1, {collisionFilter: { mask: 0 }, isStatic: true, isSensor: true, mass:0, render: {fillStyle: color}})
            xVel.mass = 0
            
            //Matter.Body.setParts(dot, [dot, yVel])
            dot.mass = 0;
            //console.log(dot)            
            World.add(world, dot)
            World.add(world, yVel)
            World.add(world, xVel)
            window.setTimeout(function() {
                World.remove(world, dot)
                World.remove(world, xVel)
                World.remove(world, yVel)
            },3250)
            // TODO: Fade dot color over time.
            // TODO: Pull into trail manager class
        }


        const angleBodyToMatchVelocity = function(body:Matter.Body) {
            Body.setAngle(body, Math.PI + Vector.angle(Vector.create(0,1), body.velocity));
        }

        var lastDotAt = 0;
        const tick = function(delta:number, timestamp:number) {

            if (timestamp > lastDotAt + 100){
                //console.log(event)
                //console.log(event.timestamp);
                lastDotAt = timestamp;
                addDotFor(body, 'red');
                addDotFor(blueBody, 'blue');
                //console.log(body.velocity)

                const force = thrusterForce * (0.5 - Math.random())
                //Body.applyForce(blueBody, blueBody.position, forceFromAngle(blueBody.angle, force))
            }
            if(body.angularVelocity == 0) {
                angleBodyToMatchVelocity(body)
            }
            angleBodyToMatchVelocity(blueBody)
        };


        // Mousetrap.bind("left", function() {
        //     Body.setAngularVelocity(body, body.angularVelocity - angularVelocityDelta);
        // })
        //
        // Mousetrap.bind("right", function() {
        //     Body.setAngularVelocity(body, body.angularVelocity + angularVelocityDelta);
        // })

        Mousetrap.bind("backspace", function() {
            console.log(body.velocity)
            //Body.applyForce(body, body.position, forceFromAngle(Math.PI/2 + body.angle, jumpForce))
        });
        Mousetrap.bind("up", function() {
            Body.applyForce(body, body.position, forceFromAngle(body.angle, thrusterForce))
        });

        Mousetrap.bind("down", function() {
            Body.applyForce(body, body.position, forceFromAngle(body.angle, -thrusterForce))
        });


        Mousetrap.bind("e", function() {
            Body.applyForce(blueBody, blueBody.position, forceFromAngle(blueBody.angle, thrusterForce))
        });

        Mousetrap.bind("d", function() {
            Body.applyForce(blueBody, blueBody.position, forceFromAngle(blueBody.angle, -thrusterForce))
        });



        //Matter.Events.on(runner, "tick", tick);
        Mousetrap.bind(["1"], () => fireBullet(body))
        Mousetrap.bind(["2"], () => fireCloud(body))

        Matter.Events.on(engine, 'collisionStart', onCollide)


        
        const doUpdate = function doUpdate(delta:number){
            Engine.update(engine, delta)
            tick(delta, engine.timing.timestamp);
            
        }
        
        MainLoop.setUpdate(doUpdate).start()

    }

    render() {
        return <div ref="scene" />;
    }
}
export default Scene;
