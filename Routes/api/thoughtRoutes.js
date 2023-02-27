const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    // createReaction,
    // removeReaction,

} = require('../../controllers/thoughtsController');

router.route("/").get(getThoughts).post(createThought);


router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// router.route("/:thoughtId/reactions").post(createReaction);

// router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;