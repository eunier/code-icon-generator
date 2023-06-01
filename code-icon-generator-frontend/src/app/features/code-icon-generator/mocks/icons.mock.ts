import * as mock from '@workspace/code-icon-generator/mocks';
import { Icon } from '../interfaces/icon.interface';

export const icons = mock.files.map (
  (file): Partial<Icon> => ({ file, svg: window.atob (file.content) }),
);
