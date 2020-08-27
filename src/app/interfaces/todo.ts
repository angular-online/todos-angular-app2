import { ITag } from './tag';
import { ICategory } from './category';

export interface ITodo {
    tags: ITag[];
    _id: string;
    title: string;
    isCompleted: boolean;
    targetDate: string;
    category: ICategory;
  }