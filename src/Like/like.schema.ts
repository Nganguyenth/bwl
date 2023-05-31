/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LikeDocument = Like & Document;

@Schema({ collection: 'komu_bwllikes' })
export class Like {
  @Prop()
  messageId: string;

  @Prop()
  authorId: string;

  @Prop()
  createdTimestamp: number;
}

export const LikeSchema = SchemaFactory.createForClass(Like);
