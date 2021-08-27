export class UnexpectedError extends Error {
  constructor() {
    super('Algo e errado aconteceu, tente novamente em breve.');
    this.name = 'InvalidCredentialsError';
  }
}