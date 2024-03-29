HTTPS LiveReload
====

This tool allows you to specify a directory to watch and run a HTTPS liveReload instance.

# Installation:
    npm install

# SSL Keys and Certificates
GruntFile.js is currently hardcoded to look for liveReloadCert.pem and liveReloadKey.pem in the root directory.  For dev purposes, these can easily be generated by following some [StackOverflow instructions](http://stackoverflow.com/questions/12871565/how-to-create-pem-files-for-https-web-server)

# Running:
    grunt --source=sourceDir

The --source attribute should point to the root directory of web-app code that you're running.  **Right now we're only watching css files in the css directory, although this can easily be changed in GruntFile.js to suit your needs.**  ~'s don't work in the source parameter, but relative paths seem to work just fine.

# Bookmarklet:
Browser extensions don't currently support HTTPS, so you'll need to use a bookmarklet or execute the following javascript manually:

    javascript:(function(d){var e=d.createElement('script');e.setAttribute('src','https://localhost:35729/livereload.js?snipver=1');d.body.appendChild(e);})(document);

Before running the bookmarklet, you have to trust the unsigned certificate being used.  You can accept it temporarily by going to [https://localhost:35729/livereload.js?snipver=1](https://localhost:35729/livereload.js?snipver=1) directly in a browser and accepting the unsigned certificate.  A more permanent solution is storing the certificate in Keychain on a Mac and setting it to always trust.
