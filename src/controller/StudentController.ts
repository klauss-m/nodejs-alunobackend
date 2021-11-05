import { getRepository } from 'typeorm';
import { Students } from '../entity/Students';
import { Request, Response } from 'express';

export const getStudents = async (req: Request, res: Response) => {
  const students = await getRepository(Students).find();
  return res.json(students);
};

export const postStudents = async (req: Request, res: Response) => {
  const student = await getRepository(Students).save(req.body);
  return res.json(student);
};

export const getStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const student = await getRepository(Students).findOne(id);
  return res.json(student);
};

export const putStudents = async (req: Request, res: Response) => {
  const { id } = req.params;
  const student = await getRepository(Students).update(id, req.body);

  if (student.affected == 1) {
    const studentUpdated = await getRepository(Students).findOne(id);
    return res.json(studentUpdated);
  } else {
    return res.status(404).json({ message: 'Aluno não encontrado!' });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const student = await getRepository(Students).delete(id);

  if (student.affected == 1) {
    return res.status(200).json({ message: 'Aluno excluído com sucesso!' });
  } else {
    return res.status(404).json({ message: 'Aluno não encontrado.' });
  }
};

export const enrolledStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const student = await getRepository(Students).update(id, { enrolled: true });

  if (student.affected == 1) {
    const studentEnrolled = await getRepository(Students).findOne(id);
    res.json(studentEnrolled);
  } else {
    return res.status(404).json({ message: 'Aluno não encontrado.' });
  }
};
