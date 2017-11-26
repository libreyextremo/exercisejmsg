import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { DataserviceService } from './dataservice.service';

describe('Service: DataserviceService', () => {

  //setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [DataserviceService,
      { provide: XHRBackend, useClass: MockBackend }]
    });
  });

  it('getUserList should return an Observable<Array<Users>>',
    inject([DataserviceService], (dataserviceService) => {
      dataserviceService.getUserList().subscribe((users) => {
        expect(users).toBeDefined();
        expect(users.length).toBeGreaterThan(-1);
      });
  }));

  it('getUser should return an Observable<User>',
    inject([DataserviceService], (dataserviceService) => {
      dataserviceService.getUser(1).subscribe((user) => {
        expect(user).toBeDefined();
        expect(user.short_name).toBeDefined();
        expect(user.full_name).toBeDefined();
      });
  }));

});
