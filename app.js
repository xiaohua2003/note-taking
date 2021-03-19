const chalk=require('chalk')
const yargs=require("yargs")
//customize yargs version
yargs.version("1.1.0");
//add, remove, read, list
yargs.command({
    command:"add",
    describe:"add a new note", 
    handler:function(){
        console.log("I love you")
    }
})
//creat remove command 
yargs.command({
    command:"remove",
    describe:"remove a new note",
    handler:function(){
        console.log("remove note ")
    }
})
//creat read command
yargs.command({
    command:"read",
    describe:"read a note",
    handler:function(){
        console.log("read a note")
    }
})
console.log(yargs.argv)