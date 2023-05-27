import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { RxjsModule } from '@workspace/angular/rxjs';
import * as rxjs from 'rxjs';
// import * as mocks from '../../mocks/icons.mock';
import * as mock from '@workspace/code-icon-generator/mocks';
import { CodeIconGeneratorStoreService } from '../../services/code-icon-generator-store/code-icon-generator-store.service';
import { SvgStringRendererComponentModule } from '../svg-string-renderer/svg-string-renderer.module';
import { CodeIconGeneratorComponent } from './code-icon-generator.component';

class CodeIconGeneratorStoreServiceMock
  implements Partial<CodeIconGeneratorStoreService>
{
  public readonly files$? = rxjs.of (mock.files);
}

export default {
  component: CodeIconGeneratorComponent,
  decorators: [
    moduleMetadata ({
      imports: [SvgStringRendererComponentModule, RxjsModule],
      providers: [
        {
          provide: CodeIconGeneratorStoreService,
          useClass: CodeIconGeneratorStoreServiceMock,
        },
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
