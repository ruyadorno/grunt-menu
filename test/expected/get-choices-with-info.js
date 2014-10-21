module.exports = {
  arr:
  [{
      name: 'copy - Copy files.',
      value: 'copy',
      run: ''
    },
    {
      name: 'concat - Concatenate files.',
      value: 'concat',
      run: ''
    },
    {
      name: 'uglify - Minify files with UglifyJS.',
      value: 'uglify',
      run: ''
    },
    {
      name: 'jshint - Validate files with JSHint.',
      value: 'jshint',
      run: ''
    },
    {
      name: 'cssmin - Minify CSS',
      value: 'cssmin',
      run: ''
    },
    {
      name: 'connect - Start a connect web server.',
      value: 'connect',
      run: ''
    },
    {
      name: 'clean - Clean files and folders.',
      value: 'clean',
      run: ''
    },
    {
      name: 'watch - Run predefined tasks whenever watched files change.',
      value: 'watch',
      run: ''
    },
    {
      name: 'usemin - Replaces references to non-minified scripts / stylesheets',
      value: 'usemin',
      run: ''
    },
    {
      name: 'useminPrepare - Using HTML markup as the primary source of information',
      value: 'useminPrepare',
      run: ''
    },
    {
      name: 'rev - Prefix static asset file names with a content hash',
      value: 'rev',
      run: ''
    },
    {
      name: 'open - Open urls and files from a grunt task',
      value: 'open',
      run: ''
    },
    {
      name: 'concurrent - Run grunt tasks concurrently',
      value: 'concurrent',
      run: ''
    },
    {
      name: 'prepare_sg_release - Custom task.',
      value: 'prepare_sg_release',
      run: ''
    },
    {
      name: 'merge_sg_release - Custom task.',
      value: 'merge_sg_release',
      run: ''
    },
    {
      name: 'finish_sg_release - Custom task.',
      value: 'finish_sg_release',
      run: ''
    },
    {
      name: 'sg_release - The SunGard standard release script for HTML5 projects.',
      value: 'sg_release',
      run: ''
    },
    {
      name: 'menu - Add an useful menu for listing/executing your configured tasks.',
      value: 'menu',
      run: ''
    },
    {
      name: 'ngmin - Annotate AngularJS scripts for minification',
      value: 'ngmin',
      run: ''
    },
    {
      name: 'recess - Lint and minify CSS and LESS',
      value: 'recess',
      run: ''
    },
    {
      name: 'karma - run karma.',
      value: 'karma',
      run: ''
    },
    {
      name: 'server - Custom task.',
      value: 'server',
      run: ''
    },
    {
      name: 'test - Alias for "clean:server", "concurrent:test", "karma" tasks.',
      value: 'test',
      run: ''
    },
    {
      name: 'build - Alias for "clean:dist", "useminPrepare", "concurrent:dist", "concat", "copy", "ngmin", "cssmin", "uglify", "rev", "usemin" tasks.',
      value: 'build',
      run: ''
    },
    {
      name: 'default - Alias for "jshint", "test", "build" tasks.',
      value: 'default',
      run: ''
    },
    {
      name: 'release - Alias for "sg_release" task.',
      value: 'release',
      run: ''
    }],
  dic:
  {
    copy: {
      name: 'copy - Copy files.',
      value: 'copy',
      run: ''
    },
    concat: {
      name: 'concat - Concatenate files.',
      value: 'concat',
      run: ''
    },
    uglify: {
      name: 'uglify - Minify files with UglifyJS.',
      value: 'uglify',
      run: ''
    },
    jshint: {
      name: 'jshint - Validate files with JSHint.',
      value: 'jshint',
      run: ''
    },
    cssmin: {
      name: 'cssmin - Minify CSS',
      value: 'cssmin',
      run: ''
    },
    connect: {
      name: 'connect - Start a connect web server.',
      value: 'connect',
      run: ''
    },
    clean: {
      name: 'clean - Clean files and folders.',
      value: 'clean',
      run: ''
    },
    watch: {
      name: 'watch - Run predefined tasks whenever watched files change.',
      value: 'watch',
      run: ''
    },
    usemin: {
      name: 'usemin - Replaces references to non-minified scripts / stylesheets',
      value: 'usemin',
      run: ''
    },
    useminPrepare: {
      name: 'useminPrepare - Using HTML markup as the primary source of information',
      value: 'useminPrepare',
      run: ''
    },
    rev: {
      name: 'rev - Prefix static asset file names with a content hash',
      value: 'rev',
      run: ''
    },
    open: {
      name: 'open - Open urls and files from a grunt task',
      value: 'open',
      run: ''
    },
    concurrent: {
      name: 'concurrent - Run grunt tasks concurrently',
      value: 'concurrent',
      run: ''
    },
    prepare_sg_release: {
      name: 'prepare_sg_release - Custom task.',
      value: 'prepare_sg_release',
      run: ''
    },
    merge_sg_release: {
      name: 'merge_sg_release - Custom task.',
      value: 'merge_sg_release',
      run: ''
    },
    finish_sg_release: {
      name: 'finish_sg_release - Custom task.',
      value: 'finish_sg_release',
      run: ''
    },
    sg_release: {
      name: 'sg_release - The SunGard standard release script for HTML5 projects.',
      value: 'sg_release',
      run: ''
    },
    menu: {
      name: 'menu - Add an useful menu for listing/executing your configured tasks.',
      value: 'menu',
      run: ''
    },
    ngmin: {
      name: 'ngmin - Annotate AngularJS scripts for minification',
      value: 'ngmin',
      run: ''
    },
    recess: {
      name: 'recess - Lint and minify CSS and LESS',
      value: 'recess',
      run: ''
    },
    karma: {
      name: 'karma - run karma.',
      value: 'karma',
      run: ''
    },
    server: {
      name: 'server - Custom task.',
      value: 'server',
      run: ''
    },
    test: {
      name: 'test - Alias for "clean:server", "concurrent:test", "karma" tasks.',
      value: 'test',
      run: ''
    },
    build: {
      name: 'build - Alias for "clean:dist", "useminPrepare", "concurrent:dist", "concat", "copy", "ngmin", "cssmin", "uglify", "rev", "usemin" tasks.',
      value: 'build',
      run: ''
    },
    default: {
      name: 'default - Alias for "jshint", "test", "build" tasks.',
      value: 'default',
      run: ''
    },
    release: {
      name: 'release - Alias for "sg_release" task.',
      value: 'release',
      run: ''
    }
  }
};
