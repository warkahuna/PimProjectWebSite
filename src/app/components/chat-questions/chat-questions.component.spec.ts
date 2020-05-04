import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatQuestionsComponent } from './chat-questions.component';

describe('ChatQuestionsComponent', () => {
  let component: ChatQuestionsComponent;
  let fixture: ComponentFixture<ChatQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
