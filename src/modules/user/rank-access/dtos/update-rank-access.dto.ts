import { PartialType } from "@nestjs/mapped-types";
import { CreateUserRankAccessDTO } from "./create-rank-access.dto";

export class UpdateUserRankAccessDTO extends PartialType(CreateUserRankAccessDTO) {}
