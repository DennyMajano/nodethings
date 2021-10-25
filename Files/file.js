var fs = require("fs");


//READING FILES
// if we dont pass the second parameter the callback will give binary data because it doesnt know the enconding type
/* fs.readFile("../Data/exampleData.json",(error,data)=>{
    if(error) console.log(error);
    console.log(data);
}) */
//When we pass the second parameter with encoding type, the console.log function will show the file's content
/* fs.readFile("../Data/exampleData.json","utf-8",(error,data)=>{
    if(error) console.log(error);
    console.log(data);
}) */

//LISTING FILES IN DIRECTORY

/* fs.readdir("C:/",(error,files)=>{
    if(error) console.log(error);
    // the file parameter it's itself an array that contains all files and folders names that there are in the specified path, 
    //so we can only show the array or with a loop show each item
    console.log(files);
    files.forEach((item,index)=>{ console.log(`${index}-${item}`)});
}) */


//this will overwrite what exists in the especified file
//Here in callback function I only passed error params because is what I need to know y something was wrong, at this point i dont know if can be passed more parameters
/* fs.writeFile("../Data/exampleData.json","{\"propiedad\":\"Algun valor\"}",function(error){
    if(error) throw error;
    console.log("archivo modificado");
}) */

//this will append more lines to the file so the file will not be overwritten
/* fs.appendFile("../Data/exampleData.json","\none more line",(error=>{
    if (error) throw error;
    console.log("one line was added to file");
})) */

//this will create some numbered folders
/* for(let i = 1;i<=10;i++){
    fs.mkdir(`../Data/${i}-folder`,(error)=>{
        if (error) throw error;
        console.log("Directory was created"); 
    })
} */

//create a temporay directory. I think is tem by the name is random and not because th directory disappears after a time has passed-
/* fs.mkdtemp("../Data/test-",(error)=>{
    if (error) throw error;
    console.log("Temporary Directory was created"); 
}) */

//this rename the directory or file in the path that we especify
//NOTE: put the entire path (absolute or relative) to the directory if not can be unexpected folder or files in wrong places
/* fs.rename("../Data/test-3QtTgx","../Data/test2",(error)=>{
    if (error) throw error;
    console.log("Directory was renamed"); 
}) */

//Delete file, this function doesn't work on directory
/* fs.unlink("../Data/test.txt",(error)=>{
    if(error) throw error;
    console.error("File was deleted");
}) */
//This remove empty directory, doesn't work on directory that contains other folder or files
/* fs.rmdir("../Data/folder",(error)=>{
    if(error) throw error;
    console.log("Directory was deleted");
});
 */
//this removes directory and all what is inside.
/* fs.rmdir("../Data/folder",{recursive:true, force:true},(error)=>{
    if(error) throw error;
    console.log("Directory was deleted");
}); */