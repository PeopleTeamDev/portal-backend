import { UserRank } from "../rank/rank.interface";

export class UserRankAccess {
  id!: number;
  rank!: UserRank;
  permission!: string;
}
