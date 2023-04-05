"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class UserAuthModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ TaskModel }) {
      // define association here
      this.hasMany(TaskModel, { foreignKey: "userId", as: "userTasks" });
    }

    toJSON() {
      // Hiding protected fields!
      const attributes = { ...this.get() };
      // eslint-disable-next-line no restricted-syntax
      for (const a of PROTECTED_ATTRIBUTES) {
        delete attributes[a];
      }
      return attributes; //{ ...this.get(), id: undefined };
    }
  }
  UserAuthModel.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 10], // min 8 max 10
          notNull: {
            msg: "The Username field cannot be empty.",
          },
          unique: {
            msg: "A Username with this value already exists",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "user",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            args: true,
            msg: "Please enter a valid email address",
          },
          notNull: {
            msg: "The email field cannot be empty.",
          },
          unique: {
            msg: "A user with this email address already exists",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password field cannot be empty",
          },
        },
      },
      last_login_at: DataTypes.DATE,
      last_ip_address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserAuthModel",
    }
  );
  return UserAuthModel;
};
