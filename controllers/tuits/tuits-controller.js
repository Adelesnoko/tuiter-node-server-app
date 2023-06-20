// import posts from "./tuits.js";
// let tuits = posts;
import * as tuitsDao from './tuits-dao.js'

const createTuit = async (req, res) => {
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    // tuits.push(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}

const findTuitsByUserId = async (req, res) => {
    const user = req.params.username;
    const tuits = await tuitsDao.findTuitsByUserId(user._id);
    res.json(tuits);
}

const findMyTuits = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const tuits = await tuitsDao.findTuitsByUserId(currentUser._id);
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    // const tuitIndex = tuits.findIndex((t) => t._id === tuitdId)
    // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status);
}

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
    app.get("/tuits/:username", findTuitsByUserId);
    app.get("/my-tuits", findMyTuits);
    app.put('/tuits/:tid', updateTuit);
    app.delete('/tuits/:tid', deleteTuit);
}
