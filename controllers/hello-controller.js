const HelloController = (app) => {
    app.get('/hello', (req, res) => {
        res.send('Life is wonderful!')
    });
    app.get('/', (req, res) => {
        res.send('Welcome to Full Stack Development!')
    }); 
}
export default HelloController;
