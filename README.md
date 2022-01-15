# fandom

[![MIT license][license-badge]][license-url]
[![Maintenance status][status-badge]][status-url]

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
import { NodeBuilder } from "fandom";

const nb = new NodeBuilder();
const elements = [3, 14, 15, 9, 26];

for (let i = 0; i < elements.length; i++) {
    nb.div({ id: elements[i] }).withText(`number ${elements[i]}`);
}

const container = document.querySelector("#elements");

container.append(...this.nb.build());
```

[status-url]: https://github.com/vikian050194/fandom/pulse
[status-badge]: https://img.shields.io/github/last-commit/vikian050194/fandom.svg

[license-url]: https://github.com/vikian050194/fandom/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/vikian050194/fandom.svg
