# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.9.0] - 2023-10-16

### Added

- `handlers` argument for all elements

## [0.8.1] - 2023-10-16

### Changed

- README usage example

## [0.8.0] - 2023-10-16

### Added

- `style` attribute

## [0.7.0] - 2023-09-09

### Added

- `Builder.close` method has optional argument - count iterations of "closing"
- `classList` attribute

### Changed

- `NPM` package contains source files
- Error message of raised exception in case of wrong state

## [0.6.0] - 2023-08-21

### Added

- `Builder.push` method
- `clear` function

## [0.5.0] - 2022-09-25

### Changed

- Rename `Couturier` to `Builder`

## [0.4.0] - 2022-02-27

### Added

- `button` method

## [0.3.0] - 2022-02-13

### Added

- `insert`, `replace` functions

### Changed

- Rename `TreeBuilder` to `Couturier`
- Rename `build` to `done`
- Make `convert` function from `TreeConverter` class

## [0.2.0] - 2022-02-06

### Added

- `onHover` handler
- Provide any tag for new element via `open` call
- Create elements like input via `just` call

### Changed

- Rename `NodeBuilder` to `TreeBuilder`
- `build` method validates current state before result return

## [0.1.1] - 2022-01-16

### Added

- Nothing

## [0.1.0] - 2022-01-15

### Added

- Create `div`, `span`, `h1`
- With optional text
- With inner `div`
- `onClick` handler
- Wrap all builded elements by provided DOM node

[Unreleased]: https://github.com/vikian050194/fandom/compare/v0.9.0...HEAD
[0.9.0]: https://github.com/vikian050194/fandom/compare/v0.8.1...v0.9.0
[0.8.1]: https://github.com/vikian050194/fandom/compare/v0.8.0...v0.8.1
[0.8.0]: https://github.com/vikian050194/fandom/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/vikian050194/fandom/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/vikian050194/fandom/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/vikian050194/fandom/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/vikian050194/fandom/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/vikian050194/fandom/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/vikian050194/fandom/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/vikian050194/fandom/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/vikian050194/fandom/releases/tag/v0.1.0
