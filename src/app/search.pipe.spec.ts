import { SearchPipe } from './search.pipe';

describe('Pipe: SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('test transform method', () => {
    const pipe = new SearchPipe();
    expect(pipe.transform([{short_name:'Peter', full_name: 'Ryan'}],'peter')).toEqual([{short_name:'Peter', full_name: 'Ryan'}]);
    expect(pipe.transform([{short_name:'Peter', full_name: 'Ryan'}],'Laura')).toEqual([]);

  });

});
