import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  show(): string {
    return 'all users';
  }
  list(): string {
    return 'list!';
  }
}
