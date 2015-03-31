/*
	Run the following commands to install npm modules on cmd
	> npm install grunt init
	> npm install grunt-contrib-less
	> npm install grunt-contrib-uglify
	> npm install grunt-contrib-watch

	This repo has been forked. So if you update this, all forked repos will be "downstreamed"
*/

module.exports = function(grunt) {
    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		/* LESS: compresses and combines all .less files into a single .css file */
		less: {
			dist: {
				options: {
					style: "expanded",
					debugInfo: true,
					lineNumbers: true,
					paths: ["./less"],
					expand: false,
				},
				files: {
					"./dist/css/style.css": ["./less/style.less"]
				}
			}
		},
		
		concat: {
			options: {
				saperator: ';'
			},
			dev: {
				src: ["./scripts/*.js"],
				dest: "./dist/js/script.js",
				expanded: true
			}
		},
		
		uglify: {
			dist: {
				src: "./scripts/*.js",
				dest: "./dist/js/script.js",
				expanded: true,
			}
		},
		
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: "./less/*.less",
				tasks: "less"
			},
			scripts: {
				files: "./scripts/*.js",
				tasks: "concat",
			}
		}
	});
	
	
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	
	/* Set Default task */
	grunt.registerTask("default", ["watch"])
};