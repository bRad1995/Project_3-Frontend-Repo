const router = require("express").Router();
const { projectCtrl } = require("../controllers");

// TODO ROUTES GO HERE
router.get('/', projectCtrl.getProject);
router.post("/", projectCtrl.createProject);
router.put('/:id', projectCtrl.updateProject);
router.delete('/:id', projectCtrl.deleteProject);

module.exports = router;