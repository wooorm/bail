// prettier-ignore
/**
 * Throw a given error.
 *
 * @type {{
 *   (error: Error): never
 *   (error: null | undefined): void
 *   (): void
 * }} */
export var bail = (
  /**
   * Throw a given error.
   *
   * @param {Error?} [error]
   */
  function (error) {
    if (error) {
      throw error
    }
  }
)
