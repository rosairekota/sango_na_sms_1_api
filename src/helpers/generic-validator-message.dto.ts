export class GenericValidatorMessages {
  static genericStringMessage(title?: string) {
    return { message: `${title} doit être une chaine de caractère` };
  }
  static genericEmptyMessage(title?: string) {
    return { message: `${title} ne doit pas être vide` };
  }
}
