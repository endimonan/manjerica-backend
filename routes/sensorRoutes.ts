import { Router } from 'express';
import { SensorController } from '../controllers/SensorController';
import { SensorRepository } from '../repositories/SensorRepository';
import { SensorService } from '../services/SensorService';

const router = Router();
const sensorRepository = new SensorRepository();
const sensorService = new SensorService(sensorRepository);
const sensorController = new SensorController(sensorService);

router.post('/sensor', (req, res) => sensorController.postSensorData(req, res));
router.get('/sensor', (req, res) => sensorController.getSensorData(req, res));

export default router;
