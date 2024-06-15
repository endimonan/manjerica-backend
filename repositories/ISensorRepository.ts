import SensorData from '../models/SensorData';

export interface ISensorRepository {
  save(moisture: number): Promise<SensorData>;
  getAll(): Promise<SensorData[]>;
}
