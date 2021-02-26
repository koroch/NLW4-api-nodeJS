import { Router }  from "express";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";
import { SendEmailController } from "./controllers/SendEmailController";

const router = Router();
const userController = new UserController();
const surveyController = new SurveysController();
const sendEmailController = new SendEmailController();

router.post("/users", userController.create);

router.get("/surveys", surveyController.show);
router.post("/surveys", surveyController.create);

router.post("/sendEmail", sendEmailController.execute);

export { router };