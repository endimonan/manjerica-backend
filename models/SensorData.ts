import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class SensorData extends Model {
  public id!: number;
  public moisture!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

SensorData.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    moisture: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "sensor_data",
    timestamps: true,
  }
);

export default SensorData;
