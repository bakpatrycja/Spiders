import { Model } from 'sequelize';
import User, { UserInterface } from '../database/mysql/models/User';
import Spider from '../database/mysql/models/Spider';

export default class UserRepo {
  async get(id: number): Promise<Model<UserInterface>> {
    return await User.findByPk(id);
  }

  async getAll(): Promise<Model<UserInterface>[]> {
    return await User.findAll();
  }

  async create(user): Promise<void> {
    await User.create(user);
  }

  async update (id: number, user: UserInterface): Promise<void> {
   await User.update(user, {where: {id}})
  }

  async delete (id: number): Promise<void> {
    await User.destroy({where: {id}})
  }

  async getUsersSpiders () {
        User.hasMany(Spider,{ foreignKey: "belongsTo" });
        Spider.belongsTo(User,{ foreignKey: "belongsTo" });
       return await User.findAll({ include: Spider })
  }
}
