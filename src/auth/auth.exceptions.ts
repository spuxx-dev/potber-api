import { UnauthorizedException } from '@nestjs/common';

export const authExceptions = {
  wrongCredentials: new UnauthorizedException(
    'Login failed (possibly due to wrong credentials).',
  ),
  unknownLoginFailure: new UnauthorizedException(
    'Login failed due to an unknown reason.',
  ),
  notSignedIn: new UnauthorizedException('Not signed in.'),
  invalidSession: new UnauthorizedException('Session is invalid.'),
};
