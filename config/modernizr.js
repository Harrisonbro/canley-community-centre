{
    cache: true,
    devFile: false,
    dest: "public/js/modernizr-custom.js",
    options: [
        "setClasses",
        "addTest",
        "html5printshiv",
        "testProp",
        "fnBind"
    ],
    uglify: false,
    tests: [
        "backgroundsize",
    ],
    excludeTests: [ ],
    crawl: false,
    useBuffers: false,
    files: {
    src: [
        "public/css/**/*.css",
        "public/js/**/*.js"
    ]
    },
    customTests: [ ]
}