import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeIconGeneratorComponent } from './code-icon-generator.component';

describe('CodeIconGeneratorComponent', () => {
  let component: CodeIconGeneratorComponent;
  let fixture: ComponentFixture<CodeIconGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeIconGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeIconGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
