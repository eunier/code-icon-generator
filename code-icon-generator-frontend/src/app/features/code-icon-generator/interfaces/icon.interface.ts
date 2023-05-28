import { File } from '@workspace/code-icon-generator/interfaces';

export interface Icon {
  svg: string;
  file: File;
  isFolder: boolean;
}
