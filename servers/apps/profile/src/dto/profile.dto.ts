import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class ProfileDTO {
  @Field()
  userName: string;
}

@InputType()
export class UpdateProfileDto {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  info?: string;
}
