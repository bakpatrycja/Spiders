const mongoose = require('mongoose');
import { options, uri} from '../database/mysql/dbmongo'
import Exhibition, { ExhibitionInterface } from '../database/mysql/models/Exhibition';


mongoose.connect(uri, options)
export default class ExhibitionRepo {
  async getAll() {
    return await Exhibition.find({});
  }

  async get(id) {
    return await Exhibition.findById(id).exec();
  }

  async create(exhibition:ExhibitionInterface): Promise<void> {
    await Exhibition.create(exhibition);
  }

  async update(id, exhibition: ExhibitionInterface): Promise<void> {
    await Exhibition.update({"_id": id},exhibition);
  }

  async delete(id): Promise<void> {
    await Exhibition.findOneAndDelete({ _id: id });
  }
}