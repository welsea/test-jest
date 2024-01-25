import { describe, expect, test, jest, beforeEach } from '@jest/globals';
import Job from '../app/application/job';

describe('Test Job',()=>{
    let job:any
    beforeEach(()=>{
        job=new Job()

    })

    test('return value',()=>{
        job.init()

        expect(job.getJob()).toBe('job')
    })
})