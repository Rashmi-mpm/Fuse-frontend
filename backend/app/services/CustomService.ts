import { ILooseObject } from '@/common/interfaces/ILooseObject';
import { Custom, ICustom } from '@models/Custom';
import { ObjectId, QueryOptions, UpdateQuery } from 'mongoose';

export default class CustomService {
    static async create(resource: ICustom): Promise<ICustom> {
        return await resource.save();
    }

    static async list(findOptions: QueryOptions = {}, sortOptions: ILooseObject = {}, page?: number, limit?: number): Promise<ICustom[]> {
        const cursor = Custom.find({}, findOptions);
        if (sortOptions) {
            cursor.sort(sortOptions);
        }
        if (page != undefined && limit) {
            cursor.skip(Math.max(page - 1, 0) * limit).limit(limit);
        }
        return cursor;
    }

    static async readById(id: string): Promise<ICustom | null> {
        return Custom.findById(id).select('-__v');
    }

    static async updateById(administratorId: string, administratorFields: UpdateQuery<ICustom>): Promise<ICustom> {
        const existingDemo = await Custom.findByIdAndUpdate(administratorId, administratorFields, { new: true });
        return existingDemo;
    }

    static async deleteById(id: string | ObjectId): Promise<ICustom | null> {
        return Custom.findByIdAndRemove(id);
    }
}
