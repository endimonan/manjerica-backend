import { Request, Response } from 'express';
import { SensorService } from '../services/SensorService';

export class SensorController {
  constructor(private sensorService: SensorService) {}

  async postSensorData(req: Request, res: Response) {
    const { moisture } = req.body;
    if (moisture === undefined) {
      return res.status(400).json({ message: 'Moisture value is required' });
    }
    try {
      const data = await this.sensorService.saveSensorData(moisture);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error saving sensor data', error });
    }
  }

  async getSensorData(req: Request, res: Response) {
    try {
      const data = await this.sensorService.getAllSensorData();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving sensor data', error });
    }
  }
}
