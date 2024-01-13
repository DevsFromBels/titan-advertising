import { Directive, Field, ObjectType } from "@nestjs/graphql";

// @ObjectType()
// @Directive('@key(fields:"id, userId")')
// export class Avatars {
//   @Field({nullable: false})
//   id: string;

//   @Field({nullable: false, defaultValue: true})
//   public: boolean

//   @Field({nullable: true})
//   url: string;

//   @Field({nullable: false})
//   userId: string;
// }

@ObjectType()
@Directive('@key(fields: "id")') 
export class Profile {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  role: string;

  @Field()
  createdAt: Date;
}


@ObjectType()
export class UserProfile {
  @Field(() => Profile, { nullable: false })
  user: Profile;

  @Field({nullable: true, defaultValue: ""})
  info: string;

  @Field({nullable: true})
  isPublic: boolean;
}

