import { Router, request, response, Request, Response } from 'express';
import {
  deleteStudent,
  enrolledStudent,
  getStudent,
  getStudents,
  postStudents,
  putStudents,
} from './controller/studentController';

const routes = Router();

routes.get('/home', (req, res) => {
  return res.json({ message: 'Cadastro de Alunos!' });
});

routes.get('/students', getStudents);
routes.post('/students', postStudents);
routes.get('/students/:id', getStudent);
routes.put('/students/:id', putStudents);
routes.delete('/students/:id', deleteStudent);
routes.patch('/students/:id', enrolledStudent);

export default routes;
