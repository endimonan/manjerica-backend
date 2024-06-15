import { ISensorRepository } from './ISensorRepository';
import SensorData from '../models/SensorData';

export class SensorRepository implements ISensorRepository {
  async save(moisture: number): Promise<SensorData> {
    return SensorData.create({ moisture });
  }

  async getAll(): Promise<SensorData[]> {
    return SensorData.findAll();
  }
}
