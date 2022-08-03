import { RESPONSE_CODE, RESPONSE_FAILURE, RESPONSE_SUCCESS } from '@/common/Constants';
import { locale } from '@/config/locales';
import CustomFactory from '@/factories/CustomFactory';
import CustomService from '@/services/CustomService';
import { sendResponse } from '@/utils/common';
import { logger } from '@/utils/logger';
import { isEmpty, isObjectId } from '@utils/util';
import axios from 'axios';
import { NextFunction, Request, Response } from 'express';


class CustomController {
    static async create(req: Request, res: Response) {
        if (isEmpty(req.body)) return sendResponse(res, {}, locale('CUSTOM_INVALID_DATA'), RESPONSE_FAILURE, RESPONSE_CODE.BAD_REQUEST);
        var customData = CustomFactory.generateCustom(req.body);
        customData.field4 = "just try";

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${customData.city}&appid=ccc5c55cd7b52c74ee4f48cb05d10454`);
            console.log(response.data);
            const custom = await CustomService.create(customData);
            return sendResponse(res, { 'weather': response.data.weather[0], 'data': custom }, locale('WEATHER and CUSTOM Created'), RESPONSE_SUCCESS, RESPONSE_CODE.CREATED);
        } catch (err) {
            console.log(err);
        }

        // const request = require('request');

        // await request(
        //     `https://api.openweathermap.org/data/2.5/weather?q=${customData.city}&appid=ccc5c55cd7b52c74ee4f48cb05d10454`,

        //     function (error: any, response: { statusCode: number; }, data: any) {

        //         if (error) {
        //             return res.status(400).json({ message: error });
        //         }
        //         else {
        //             let datas = JSON.parse(data);
        //             var da = datas.weather[0];
        //             console.log(da);
        //             // return await sendResponse(res, da, locale('WEATHER'), RESPONSE_SUCCESS, RESPONSE_CODE.CREATED);
        //             return res.status(200).json({ status: 0, success: true, message: da });
        //             //return sendResponse(res, da, locale('WEATHER'), RESPONSE_SUCCESS, RESPONSE_CODE.CREATED);

        //         }
        //     });

    }

    static getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const custom = await CustomService.list();
            return sendResponse(res, custom, locale('CUSTOM_GET_ALL_SUCCESS'), RESPONSE_SUCCESS, RESPONSE_CODE.SUCCESS);
        } catch (error) {
            logger.error('CustomController.getAll() Error: ', error);
            next(error);
        }
    };

    static getOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            if (!isObjectId(req.params.customId)) return sendResponse(res, {}, locale('CUSTOM_INVALID_ID'), RESPONSE_FAILURE, RESPONSE_CODE.BAD_REQUEST);
            const customId: string = req.params.demoId;
            const findOneCustomData = await CustomService.readById(customId);
            return sendResponse(res, findOneCustomData, locale('CUSTOM_GET_ONE_SUCCESS'), RESPONSE_SUCCESS, RESPONSE_CODE.SUCCESS);
        } catch (error) {
            logger.error('CustomController.getOne() Error: ', error);
            next(error);
        }
    };

    static update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            if (!isObjectId(req.params.customId)) return sendResponse(res, {}, locale('CUSTOM_INVALID_ID'), RESPONSE_FAILURE, RESPONSE_CODE.BAD_REQUEST);
            if (isEmpty(req.body)) return sendResponse(res, {}, locale('CUSTOM_INVALID_DATA'), RESPONSE_FAILURE, RESPONSE_CODE.BAD_REQUEST);
            const customId: string = req.params.customId;
            const customData = req.body;
            const updateCustomData = await CustomService.updateById(customId, { $set: customData });

            return sendResponse(res, updateCustomData, locale('CUSTOM_UPDATE_SUCCESS'), RESPONSE_SUCCESS, RESPONSE_CODE.SUCCESS);
        } catch (error) {
            logger.error('CustomController.update() Error: ', error);
            next(error);
        }
    };

    static delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            if (!isObjectId(req.params.demoId)) return sendResponse(res, {}, locale('CUSTOM_INVALID_ID'), RESPONSE_FAILURE, RESPONSE_CODE.BAD_REQUEST);
            const customId: string = req.params.customId;
            await CustomService.deleteById(customId);

            return sendResponse(res, null, locale('CUSTOM_DELETE_SUCCESS'), RESPONSE_SUCCESS, RESPONSE_CODE.SUCCESS);
        } catch (error) {
            logger.error('CustomController.delete() Error: ', error);
            next(error);
        }
    };
}

export default CustomController;
