export class InvalidCredentialsError extends Error {
  constructor() {
    super('Crendicais invalidas');
    this.name = 'InvalidCredentialsError';
  }
}