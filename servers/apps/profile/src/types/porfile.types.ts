import { Field, ObjectType } from "@nestjs/graphql";
import { Profile } from "../entities/profile.entitie";


@ObjectType()
export class UserProfileResponse {
  @Field(() => Profile)
  user: Profile;

  @Field({nullable: true})
  info: string;

  @Field({nullable: true})
  isPublic: boolean;
}
