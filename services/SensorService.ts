import { ISensorRepository } from '../repositories/ISensorRepository';

export class SensorService {
  constructor(private sensorRepository: ISensorRepository) {}

  async saveSensorData(moisture: number) {
    return this.sensorRepository.save(moisture);
  }

  async getAllSensorData() {
    return this.sensorRepository.getAll();
  }
}
