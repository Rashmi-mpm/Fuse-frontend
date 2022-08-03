import { ILooseObject } from '@/common/interfaces/ILooseObject';
import { Custom, ICustom } from '@/models/Custom';
import InvalidBuildDataError from '@common/errors/InvalidBuildDataError';
import BaseFactory from './BaseFactory';

export default class CustomFactory extends BaseFactory {
    static checkKeysInModel(keys: string | string[]): { result: boolean; message?: string } {
        return super._checkKeysInModel(keys, Custom);
    }

    static generateCustom(data: any): ICustom {
        if (this.checkValidBuildData(data)) {
            return new Custom(data);
        } else {
            throw new InvalidBuildDataError('Custom');
        }
    }

    static checkValidBuildData(data: ILooseObject): boolean {
        return !!data && data.field1 && data.field2 && data.city
    }
}
