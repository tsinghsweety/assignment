const appRouter = (app,fs)=>{
    const dataPath = './movies.json';

    app.get('/movies',(req,res)=>{
        fs.readFile(dataPath);
    })
};

module.exports = appRouter;