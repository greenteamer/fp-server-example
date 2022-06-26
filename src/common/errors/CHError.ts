export class CHError {
  readonly _tag = "CHError";
  readonly error: Error;
  readonly message: string;
  private constructor(marker: string, error: Error) {
    this.error = error;
    this.message = `${marker} \n${error.message}`;
  }

  static of(marker: string, error: Error) {
    return new CHError(marker, error);
  }
}
