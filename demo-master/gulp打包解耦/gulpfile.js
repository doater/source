var gulp=require('gulp');
var fs=require('fs');
var path=require('path');

var deep=3;
run_tasks('_tasks');
function run_tasks(tasks_path){
    if (--deep < 0) {
        throw new Error('something wrong in require tasks!');
        return;
    }
    tasks_path=path.resolve(__dirname,tasks_path);
    if (fs.existsSync(tasks_path)) {
        require(tasks_path)(gulp)
    } else {
        run_tasks(tasks_path);
    }
}