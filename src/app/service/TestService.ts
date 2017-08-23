import { Http } from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class TestService {
    constructor(http: Http) {
        http.get('www.baidu.com');
    }
}