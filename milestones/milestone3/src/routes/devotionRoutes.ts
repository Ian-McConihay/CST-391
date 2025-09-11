import express from 'express';
import {
  getAllDevotions,
  getDevotionById,
  createDevotion,
  updateDevotion,
  deleteDevotion,
} from '../controllers/devotionController';

const router = express.Router();

router.get('/', getAllDevotions);
router.get('/:id', getDevotionById);
router.post('/', createDevotion);
router.put('/:id', updateDevotion);
router.delete('/:id', deleteDevotion);

export default router;