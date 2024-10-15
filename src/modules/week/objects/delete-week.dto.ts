import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class DeleteWeekDTO {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    id?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    number?: number;
}