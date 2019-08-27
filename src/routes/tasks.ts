import { Router, Request, Response } from 'express';
import Task from '../models/Task';

const router = Router();

router.get('/create', (req: Request, res: Response) => {
  res.render('tasks/create');
});
router.post('/create', async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const newTask = new Task({
    title,
    description
  });
  await newTask.save();
  return res.redirect('/tasks/list');
});

router.get('/list', async (req: Request, res: Response) => {
  const tasks = await Task.find();
  res.render('tasks/list', { tasks });
});

router.get('/delete/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  return res.redirect('/tasks/list');
});
router.get('/edit/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  res.render('tasks/edit', { task });
});
router.post('/edit/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;
  await Task.findByIdAndUpdate(id,{ title, description })
  return res.redirect('/tasks/list')
});
export default router;
