import express from "express";
import utils from '../utils/util.js'

const router = express.Router();

router.get('/', (req, res) => {
    res.status(utils.constants.httpStatus.SUCCESS).json({ status: utils.constants.responseCodes.success.code, data: "LOS Services are running !" });
});
router.get('*', (req, res) => {
    res.status(utils.constants.httpStatus.NOT_FOUND).json({ status: utils.constants.responseCodes.notFound.code, error: utils.constants.responseCodes.notFound.msg });
});

export default router;