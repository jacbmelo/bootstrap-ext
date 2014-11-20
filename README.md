Bootstrap Extensions
====================

Set of extensions for [Bootstrap](https://github.com/twbs/bootstrap).

## Quick start

There are three options available:

- Install with [Bower](http://bower.io): `bower install jacbmelo/bootstrap-ext --save`.
- [Download the latest release](https://github.com/jacbmelo/bootstrap-ext/archive/master.zip).
- Clone the repo: `git clone https://github.com/jacbmelo/bootstrap-ext.git`.

## Features

#### Fix columns on a responsive table

To start add:

    <!-- bootstrap-ext -->
    <link type="text/css" rel="stylesheet" href="components/bootstrap-ext/css/tables.css" />
    <script src="components/bootstrap-ext/js/tables.js"></script>

To your page.

Add the CSS class `.fixed-col` to the `<td>` and `<th>` you want to keep fixed and then call `$('#table-id').fixTableCols()` or simply call `$('.table-responsive > table').fixTableCols()` to look on all tables in the page. 

You can also just call `$('#table-id').fixTableCols({columns: 2})` to fix the first two columns of the table.

## Bugs and feature requests

Have a bug or a feature request? Please first [search for existing and closed issues](https://github.com/jacbmelo/bootstrap-ext/issues). If your problem or idea is not addressed yet, [open a new issue](https://github.com/jacbmelo/bootstrap-ext/issues/new).

## Versioning

Bootstrap Extensions is maintained under [the Semantic Versioning guidelines](http://semver.org/). 

## Creator

**João Melo**

- <https://github.com/jacbmelo>
- <https://twitter.com/jacbmelo>

## Copyright and license

Code and documentation copyright 2014 João Melo. Code released under [the MIT license](LICENSE).
