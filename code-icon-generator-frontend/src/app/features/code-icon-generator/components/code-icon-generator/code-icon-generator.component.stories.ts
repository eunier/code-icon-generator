import { Meta, StoryObj } from '@storybook/angular';
import { CodeIconGeneratorComponent } from './code-icon-generator.component';

export default {
  title: 'CodeIconGeneratorComponent',
  component: CodeIconGeneratorComponent,
} as Meta<CodeIconGeneratorComponent>;

type Story = StoryObj<CodeIconGeneratorComponent>;

export const Primary: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {},
};
