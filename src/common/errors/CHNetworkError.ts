export class CHNetworkError {
  readonly _tag = "CHNetworkError";
  readonly error: Error;
  readonly message: string;
  private constructor(marker: string, error: Error) {
    this.error = error;
    this.message = `${marker}: ${error.message}`;
  }

  static of(marker: string, error: Error) {
    return new CHNetworkError(marker, error);
  }
}
