import { Model } from 'sequelize';
import Token, { TokenInterface } from '../database/mysql/models/Token';

export default class TokenRepo {
  async get(id: number): Promise<Model<TokenInterface>> {
    return await Token.findByPk(id);
  }

  async create(token): Promise<void> {
    await Token.create(token);
  }
}
