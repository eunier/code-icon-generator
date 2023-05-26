import { Meta, StoryObj } from '@storybook/angular';
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
    svgString:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15 6.04 7.5 12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71z" style="fill:#29b6f6"/></svg>',
  },
};

export const FolderWithIconClose: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {
    svgString:
      '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#e57373" fill-rule="nonzero" style="fill:#546e7a"/><path d="m18.139 8.318-5.326 2.367v3.55c0 3.285 2.272 6.356 5.326 7.102 3.054-.746 5.326-3.817 5.326-7.102v-3.55l-5.326-2.367m0 2.367a1.775 1.775 0 0 1 1.775 1.775 1.775 1.775 0 0 1-1.775 1.775 1.775 1.775 0 0 1-1.775-1.775 1.775 1.775 0 0 1 1.775-1.775m3.036 7.101a5.734 5.734 0 0 1-3.036 2.32 5.735 5.735 0 0 1-3.036-2.32 6.016 6.016 0 0 1-.515-.905c0-.977 1.604-1.776 3.551-1.776s3.55.782 3.55 1.776c-.141.313-.313.61-.514.905z" style="fill:#cfd8dc;stroke-width:.59177"/></svg>',
  },
};

export const FolderWithIconOpen: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {
    svgString:
      '<svg clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#e57373" style="fill:#546e7a"/><path d="m18.139 8.318-5.326 2.367v3.55c0 3.285 2.272 6.356 5.326 7.102 3.054-.746 5.326-3.817 5.326-7.101v-3.55l-5.326-2.368m0 2.367a1.775 1.775 0 0 1 1.775 1.775 1.775 1.775 0 0 1-1.775 1.776 1.775 1.775 0 0 1-1.775-1.776 1.775 1.775 0 0 1 1.775-1.775m3.036 7.101a5.734 5.734 0 0 1-3.036 2.32 5.734 5.734 0 0 1-3.036-2.32 6.016 6.016 0 0 1-.515-.905c0-.976 1.604-1.775 3.551-1.775s3.55.78 3.55 1.775c-.141.314-.313.61-.514.905z" style="fill:#cfd8dc;stroke-width:.59177"/></svg>',
  },
};

export const FolderClose: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {
    svgString:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-1.11-.9-2-2-2h-8l-2-2z" fill="#90a4ae" /></svg>',
  },
};

export const FolderOpen: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {
    svgString:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 20H4c-1.11 0-2-.9-2-2V6c0-1.11.89-2 2-2h6l2 2h7a2 2 0 0 1 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#90a4ae" /></svg>',
  },
};
