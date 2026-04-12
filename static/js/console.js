(function () {
  var reset  = 'color: inherit; font-size: 13px;';
  var green  = 'color: #ffb000; font-size: 13px;';
  var bold   = 'color: #ffb000; font-weight: bold; font-size: 13px;';
  var dim    = 'color: #888; font-size: 12px;';

  console.log('%c┌──(piotr@kmiecik.it)', green);
  console.log('%c└─$ whoami', green);
  console.log('%c  DevOps Engineer | SRE', bold);
  console.log(' ');
  console.log('%c┌──(piotr@kmiecik.it)', green);
  console.log('%c└─$ cat contact.txt', green);
  console.log('%c  ✉  piotr@kmiecik.it', bold);
  console.log('%c  🐙%c https://github.com/User-Piotr', bold, reset);
  console.log(' ');
  console.log('%c(nothing to hack here, but glad you looked)', dim);
})();
