import { Person } from './model'
import {Injectable} from '@angular/core'

@Injectable()
export class Mock {
    public mike = new Person(1, "Mike", "mike@gmail");
}