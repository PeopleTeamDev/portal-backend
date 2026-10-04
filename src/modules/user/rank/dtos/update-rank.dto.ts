import { PartialType } from "@nestjs/mapped-types";
import { CreateUserRankDTO } from "./create-rank.dto";

export class UpdateUserRankDTO extends PartialType(CreateUserRankDTO) {}
