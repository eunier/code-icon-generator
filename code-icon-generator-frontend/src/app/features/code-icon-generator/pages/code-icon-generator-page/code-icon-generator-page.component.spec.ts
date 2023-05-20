import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeIconGeneratorPageComponent } from 'app/modules/code-icon-generator/pages/code-icon-generator-page/code-icon-generator-page.component';

describe ('CodeIconGeneratorPageComponent', () => {
  let component: CodeIconGeneratorPageComponent;
  let fixture: ComponentFixture<CodeIconGeneratorPageComponent>;

  beforeEach (async () => {
    await TestBed.configureTestingModule ({
      declarations: [CodeIconGeneratorPageComponent],
    }).compileComponents ();

    fixture = TestBed.createComponent (CodeIconGeneratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges ();
  });

  it ('should create', () => {
    expect (component).toBeTruthy ();
  });
});
