// routes/documentRoutes.js
const express = require("express");
const {
  deleteDocument,
  addDocument,
  getDocumentById,
  getUserDocuments,
  updateDocument,
} = require("../controllers/docController");
const { verifyToken } = require("../middleware/auth");
const router = express.Router();

router.post("/documents", addDocument);
router.get("/documents/:id", getDocumentById);
router.get("/document/:email", getUserDocuments);
router.put("/doc/:id", updateDocument);
router.delete("/documents/:id",  deleteDocument);

module.exports = router;
