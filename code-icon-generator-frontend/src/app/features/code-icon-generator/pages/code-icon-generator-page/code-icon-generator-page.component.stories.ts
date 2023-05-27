import { HttpClient } from '@angular/common/http';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { RxjsModule } from '@workspace/angular/rxjs';
import { CodeIconGeneratorComponentModule } from '../../components/code-icon-generator/code-icon-generator.module';
import { HttpClientMock } from '../../mocks/http-client.service.mock';
import { CodeIconGeneratorHttpService } from '../../services/code-icon-generator-http/code-icon-generator-http.service';
import { CodeIconGeneratorStoreService } from '../../services/code-icon-generator-store/code-icon-generator-store.service';
import { CodeIconGeneratorService } from '../../services/code-icon-generator/code-icon-generator.service';
import { CodeIconGeneratorPageComponent } from './code-icon-generator-page.component';

export default {
  component: CodeIconGeneratorPageComponent,
  decorators: [
    moduleMetadata ({
      imports: [CodeIconGeneratorComponentModule, RxjsModule],
      providers: [
        CodeIconGeneratorHttpService,
        CodeIconGeneratorService,
        CodeIconGeneratorStoreService,
        { provide: HttpClient, useClass: HttpClientMock },
      ],
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
