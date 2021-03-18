import { Model } from 'sequelize';
import Spider, { SpiderInterface } from '../database/mysql/models/Spider';

export default class SpiderRepo {
  async get(id: number): Promise<Model<SpiderInterface>> {
    return await Spider.findByPk(id);
  }

  async getAll(): Promise<Model<SpiderInterface>[]> {
    return await Spider.findAll();
  }

  async create(spider): Promise<void> {
    await Spider.create(spider);
  }

  async update(id: number, spider: SpiderInterface): Promise<void> {
    await Spider.update(spider, { where: { id } });
  }

  async delete(id: number): Promise<void> {
    await Spider.destroy({
      where: {
        id,
      },
    });
  }
}
