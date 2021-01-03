import {startOfHour} from 'date-fns';
import Appointment from '../models/Appointment';
import { getCustomRepository } from 'typeorm';

import AppointmentsRepository from '../repositories/Appointments.repository';
 
interface Request {
  provider: string,
  date: Date
}

class CreateAppointmentService {
  public async execute({ date, provider }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointmentDate = startOfHour(date); 
  
    const findRepeateDate = await appointmentsRepository.findByDate(appointmentDate);

    if(findRepeateDate){
      throw Error('ERROR - duplicate appointment')
      
    }

    const appointment = appointmentsRepository.create({
      provider,
      date: appointmentDate,
    })

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;