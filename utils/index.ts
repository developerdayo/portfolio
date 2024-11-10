import type { AbsolutePath, RelativePath, EmailPath } from '@props/index';
import { EMAIL_URL } from '@constants/index';

export function isEmailPath(value: EmailPath | AbsolutePath | RelativePath): value is EmailPath {
  return value === EMAIL_URL;
}
