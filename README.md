# Faketyper
Faketyper is a small tool that i wrote mainly for fun.
It takes text from HTML element, empties it, and then writes it back letter by letter.
See the live demo [here](https://kamilbeben.github.io/faketyper/).

# Usage
In order to use Faketyper, you must first include it's files in the HTML file. This is done by including the following in `<head>` section
```html
<script src="https://cdn.jsdelivr.net/gh/kamilbeben/faketyper@1.0/faketyper.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kamilbeben/faketyper@1.0/faketyper.css">
```
Then, insert some element with class `faketyper` and text inside it.
```html
<span class="faketyper example">
    Hello there
</span>
```
And initialize the faketyper
```js
    faketyper.init({
        selector: '.faketyper.example',
        interval: 5
    })
```
Note:
`faketyper.init` returns a `Promise`, which will be resolved as soon as it will stop typing. This can be handful if you need to specify different options for certain elements. See [index.html](https://github.com/kamilbeben/faketyper/blob/master/index.html) for examples.

# Options
| name | type | default | description |
|:-|:-|:-|:-|
| selector | CSS selector string | `'.faketyper.auto'` | Selector pointing to elements which will be affected by faketyper |
| delay | number | `0` | Time before the rendering starts |
| interval | number | `25` | Time between rendering two letters |
| duration | number | `null` | Duration of the whole process. If set, **interval** is ignored |
| showPrompt | boolean | `false` | Emulate command prompt sign |

# Requirements
None. It's written in Vanilla JS.

# Additional notes
Though this is licensed by MIT license and you can use it as you want, i would be glad to know whenever someone found this useful. 