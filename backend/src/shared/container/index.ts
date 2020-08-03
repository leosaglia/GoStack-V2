import { container } from 'tsyringe';

import IAppointmentsRepostory from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IAppointmentsRepostory>(
  'AppointmentsRepository',
  AppointmentsRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
