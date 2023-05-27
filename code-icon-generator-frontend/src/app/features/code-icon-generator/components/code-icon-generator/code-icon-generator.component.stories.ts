import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import * as rxjs from 'rxjs';
import { CodeIconGeneratorStoreService } from '../../services/code-icon-generator-store/code-icon-generator-store.service';
import { SvgStringRendererComponentModule } from '../svg-string-renderer/svg-string-renderer.module';
import { CodeIconGeneratorComponent } from './code-icon-generator.component';

class Store implements Partial<CodeIconGeneratorStoreService> {
  public readonly icons$? = rxjs.of ([
    '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 20H4c-1.11 0-2-.9-2-2V6c0-1.11.89-2 2-2h6l2 2h7a2 2 0 0 1 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#90a4ae" /></svg>',
  ]);
}

export default {
  title: 'CodeIconGeneratorComponent',
  component: CodeIconGeneratorComponent,
  decorators: [
    moduleMetadata ({
      imports: [SvgStringRendererComponentModule],
      providers: [
        { provide: CodeIconGeneratorStoreService, useClass: Store },
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
