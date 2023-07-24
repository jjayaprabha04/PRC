const PrcmemberModel = require('../models/prcmember-model');

// Read all Members
function readAllMembers(req, res) {
    try {
        PrcmemberModel.find({})
            .then(members => {
                res.json(members);
            })
    } catch (err) {
        res.json(err.message);
    }
}

// Read a specific member by memberID
function readSpecificMember(req, res) {
    try {
        let {name, email} = req.body;
        console.log(name,email);
        PrcmemberModel.find({"membername": name, "email": email})
            .then(members => {
                (members.length > 0) 
                    ? 
                    res.json(members)
                    :
                    res.json("No members found!!!");
            })
    } catch (err) {
        res.json(err.message);
    }
}


// Add a new Trainee
async function addMember(req, res) {

    const Member = new PrcmemberModel(req.body);

    try {
        let memberExists = await PrcmemberModel.find({"email": req.body.email});

        (memberExists.length > 0)
            ?
            res.json("Member Already Exists!")
            :
            (await Member.save(), res.json("Member Added Successfully!"));
    } catch(err) {
        let errorList = [];
        if(err.errors) {
            for(let temp in err.errors) {
                errorList.push(err.errors[temp].message)
            }
        }
        res.json(errorList);
    }
}


// Update a specific Member
function updateMember(req, res) {
    try {
        PrcmemberModel.updateOne({"email": req.body.email}, {$set: req.body})
            .then(results => {
                (results.modifiedCount > 0)
                    ?
                    res.json("Member Updated Successfully!")
                    :
                    res.json("Unable to update the Member!");
            })
    } catch (err) {
        res.json(err.message);
    }
}


// Delete a specific Member
function deleteMember(req, res) {
    try {
        PrcmemberModel.deleteOne({"email": req.body.email})
            .then(results => {
                (results.deletedCount > 0)
                    ?
                    res.json("Member Deleted Successfully!")
                    :
                    res.json("Unable to delete the Member!");
            })
    } catch (err) {
        res.json(err.message);
    }
}


module.exports = {
    readAllMembers,
    readSpecificMember,
    addMember,
    updateMember,
    deleteMember
}