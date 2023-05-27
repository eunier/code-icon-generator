import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { RxjsModule } from '@workspace/angular/rxjs';
import { CodeIconGeneratorHttpService } from '../../services/code-icon-generator-http/code-icon-generator-http.service';
import { CodeIconGeneratorService } from '../../services/code-icon-generator/code-icon-generator.service';
import { CodeIconGeneratorPageComponent } from './code-icon-generator-page.component';

class CodeIconGeneratorHttpServiceMock
  implements Partial<CodeIconGeneratorHttpService> {}

export default {
  component: CodeIconGeneratorPageComponent,
  decorators: [
    moduleMetadata ({
      imports: [RxjsModule],
      providers: [CodeIconGeneratorService, CodeIconGeneratorHttpService],
    }),
  ],
} as Meta<CodeIconGeneratorPageComponent>;

type Story = StoryObj<CodeIconGeneratorPageComponent>;

export const Primary: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {},
};
