import { Document, model, Schema } from 'mongoose';

interface ICustom extends Document {
    field1: string;
    field2: string;
    city: string;
    field4: string;
    // Add more fields
}

const customSchema = new Schema({
    field1: { type: String, required: true },
    field2: { type: String, required: true },
    city: { type: String, required: true },
    field4: { type: String, required: true },
    // Add more fields
});

const Custom = model<ICustom>('Custom', customSchema, 'custom');

export { Custom, ICustom };

