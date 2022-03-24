import express from "express";
import homepageController from "../controllers/homepageController";
import chatBotController from "../controllers/chatBotController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homepageController.getHomepage);
  router.get("/webhook", chatBotController.getWebhook);
  router.post("/webhook", chatBotController.postWebHook);
  router.get("/messages", chatBotController.messages);
  // router.get("/messages/:id", chatBotController.messsages);
  // router.get("/summary", chatBotController.summary);

  return app.use("/", router);
};

module.exports = initWebRoutes;
