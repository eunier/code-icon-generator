import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import * as mocks from '@workspace/code-icon-generator/mocks';
import * as rxjs from 'rxjs';
import { CodeIconGeneratorStoreService } from '../../services/code-icon-generator-store/code-icon-generator-store.service';
import { SvgStringRendererComponentModule } from '../svg-string-renderer/svg-string-renderer.module';
import { CodeIconGeneratorComponent } from './code-icon-generator.component';

class CodeIconGeneratorStoreServiceMock
  implements Partial<CodeIconGeneratorStoreService>
{
  public readonly icons$? = rxjs.of ([mocks.folderOpen]);
}

export default {
  component: CodeIconGeneratorComponent,
  decorators: [
    moduleMetadata ({
      imports: [SvgStringRendererComponentModule],
      providers: [
        {
          provide: CodeIconGeneratorStoreService,
          useClass: CodeIconGeneratorStoreServiceMock,
        },
        // { provide: SVG_JSV_TOKEN, useValue: svgJs },
      ],
    }),
  ],
} as Meta<CodeIconGeneratorComponent>;

type Story = StoryObj<CodeIconGeneratorComponent>;

export const Primary: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {},
};
