const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const controller = require('../controllers/ticketController');

router
  .route('/')
  .get(protect, controller.getTickets)
  .post(protect, controller.createTicket);

router
  .route('/:id')
  .get(protect, controller.getTicket)
  .delete(protect, controller.deleteTicket)
  .put(protect, controller.updateTicket);

module.exports = router;
