import { PartialType } from "@nestjs/mapped-types";
import { CreateRankDTO } from "./create-rank.dto";

export class UpdateRankDTO extends PartialType(CreateRankDTO) {}
