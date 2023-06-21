// import posts from "./tuits.js";
// let tuits = posts;
import * as tuitsDao from './tuits-dao.js'

const createTuit = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const newTuit = { ...req.body, author: currentUser._id };
    const actualTuit = await tuitsDao.createTuit(newTuit);
    res.json(actualTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}

const findTuitsByAuthorId = async (req, res) => {
    const author = req.params.author;
    const tuits = await tuitsDao.findTuitsByAuthorId(author);
    res.json(tuits);
}

const findMyTuits = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const tuits = await tuitsDao.findTuitsByAuthorId(author);
    res.json(tuits);
}

// const updateTuit = async (req, res) => {
//     const tuitdIdToUpdate = req.params.tid;
//     const updates = req.body;
//     // const tuitIndex = tuits.findIndex((t) => t._id === tuitdId)
//     // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
//     const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
//     res.json(status);
// }

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    // tuits = tuits.filter((t) =>
    //     t._id !== tuitdIdToDelete);
    res.json(status);
}
   

export default (app) => {
    app.post('/tuits', createTuit);
    app.get('/tuits', findAllTuits);
    app.get("/tuits/:author", findTuitsByAuthorId);
    app.get("/my-tuits", findMyTuits);
    // app.put('/tuits/:tid', updateTuit);
    app.delete('/tuits/:tid', deleteTuit);
}
