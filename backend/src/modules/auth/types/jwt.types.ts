export interface JwtPayload {
  pseudo?: string;
  email?: string;
  role?: string;
}

export interface JwtUser {
  pseudo?: string;
  userId: number;
  email?: string;
  role?: string;
}
