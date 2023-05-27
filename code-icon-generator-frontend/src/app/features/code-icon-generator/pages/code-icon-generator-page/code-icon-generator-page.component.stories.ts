import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CodeIconGeneratorService } from '../../services/code-icon-generator/code-icon-generator.service';
import { CodeIconGeneratorPageComponent } from './code-icon-generator-page.component';

export default {
  component: CodeIconGeneratorPageComponent,
  decorators: [
    moduleMetadata ({
      providers: [CodeIconGeneratorService],
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