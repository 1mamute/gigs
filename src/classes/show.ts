import { Band } from "../types/band";

export class Show {
  public name!: string;
  public bands!: Band[];
  public date!: Date;
  public schedule!: Date;
  public img!: string;
}
