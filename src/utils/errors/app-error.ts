export class AppError extends Error {
  public statusCode: number;
  public explanation: string[];

  constructor(explanation: string[], statusCode: number) {
    super(explanation[0]);
    this.statusCode = statusCode;
    this.explanation = explanation;
  }
}
