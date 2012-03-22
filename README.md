plovr
=====

An npm wrapper for Plovr, the Closure (JS compiler) build tool.

Building and Installing
-----------------------

```shell
npm install oid
```

Or grab the source and

```shell
node ./install.js
```

What this is really doing is just grabbing a particular "blessed" (by
this module) version of Plovr. As new versions of Plovr are released
and vetted, this module will be updated accordingly.

Running
-------

```shell
bin/plovr [plovr arguments]
```

And npm will install a link to the binary in `node_modules/.bin` as
it is wont to do.

Contributing
------------

Questions, comments, bug reports, and pull requests are all welcome.
Submit them at [the project on GitHub](https://github.com/Obvious/oid/).

Bug reports that include steps-to-reproduce (including code) are the
best. Even better, make them in the form of pull requests.

Author
------

[Dan Bornstein](https://github.com/danfuzz)
([personal website](http://www.milk.com/)), supported by
[The Obvious Corporation](http://obvious.com/).

License
-------

Copyright 2012 [The Obvious Corporation](http://obvious.com/).

Licensed under the Apache License, Version 2.0. 
See the top-level file `LICENSE.txt` and
(http://www.apache.org/licenses/LICENSE-2.0).
