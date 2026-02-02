import {Result} from "@/shared/lib/Result";

export class UserLoginDto {
  constructor(
    public email: string,
    public password: string
  ) {}

  static create(email: string, password: string): Result<UserLoginDto> {
    return Result.ok(new UserLoginDto(email, password));
  }
}
