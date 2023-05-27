import { Meta, StoryObj } from '@storybook/angular';
import { AppComponent } from './app.component';

export default {
  component: AppComponent,
} as Meta<AppComponent>;

type Story = StoryObj<AppComponent>;

export const Primary: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {},
};
