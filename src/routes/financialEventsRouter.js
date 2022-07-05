import { Router } from "express";
import { getFinancialEvents, postFinancialEvents, sumFinancialEvents } from "../controllers/financialEventsController.js";

const financialEventsRouter = Router()

financialEventsRouter.post('/financial-events', postFinancialEvents)
financialEventsRouter.get('/financial-events', getFinancialEvents)
financialEventsRouter.get('/financial-events/sum', sumFinancialEvents)

export default financialEventsRouter