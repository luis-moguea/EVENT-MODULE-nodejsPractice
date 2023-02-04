const EventEmitter = require("events")
const emitter = new EventEmitter()

//register a listener
emitter.on("message", (eventArg) => {
    console.log("Listener logged", eventArg)
})

//raise an event with arguments to the listener
emitter.emit("message", {id: 1, url: "http//ex..."})

const testEmitter = new EventEmitter()

testEmitter.on("message", () =>{
    console.log("Second logged")
})

testEmitter.emit("message")

