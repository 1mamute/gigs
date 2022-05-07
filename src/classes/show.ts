import { Expose } from "class-transformer";

export class Show {
  @Expose()
  public name!: string;

  @Expose()
  public date!: Date;
}
