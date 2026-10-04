import { PartialType } from "@nestjs/mapped-types";
import { CreateWeekDTO } from "./create-week.dto";

export class UpdateWeekDTO extends PartialType(CreateWeekDTO) {}
