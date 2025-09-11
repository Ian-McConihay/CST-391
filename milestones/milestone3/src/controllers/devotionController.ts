import { Request, Response } from 'express';
import { db } from '../database/db';

export const getAllDevotions = async (_req: Request, res: Response) => {
  const [rows] = await db.query('SELECT * FROM devotions');
  res.json(rows);
};

export const getDevotionById = async (req: Request, res: Response): Promise<void> => {
  try {
    const [rows] = await db.query('SELECT * FROM devotions WHERE id = ?', [req.params.id]);

    if (Array.isArray(rows) && rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ message: 'Devotion not found' });
    }
  } catch (error) {
    console.error('Error fetching devotion by ID:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createDevotion = async (req: Request, res: Response) => {
  const { title, content, date } = req.body;
  await db.query('INSERT INTO devotions (title, content, date) VALUES (?, ?, ?)', [title, content, date]);
  res.status(201).json({ message: 'Devotion created' });
};

export const updateDevotion = async (req: Request, res: Response) => {
  const { title, content, date } = req.body;
  await db.query('UPDATE devotions SET title = ?, content = ?, date = ? WHERE id = ?', [title, content, date, req.params.id]);
  res.json({ message: 'Devotion updated' });
};

export const deleteDevotion = async (req: Request, res: Response) => {
  await db.query('DELETE FROM devotions WHERE id = ?', [req.params.id]);
  res.json({ message: 'Devotion deleted' });
};