const router = require('express').Router();
const MemberController = require('../controllers/prcmember-controller');

// http://localhost:5000/v1/api/prcmembers/readAllMembers
router.get("/readAllMembers", MemberController.readAllMembers);

// http://localhost:5000/v1/api/prcmembers/readSpecificMember
router.get("/readSpecificMember", MemberController.readSpecificMember);

// http://localhost:5000/v1/api/prcmembers/addMember
router.post("/addMember", MemberController.addMember);

// http://localhost:5000/v1/api/prcmembers/updateMember
router.put("/updateMember", MemberController.updateMember);

// http://localhost:5000/v1/api/prcmembers/deleteMember
router.delete("/deleteMember", MemberController.deleteMember);

module.exports = router;