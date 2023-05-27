import { Meta, StoryObj } from '@storybook/angular';
import { CodeIconGeneratorPageComponent } from './code-icon-generator-page.component';

export default {
  title: 'CodeIconGeneratorPageComponent',
  component: CodeIconGeneratorPageComponent,
} as Meta<CodeIconGeneratorPageComponent>;

type Story = StoryObj<CodeIconGeneratorPageComponent>;

export const Primary: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {},
};
