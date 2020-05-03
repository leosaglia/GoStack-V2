import { Router, response } from 'express';
import { parseISO } from 'date-fns';

const appointmentsRouter = Router();

appointmentsRouter.get('/', (request, response) => {});

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;
  const parsedDate = parseISO(date);
});

export default appointmentsRouter;
