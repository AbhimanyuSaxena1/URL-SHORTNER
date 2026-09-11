import { Router } from "express";

import { createUrlController, deleteUrlController, getAllUrlController } from "../controllers/url.controller.js";

const router = Router()


router.post('/create',createUrlController)

router.get('/all',getAllUrlController)

router.delete('/delete/:id',deleteUrlController)


export default router