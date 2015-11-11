var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function (){
  //var b = browserify({debug: true});
  var b = browserify({debug: false});
  b.add('./src/index.jsx');

  return b
      //.transform(babelify, {extensions: [".jsx"] , presets: ["es2015", "react"], sourceMaps: false})
      .transform(babelify, {extensions: [".jsx"] , presets: ["es2015", "react"], sourceMaps: false})
      .bundle()
      .on('error', function(err){
        console.log(err.message);
        this.end();
      })
      .pipe(source('app.js'))
      .pipe(gulp.dest('./build'));
});

 gulp.task('default', function (){
   return gulp.src('./src/index.js')
     .pipe(gulp.dest('build'));
 });

// var watcher = gulp.watch('src/*.js', ['default']);
//    watcher.on('change', function(event) {
//    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// });
