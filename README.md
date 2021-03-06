# fandom

[![MIT license][license-badge]][license-url]
[![Maintenance status][status-badge]][status-url]
[![NPM version][npm-badge]][npm-url]
[![Downloads per week][downloads-badge]][downloads-url]
[![Code coverage][coverage-badge]][coverage-url]

## Attention

Until `v1.0.0` is released any breaking changes could be introduced without major version bumping

## About

**fandom** is a lightweight vanilla package that helps build DOM nodes

It has quite limited abilities but it's good enough in simple cases

## Motivation

I'm a bit tired that some developers use heavy tools (like React, Vue or Angular) everywhere and all the time even if application is so tiny

Those tools are everywhere around us

It's over-engineering and a bit stupid from my point of view

Let's make something lightweight and nice

## Usage

```javascript
import { Couturier, convert, insert, replace } from "fandom";

const container = document.querySelector("#root");

const couturier = new Couturier();
const elements = [3, 14, 15, 9, 26];

couturier.div({ class: "list" });

for (let i = 0; i < elements.length; i++) {
    couturier.div({ id: elements[i] }).text(`number ${elements[i]}`).close();
}

couturier.close();

const model = couturier.done();
const domElements = convert(model);

replace(container, domElements);
```

[status-url]: https://github.com/vikian050194/fandom/pulse
[status-badge]: https://img.shields.io/github/last-commit/vikian050194/fandom.svg

[license-url]: https://github.com/vikian050194/fandom/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/vikian050194/fandom.svg

[npm-url]: https://www.npmjs.com/package/fandom
[npm-badge]: https://img.shields.io/npm/v/fandom

[downloads-url]: https://www.npmjs.com/package/fandom
[downloads-badge]: https://img.shields.io/npm/dw/fandom

[coverage-url]: https://codecov.io/gh/vikian050194/fandom
[coverage-badge]: https://img.shields.io/codecov/c/github/vikian050194/fandom
