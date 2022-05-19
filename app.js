const http=require("http");
const fs=require("fs");


const timestamp=Math.round(new Date().valueOf()/1000);
const getTimeFromDate=timestamp=>{
    const date= new Date(timestamp*1000);
    let hours=date.getHours();
        minutes=date.getMinutes();
        seconds=date.getSeconds();
        return(hours) + ":" + (minutes) + ":" + (seconds)
}


var writeStream=fs.createWriteStream("date-time.txt");
writeStream.write(`Current date and time:${new Date()}`);
writeStream.end();

fs.readdir('./', (err, files) => {
    console.log(files);
})

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.write(JSON.stringify({
            Current_date_time:`${new Date()}`,
            time:`${getTimeFromDate(timestamp)}`
        }))
    }
    res.end();
})

server.listen(3002);

console.log("server on");