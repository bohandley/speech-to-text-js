const fs = require('fs');
const path = require('path');

/**
 * Explores recursively a directory and returns all the filepaths and folderpaths in the callback.
 * 
 * @see http://stackoverflow.com/a/5827895/4241030
 * @param {String} dir 
 * @param {Function} done 
 */
 // Edited by BJO: 
module.exports = {

    filewalker: function(dir, done) {
        
        let results = [];
    
        fs.readdir(dir, function(err, list) {
            if (err) return done(err);
    
            let pending = list.length;
    
            if (!pending) return done(null, results);
    
            list.forEach(function(file){
                // Uncomment the line below if you want the full path
                // file = path.resolve(dir, file);
    
                fs.stat(file, function(err, stat){
                    // If directory, execute a recursive call
                    if (stat && stat.isDirectory()) {
                        // Add directory to array [comment if you need to remove the directories from the array]
                        results.push(file);
    
                        filewalker(file, function(err, res){
                            results = results.concat(res);
                            if (!--pending) done(null, results);
                        });
                    } else {
                        // only store ogg files and ignore .DS_Store
                        if ( file.includes("ogg")){
                          results.push(file);
                        }
                        // log each file to the console
                        console.log(file);
                        
                        if (!--pending) done(null, results);
                    }
                });
            });
        });

    },


    getPathOfDirectory: function(directory){
        return __dirname + directory;
    },

    createTextFile: function(file){
        return file.substr(0, file.length - 3) + "txt";
    }

}

