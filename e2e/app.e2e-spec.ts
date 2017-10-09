import { ExamAngularPage } from './app.po';

describe('exam-angular App', () => {
  let page: ExamAngularPage;

  beforeEach(() => {
    page = new ExamAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
