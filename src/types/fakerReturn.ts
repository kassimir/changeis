import {FakerData} from './fakerData';

export type FakerReturn = {
  status: string;
  code: number;
  locale: string;
  seed: string | null;
  total: number;
  data: FakerData[];
}
