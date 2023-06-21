import tuitsModel from './tuits-model.js';

export const findAllTuits = () => tuitsModel.find().populate("author", "username").exec();
export const findTuitsByAuthorId = (author) => tuitsModel.find({ author });
export const createTuit = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
export const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})