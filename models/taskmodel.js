"use strict";
import { Model } from "sequelize";
import { FOREIGNKEYS } from "sequelize/types/query-types";
export default (sequelize, DataTypes) => {
  class Taskmodel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UserAuthModel }) {
      // define association here
      this.belongsTo(UserAuthModel, { foreignKey: "userId", as: "user" });
    }
    // Hiding the Id field cause its a number of records
    toJSON() {
      return { ...this.get(), id: undefined, userId: undefined };
    }
  }
  Taskmodel.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      task: {
        type: DataTypes.STRING,
        allowNull: {
          msg: "Please the task field is required",
        },
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Taskmodel",
    }
  );
  return Taskmodel;
};
