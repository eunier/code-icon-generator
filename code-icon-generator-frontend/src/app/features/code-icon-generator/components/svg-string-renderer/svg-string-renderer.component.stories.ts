import { Meta, StoryObj } from '@storybook/angular';
import * as mocks from '@workspace/code-icon-generator/mocks';
import { SvgStringRendererComponent } from './svg-string-renderer.component';

export default {
  title: 'SvgStringRendererComponent',
  component: SvgStringRendererComponent,
} as Meta<SvgStringRendererComponent>;

type Story = StoryObj<SvgStringRendererComponent>;

export const Primary: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {
    svgString: mocks.icon,
  },
};

export const FolderClose: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {
    svgString: mocks.folderClose,
  },
};

export const FolderOpen: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {
    svgString: mocks.folderOpen,
  },
};

export const FolderWithIconClose: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {
    svgString: mocks.folderWithIconClose,
  },
};

export const FolderWithIconOpen: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {
    svgString: mocks.folderWithIconOpen,
  },
};
