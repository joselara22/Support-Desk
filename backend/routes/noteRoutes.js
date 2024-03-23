const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('../controllers/noteController');

const { protect } = require('../middleware/authMiddleware');

router
  .route('/')
  .get(protect, controller.getNotes)
  .post(protect, controller.addNote);

module.exports = router;
