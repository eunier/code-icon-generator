import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SvgStringRendererComponent } from './svg-string-renderer.component';

describe ('SvgStringRendererComponent', () => {
  let component: SvgStringRendererComponent;
  let fixture: ComponentFixture<SvgStringRendererComponent>;

  beforeEach (async () => {
    await TestBed.configureTestingModule ({
      declarations: [SvgStringRendererComponent],
    }).compileComponents ();

    fixture = TestBed.createComponent (SvgStringRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges ();
  });

  it ('should create', () => {
    expect (component).toBeTruthy ();
  });
});
