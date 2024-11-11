const express=require('express');
const cors=require('cors');
const app=express();
const port=4000;

app.use(cors({
    origin:"*",
}));

app.get('/test',(request,response)=>{
    const data={  message:"Hello,from server!"  }
    response.json(data);
});


app.listen(port,function(){
    console.log(`Server Listening on http://localhost:${port}`);
});