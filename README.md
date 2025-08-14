# BioCatch - The Fast and Furious Integration Challenge

Challenge Project for BioCatch process.

## Project Structure

```
FnFBC/
.
├── account.html
├── css
│   ├── bootstrap
│   │   ├── bootstrap-grid.css
│   │   └── bootstrap-reboot.css
│   ├── bootstrap.min.css
│   ├── bootstrap.min.css.map
│   ├── owl.carousel.min.css
│   └── style.css
├── fonts
│   └── icomoon
│       ├── demo-files
│       │   ├── demo.css
│       │   └── demo.js
│       ├── demo.html
│       ├── fonts
│       │   ├── icomoon.eot
│       │   ├── icomoon.svg
│       │   ├── icomoon.ttf
│       │   └── icomoon.woff
│       ├── Read Me.txt
│       ├── selection.json
│       └── style.css
├── images
│   ├── bg_1.jpg
│   ├── biocatch-logo-dec-2022.png
│   ├── biocatch_logo.jpg
│   └── undraw_file_sync_ot38.svg
├── index.html
├── js
│   ├── bootstrap.min.js
│   ├── jquery-3.3.1.min.js
│   ├── main.js
│   ├── owl.carousel.min.js
│   └── popper.min.js
├── payment.html
├── README.md
└── scss
    ├── bootstrap
    │   ├── _alert.scss
    │   ├── _badge.scss
    │   ├── bootstrap-grid.scss
    │   ├── bootstrap-reboot.scss
    │   ├── bootstrap.scss
    │   ├── _breadcrumb.scss
    │   ├── _button-group.scss
    │   ├── _buttons.scss
    │   ├── _card.scss
    │   ├── _carousel.scss
    │   ├── _close.scss
    │   ├── _code.scss
    │   ├── _custom-forms.scss
    │   ├── _dropdown.scss
    │   ├── _forms.scss
    │   ├── _functions.scss
    │   ├── _grid.scss
    │   ├── _images.scss
    │   ├── _input-group.scss
    │   ├── _jumbotron.scss
    │   ├── _list-group.scss
    │   ├── _media.scss
    │   ├── mixins
    │   │   ├── _alert.scss
    │   │   ├── _background-variant.scss
    │   │   ├── _badge.scss
    │   │   ├── _border-radius.scss
    │   │   ├── _box-shadow.scss
    │   │   ├── _breakpoints.scss
    │   │   ├── _buttons.scss
    │   │   ├── _caret.scss
    │   │   ├── _clearfix.scss
    │   │   ├── _deprecate.scss
    │   │   ├── _float.scss
    │   │   ├── _forms.scss
    │   │   ├── _gradients.scss
    │   │   ├── _grid-framework.scss
    │   │   ├── _grid.scss
    │   │   ├── _hover.scss
    │   │   ├── _image.scss
    │   │   ├── _list-group.scss
    │   │   ├── _lists.scss
    │   │   ├── _nav-divider.scss
    │   │   ├── _pagination.scss
    │   │   ├── _reset-text.scss
    │   │   ├── _resize.scss
    │   │   ├── _screen-reader.scss
    │   │   ├── _size.scss
    │   │   ├── _table-row.scss
    │   │   ├── _text-emphasis.scss
    │   │   ├── _text-hide.scss
    │   │   ├── _text-truncate.scss
    │   │   ├── _transition.scss
    │   │   └── _visibility.scss
    │   ├── _mixins.scss
    │   ├── _modal.scss
    │   ├── _navbar.scss
    │   ├── _nav.scss
    │   ├── _pagination.scss
    │   ├── _popover.scss
    │   ├── _print.scss
    │   ├── _progress.scss
    │   ├── _reboot.scss
    │   ├── _root.scss
    │   ├── _spinners.scss
    │   ├── _tables.scss
    │   ├── _toasts.scss
    │   ├── _tooltip.scss
    │   ├── _transitions.scss
    │   ├── _type.scss
    │   ├── utilities
    │   │   ├── _align.scss
    │   │   ├── _background.scss
    │   │   ├── _borders.scss
    │   │   ├── _clearfix.scss
    │   │   ├── _display.scss
    │   │   ├── _embed.scss
    │   │   ├── _flex.scss
    │   │   ├── _float.scss
    │   │   ├── _overflow.scss
    │   │   ├── _position.scss
    │   │   ├── _screenreaders.scss
    │   │   ├── _shadows.scss
    │   │   ├── _sizing.scss
    │   │   ├── _spacing.scss
    │   │   ├── _stretched-link.scss
    │   │   ├── _text.scss
    │   │   └── _visibility.scss
    │   ├── _utilities.scss
    │   ├── _variables.scss
    │   └── vendor
    │       └── _rfs.scss
    └── style.scss

14 directories, 119 files
```


## Instructions to run

1. Unzip the file FnFBC.zip

2. Open the index.html on a web browser (Google Chrome if it's possible)

3. Navigate trhough the web pages:
    index.html contain the login page and will redirect to account.html page that will redirect to payment.html page and after the "payment" will logout and redirect to index.html again.



## Bonus Questions Answers:

1. 

I'd trigger the tracking functions, such as setCustomerSessionId, according to route or view changes instead of page loads.

One possible implementation is to ensure that the function setCustomerSessionId will be called once per Session. Initialize when the SPA boots and stores the customerSessionId in a global state or something that will be accessible across the routes and views changes.

2. 
For example, using 'self', we allow scripts from the same origin only. And for using inline scripts, we need to put the  'unsafe-inline' parameter.
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' https://bcdn-4ff4f23f.we-stats.com 'unsafe-inline';
  connect-src 'self' https://bcdn-4ff4f23f.we-stats.com https://hooks.zapier.com;
  img-src 'self' data:;
  style-src 'self' 'unsafe-inline';
  font-src 'self';

3. 


