import { CommentstatePipe } from './commentstate.pipe';

describe('Pipe: CommentstatePipe', () => {

  it('create an instance', () => {
    const pipe = new CommentstatePipe();
    expect(pipe).toBeTruthy();
  });

  it('test transform method', () => {
    const pipe = new CommentstatePipe();
    expect(pipe.transform('N','')).toBe('No validated');
    expect(pipe.transform('D','')).toBe('Discarted');
    expect(pipe.transform('V','')).toBe('Verified');
    expect(pipe.transform('R','')).toBe('Unknown');
  });

});
