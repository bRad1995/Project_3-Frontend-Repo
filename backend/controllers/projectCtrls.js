const db = require("../models");

// TODO ROUTE FUNCTIONS (NOT ACTIONS) GO HERE
const getProject = (req, res) => {
    db.Project.find({})
    .then((foundProject) => {
        if(!foundPeople) {
            res.status(404).json({message: "Cannont find project."})
        } else {
            res.status(200).json({data: foundProject})
        }
    });
};


const createProject = (req, res) => {
    req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
);
db.Project.create(req.body, (err, createdProject) => {
    if (err) {
        res.send(500, err);
    } else if (!createdProject) {
        res.send(400);
    } else {
        console.log("Project Added", createdProject);
        res.send(200, createProject);
    }
});
};

const updateProject = (req, res) => {
    if (req.body.password) {
        req.body.password = bcrypt.hashSync(
            req.body.password,
            bcrypt.genSaltSync(10) 
        );
    }
    db.Project.findByIdAndUpdate(req.session.currentUser._id, req.body, { new: true }).then((updatedProject) => {
        if (!updatedProject) {
            res.status(400).json({ message: "Could not update project."});
        } else {
            res.status(200).json({ Data: updatedProject});
        }
    });
};

const deleteProject = (req, res) => {
    db.Project.findByIdAndUpdate(req.session.currentUser._id, (deletedProject) => {
        if (!deletedProject) {
            res.status(400).json({ message: "Could not delete project."});
        } else {
            res.status(200).json({
                Data: deleteProject,
                message: "Project has been removed from queue.",
            });
        }
    });
};

module.exports = {
    // TODO ROUTE NAMES GO HERE
    getProject,
    createProject,
    updateProject,
    deleteProject,
};

