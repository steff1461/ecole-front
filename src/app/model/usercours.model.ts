import {User} from "./user.model";
import {Cours} from "./cours.model";
import {Role} from "./role.model";

export interface UserCours {

  id: number;
  user: User;
  cours: Cours;
  role: Role;

}
