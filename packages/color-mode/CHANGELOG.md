# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.11 (2020-11-10)

### Bug Fixes

- closure issue with document.bodyand sync-body-class
  ([27e8ce7](https://github.com/chakra-ui/chakra-ui/commit/27e8ce7da8810c61a73399e82f5a02a316a4c762))
- defaultColorMode type in ColorModeScript
  ([f554e43](https://github.com/chakra-ui/chakra-ui/commit/f554e43d98d71c0e9e5a8994f57560248b702e5c))
- forward theme.config to ColorModeProvider
  ([097c783](https://github.com/chakra-ui/chakra-ui/commit/097c783a00736a119b253fb26316c7538de929c5))
- package json exports
  ([a10c0bc](https://github.com/chakra-ui/chakra-ui/commit/a10c0bcb809314a96d58c7febd9b2755e8997603))
- **color-mode:** cookie manager default argument
  ([57b5eb3](https://github.com/chakra-ui/chakra-ui/commit/57b5eb3154c1c8167fc103e112588febc4812de5))
- **color-mode:** getColorScheme fails in test env
  ([1766d3a](https://github.com/chakra-ui/chakra-ui/commit/1766d3a0d0edc3f295b0b021b8e382f40f83b18f))
- typo in test
  ([bf5d0cd](https://github.com/chakra-ui/chakra-ui/commit/bf5d0cd4dfddff4c620d04b9f367ea28ca60ec0e))
- **color-mode:** catch when localStorage is disabled
  ([a52cc19](https://github.com/chakra-ui/chakra-ui/commit/a52cc1914ab133120b2e4c1873a8740d12bac806))
- **color-mode:** sync value prop with state for controlled modes
  ([00881d4](https://github.com/chakra-ui/chakra-ui/commit/00881d4c592374e2015639acefdd7153cc5f872a))
- **colormode:** cookie storage manager to function
  ([7b72850](https://github.com/chakra-ui/chakra-ui/commit/7b72850bd553964e5d0286f171c12de9d5dc67aa))
- **colormode:** csr and hydration issues
  ([de50c9d](https://github.com/chakra-ui/chakra-ui/commit/de50c9d65f1a8a607db1486b418ddd9bfb65ccc1)),
  closes [#2106](https://github.com/chakra-ui/chakra-ui/issues/2106)
- **colormode:** use old mql api
  ([fd940a4](https://github.com/chakra-ui/chakra-ui/commit/fd940a455cc31e4606b51a8ba55ab3d53617f4f0)),
  closes [#2097](https://github.com/chakra-ui/chakra-ui/issues/2097)
- properly sync root attribute
  ([5b2929b](https://github.com/chakra-ui/chakra-ui/commit/5b2929b279abfec1bb44b69088c50e06863f5813))
- use root property if no cookie was found
  ([5f43686](https://github.com/chakra-ui/chakra-ui/commit/5f436866c05b762172180387fcf8a034d7490b7e))
- **colormode:** conditional getColorScheme
  ([efa7cef](https://github.com/chakra-ui/chakra-ui/commit/efa7cefe41b14d539dbb4a20a96133ddbc1c1587))
- **colormode:** move detection to lazy useState init
  ([1652a75](https://github.com/chakra-ui/chakra-ui/commit/1652a7570a59914f3aaa6ba69af970095fd938e2))
- **colormode:** re-add color mode script
  ([f455ca7](https://github.com/chakra-ui/chakra-ui/commit/f455ca7437ed9310848f758ac74336e86309936b))
- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- added ColorModeOptions type to theme config
  ([648d41f](https://github.com/chakra-ui/chakra-ui/commit/648d41f56b9fd501d730c55f34058e61c6a9febb))
- case sensitivity issues in packages
  ([b423cd8](https://github.com/chakra-ui/chakra-ui/commit/b423cd88f0ede7e37b9a9eaec63cacfc1e9e5221))
- colormode
  ([e891999](https://github.com/chakra-ui/chakra-ui/commit/e891999148e972c9308cfc21a29c9ecc96872d46)),
  closes [#1620](https://github.com/chakra-ui/chakra-ui/issues/1620)
- ts issue with sx prop
  ([d3b1340](https://github.com/chakra-ui/chakra-ui/commit/d3b1340cb255937927b4d4c56ce218141570b951))

### Features

- added cookieStorageManager. still WIP
  ([9a9c305](https://github.com/chakra-ui/chakra-ui/commit/9a9c305d9c4ae7b5b44271e633c8a3bad81df066))
- added storageManager prop to ColorModeProvider. this is WIP
  ([2e9b538](https://github.com/chakra-ui/chakra-ui/commit/2e9b538f66fbd5ab70e30a55d5c7cfc43c7b6c6c))
- cleaned up some storageManager code. set color mode cookie to expire after a
  year
  ([d7ca15e](https://github.com/chakra-ui/chakra-ui/commit/d7ca15e6be9b393ed42cfc1a394d2872d7a8e5df))
- updated cookieStorageManager and next-js example to use cookieStorageManager
  ([e7df198](https://github.com/chakra-ui/chakra-ui/commit/e7df198065f041433c9f46f36b1990fc7e90a5de))

### Reverts

- color mode script till we figure out a better soln
  ([26f821f](https://github.com/chakra-ui/chakra-ui/commit/26f821f4ff2565f7edcf5f809b799b9b97c1effb))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.10 (2020-11-10)

### Bug Fixes

- closure issue with document.bodyand sync-body-class
  ([27e8ce7](https://github.com/chakra-ui/chakra-ui/commit/27e8ce7da8810c61a73399e82f5a02a316a4c762))
- defaultColorMode type in ColorModeScript
  ([f554e43](https://github.com/chakra-ui/chakra-ui/commit/f554e43d98d71c0e9e5a8994f57560248b702e5c))
- forward theme.config to ColorModeProvider
  ([097c783](https://github.com/chakra-ui/chakra-ui/commit/097c783a00736a119b253fb26316c7538de929c5))
- package json exports
  ([a10c0bc](https://github.com/chakra-ui/chakra-ui/commit/a10c0bcb809314a96d58c7febd9b2755e8997603))
- **color-mode:** cookie manager default argument
  ([57b5eb3](https://github.com/chakra-ui/chakra-ui/commit/57b5eb3154c1c8167fc103e112588febc4812de5))
- **color-mode:** getColorScheme fails in test env
  ([1766d3a](https://github.com/chakra-ui/chakra-ui/commit/1766d3a0d0edc3f295b0b021b8e382f40f83b18f))
- typo in test
  ([bf5d0cd](https://github.com/chakra-ui/chakra-ui/commit/bf5d0cd4dfddff4c620d04b9f367ea28ca60ec0e))
- **color-mode:** catch when localStorage is disabled
  ([a52cc19](https://github.com/chakra-ui/chakra-ui/commit/a52cc1914ab133120b2e4c1873a8740d12bac806))
- **color-mode:** sync value prop with state for controlled modes
  ([00881d4](https://github.com/chakra-ui/chakra-ui/commit/00881d4c592374e2015639acefdd7153cc5f872a))
- **colormode:** cookie storage manager to function
  ([7b72850](https://github.com/chakra-ui/chakra-ui/commit/7b72850bd553964e5d0286f171c12de9d5dc67aa))
- **colormode:** csr and hydration issues
  ([de50c9d](https://github.com/chakra-ui/chakra-ui/commit/de50c9d65f1a8a607db1486b418ddd9bfb65ccc1)),
  closes [#2106](https://github.com/chakra-ui/chakra-ui/issues/2106)
- **colormode:** use old mql api
  ([fd940a4](https://github.com/chakra-ui/chakra-ui/commit/fd940a455cc31e4606b51a8ba55ab3d53617f4f0)),
  closes [#2097](https://github.com/chakra-ui/chakra-ui/issues/2097)
- properly sync root attribute
  ([5b2929b](https://github.com/chakra-ui/chakra-ui/commit/5b2929b279abfec1bb44b69088c50e06863f5813))
- use root property if no cookie was found
  ([5f43686](https://github.com/chakra-ui/chakra-ui/commit/5f436866c05b762172180387fcf8a034d7490b7e))
- **colormode:** conditional getColorScheme
  ([efa7cef](https://github.com/chakra-ui/chakra-ui/commit/efa7cefe41b14d539dbb4a20a96133ddbc1c1587))
- **colormode:** move detection to lazy useState init
  ([1652a75](https://github.com/chakra-ui/chakra-ui/commit/1652a7570a59914f3aaa6ba69af970095fd938e2))
- **colormode:** re-add color mode script
  ([f455ca7](https://github.com/chakra-ui/chakra-ui/commit/f455ca7437ed9310848f758ac74336e86309936b))
- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- added ColorModeOptions type to theme config
  ([648d41f](https://github.com/chakra-ui/chakra-ui/commit/648d41f56b9fd501d730c55f34058e61c6a9febb))
- case sensitivity issues in packages
  ([b423cd8](https://github.com/chakra-ui/chakra-ui/commit/b423cd88f0ede7e37b9a9eaec63cacfc1e9e5221))
- colormode
  ([e891999](https://github.com/chakra-ui/chakra-ui/commit/e891999148e972c9308cfc21a29c9ecc96872d46)),
  closes [#1620](https://github.com/chakra-ui/chakra-ui/issues/1620)
- ts issue with sx prop
  ([d3b1340](https://github.com/chakra-ui/chakra-ui/commit/d3b1340cb255937927b4d4c56ce218141570b951))

### Features

- added cookieStorageManager. still WIP
  ([9a9c305](https://github.com/chakra-ui/chakra-ui/commit/9a9c305d9c4ae7b5b44271e633c8a3bad81df066))
- added storageManager prop to ColorModeProvider. this is WIP
  ([2e9b538](https://github.com/chakra-ui/chakra-ui/commit/2e9b538f66fbd5ab70e30a55d5c7cfc43c7b6c6c))
- cleaned up some storageManager code. set color mode cookie to expire after a
  year
  ([d7ca15e](https://github.com/chakra-ui/chakra-ui/commit/d7ca15e6be9b393ed42cfc1a394d2872d7a8e5df))
- updated cookieStorageManager and next-js example to use cookieStorageManager
  ([e7df198](https://github.com/chakra-ui/chakra-ui/commit/e7df198065f041433c9f46f36b1990fc7e90a5de))

### Reverts

- color mode script till we figure out a better soln
  ([26f821f](https://github.com/chakra-ui/chakra-ui/commit/26f821f4ff2565f7edcf5f809b799b9b97c1effb))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.9 (2020-10-29)

### Bug Fixes

- **toast:** allow custom render in update
  ([eb8bff9](https://github.com/chakra-ui/chakra-ui/commit/eb8bff911e6ec9de0165ab1e8f5ca10d5e022459)),
  closes [#2362](https://github.com/chakra-ui/chakra-ui/issues/2362)

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.7 (2020-10-25)

**Note:** Version bump only for package @hackr/chakra-ui-color-mode

# 1.0.0-rc.6 (2020-10-25)

**Note:** Version bump only for package @hackr/chakra-ui-color-mode

# 1.0.0-rc.5 (2020-09-27)

**Note:** Version bump only for package @hackr/chakra-ui-color-mode

# 1.0.0-rc.4 (2020-09-25)

**Note:** Version bump only for package @hackr/chakra-ui-color-mode

# 1.0.0-rc.3 (2020-08-30)

**Note:** Version bump only for package @hackr/chakra-ui-color-mode

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.2 (2020-08-09)

**Note:** Version bump only for package @hackr/chakra-ui-color-mode

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-rc.1](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-color-mode@1.0.0-rc.0...@hackr/chakra-ui-color-mode@1.0.0-rc.1) (2020-08-06)

### Features

- added cookieStorageManager. still WIP
  ([9a9c305](https://github.com/chakra-ui/chakra-ui/commit/9a9c305d9c4ae7b5b44271e633c8a3bad81df066))
- added storageManager prop to ColorModeProvider. this is WIP
  ([2e9b538](https://github.com/chakra-ui/chakra-ui/commit/2e9b538f66fbd5ab70e30a55d5c7cfc43c7b6c6c))
- cleaned up some storageManager code. set color mode cookie to expire after a
  year
  ([d7ca15e](https://github.com/chakra-ui/chakra-ui/commit/d7ca15e6be9b393ed42cfc1a394d2872d7a8e5df))
- updated cookieStorageManager and next-js example to use cookieStorageManager
  ([e7df198](https://github.com/chakra-ui/chakra-ui/commit/e7df198065f041433c9f46f36b1990fc7e90a5de))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-rc.0](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-color-mode@1.0.0-next.7...@hackr/chakra-ui-color-mode@1.0.0-rc.0) (2020-07-26)

**Note:** Version bump only for package @hackr/chakra-ui-color-mode

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.7](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-color-mode@1.0.0-next.6...@hackr/chakra-ui-color-mode@1.0.0-next.7) (2020-07-26)

### Bug Fixes

- added ColorModeOptions type to theme config
  ([648d41f](https://github.com/chakra-ui/chakra-ui/commit/648d41f56b9fd501d730c55f34058e61c6a9febb))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.6](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-color-mode@1.0.0-next.5...@hackr/chakra-ui-color-mode@1.0.0-next.6) (2020-07-15)

**Note:** Version bump only for package @hackr/chakra-ui-color-mode

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.5](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-color-mode@1.0.0-next.4...@hackr/chakra-ui-color-mode@1.0.0-next.5) (2020-07-15)

**Note:** Version bump only for package @hackr/chakra-ui-color-mode

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-next.4 (2020-07-01)

### Bug Fixes

- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- case sensitivity issues in packages
  ([b423cd8](https://github.com/chakra-ui/chakra-ui/commit/b423cd88f0ede7e37b9a9eaec63cacfc1e9e5221))
- ts issue with sx prop
  ([d3b1340](https://github.com/chakra-ui/chakra-ui/commit/d3b1340cb255937927b4d4c56ce218141570b951))
- **color-mode:** sync value prop with state for controlled modes
  ([00881d4](https://github.com/chakra-ui/chakra-ui/commit/00881d4c592374e2015639acefdd7153cc5f872a))

### Reverts

- color mode script till we figure out a better soln
  ([26f821f](https://github.com/chakra-ui/chakra-ui/commit/26f821f4ff2565f7edcf5f809b799b9b97c1effb))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-next.3 (2020-06-28)

### Bug Fixes

- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- case sensitivity issues in packages
  ([b423cd8](https://github.com/chakra-ui/chakra-ui/commit/b423cd88f0ede7e37b9a9eaec63cacfc1e9e5221))
- ts issue with sx prop
  ([d3b1340](https://github.com/chakra-ui/chakra-ui/commit/d3b1340cb255937927b4d4c56ce218141570b951))
- **color-mode:** sync value prop with state for controlled modes
  ([00881d4](https://github.com/chakra-ui/chakra-ui/commit/00881d4c592374e2015639acefdd7153cc5f872a))

### Reverts

- color mode script till we figure out a better soln
  ([26f821f](https://github.com/chakra-ui/chakra-ui/commit/26f821f4ff2565f7edcf5f809b799b9b97c1effb))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-next.2 (2020-06-21)

### Bug Fixes

- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- case sensitivity issues in packages
  ([b423cd8](https://github.com/chakra-ui/chakra-ui/commit/b423cd88f0ede7e37b9a9eaec63cacfc1e9e5221))
- **color-mode:** sync value prop with state for controlled modes
  ([00881d4](https://github.com/chakra-ui/chakra-ui/commit/00881d4c592374e2015639acefdd7153cc5f872a))
