/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      css: 'node_modules/systemjs-plugin-css/css.js',
      
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'survey-angular': 'npm:survey-angular/survey.angular.js',
      'knockout': 'npm:knockout/build/output/knockout-latest.js',
      'jquery': 'npm:jquery/dist/jquery.min.js',
      'bootstrap': 'npm:bootstrap/dist/js/bootstrap.min.js',
      'survey-knockout': 'npm:survey-knockout/survey.ko.js',
      'surveyjs-editor': 'npm:surveyjs-editor/surveyeditor.js'
    },
    meta: {
      'surveyjs-editor': {
        deps: ['npm:surveyjs-editor/surveyeditor.css!css', 'npm:survey-angular/survey.css!css', 'http://getbootstrap.com/dist/css/bootstrap.css!css']
      }
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
