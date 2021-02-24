const { Router } = require("express");
const router = Router();
const { validateJWT } = require("../middlewares/validateJWT");
const {
  getEvents,
  updateEvent,
  createEvent,
  deleteEvent,
} = require("../controllers/events");

/*
    Event Routes
    /api/events
*/
//all the routes will need the token validation
//obtain events

//we validate the token for every endpoint
router.use(validateJWT);

router.get("/", getEvents);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/", deleteEvent);

module.exports = router;
