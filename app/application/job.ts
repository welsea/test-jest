export default class Job {
    private static cmd: R.P.CMD
    constructor() {
        Job.cmd = R.P.getCMD()
    }

    getJob(){
        return 'job'
    }
}