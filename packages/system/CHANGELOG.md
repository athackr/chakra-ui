# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.11 (2020-11-10)

### Bug Fixes

- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- bug i created :)
  ([352eece](https://github.com/chakra-ui/chakra-ui/commit/352eece27b7df1a061e9d365d9b54e6beeeffd90))
- connect drawer its correct theming
  ([9ed9d3a](https://github.com/chakra-ui/chakra-ui/commit/9ed9d3aea959f38198b1ba0d48c24686630aee90))
- give priority to props overrides
  ([f2fe955](https://github.com/chakra-ui/chakra-ui/commit/f2fe9553373da4734712a90fec284eea7a951dfb))
- issue where htmlWidth and htmlHeight doesn't work in Image
  ([c9bf054](https://github.com/chakra-ui/chakra-ui/commit/c9bf054caa255aecdbfafc832f750301bce99cb0))
- make scope of global styles more explicit
  ([e0732de](https://github.com/chakra-ui/chakra-ui/commit/e0732decc24c849e723988299a6fb2cbf87b90be))
- missing dep memoize-one
  ([196cab5](https://github.com/chakra-ui/chakra-ui/commit/196cab52fb29569f92a23ed29c6474c923d2e12d))
- null exception for style config
  ([c28ba5a](https://github.com/chakra-ui/chakra-ui/commit/c28ba5ac075cc5c8f30806e269ed36632c01d6ea))
- package json exports
  ([a10c0bc](https://github.com/chakra-ui/chakra-ui/commit/a10c0bcb809314a96d58c7febd9b2755e8997603))
- resolver functions for css
  ([ffb4cfd](https://github.com/chakra-ui/chakra-ui/commit/ffb4cfd52e1aaabaebab7b548bf570b01daaf5a6))
- style issue with progress bar
  ([b0e430a](https://github.com/chakra-ui/chakra-ui/commit/b0e430a5adffd88a56cce10555bad89d61ad686b))
- ts issue with sx prop
  ([d3b1340](https://github.com/chakra-ui/chakra-ui/commit/d3b1340cb255937927b4d4c56ce218141570b951))
- types for use-toast
  ([22766c7](https://github.com/chakra-ui/chakra-ui/commit/22766c7c5c4fc76d8b76c612b042e1ec2c244531))
- types issue with color prop
  ([6a959ad](https://github.com/chakra-ui/chakra-ui/commit/6a959ad9f637584ad55e019c1037820aa1f5ce31))
- types issue with transition props
  ([92eb964](https://github.com/chakra-ui/chakra-ui/commit/92eb9648694510daeb0d4cb61d61ba2ea4ba7a8e))
- typings for responsive width and height for image component
  ([4c18e32](https://github.com/chakra-ui/chakra-ui/commit/4c18e327b2a4fa76880b19a6199f3ba90612f2c0))
- uses `keyof JSX.IntrinsicElements` for 'As' type used in PropsOf
  ([0b514fd](https://github.com/chakra-ui/chakra-ui/commit/0b514fd54b12abcc23f86cfb41bef883434e6f5e))
- **skeleton:** implemented noOfLines as responsive value
  ([75576e5](https://github.com/chakra-ui/chakra-ui/commit/75576e55a7873fceeecd4a5476d328992304cdb2))
- **system:** fix noOfLines type
  ([b2f8117](https://github.com/chakra-ui/chakra-ui/commit/b2f8117c4545cb6b61611d61d5b4fadac9e2f49f))
- **system, layout:** fix style issues based on recent system PR
  ([907b65d](https://github.com/chakra-ui/chakra-ui/commit/907b65d51e1c2f78101bcf1ded016c15a4774f18))
- **types:** issue where as doesn't exist in component types
  ([dd7b63f](https://github.com/chakra-ui/chakra-ui/commit/dd7b63fc299aa0ce135f3b3a2e88af1b3758e20b))
- update border-radius style prop and fix w style prop
  ([09df03f](https://github.com/chakra-ui/chakra-ui/commit/09df03fba7321ae50d4d3107aaf89b1956ed3463))
- useStyleConfig omit children when merging
  ([dd13612](https://github.com/chakra-ui/chakra-ui/commit/dd1361284d46ef922396af6c9b283ee002419edb)),
  closes [#2012](https://github.com/chakra-ui/chakra-ui/issues/2012)
- **variables:** drop unused imports
  ([552b2e9](https://github.com/chakra-ui/chakra-ui/commit/552b2e9b7510963db509a5724af5361ef07c8ecb))
- update core css support
  ([499a6a1](https://github.com/chakra-ui/chakra-ui/commit/499a6a1ddf3111b2f528b1661f17896bf6948abd))

### Features

- add support for inline-variant
  ([67bf6ad](https://github.com/chakra-ui/chakra-ui/commit/67bf6adf2bf8f3270b75f83382c2acbb8db07155))
- add support for line-clamp
  ([1173ca6](https://github.com/chakra-ui/chakra-ui/commit/1173ca6974e8b9fcf27aa301bd1accece07ca5fc))
- add support for single and multipart config
  ([a13d0f8](https://github.com/chakra-ui/chakra-ui/commit/a13d0f8a3d97405bde6acba1c4fc126677154a8b))
- add use-props hook for better dx
  ([0854d64](https://github.com/chakra-ui/chakra-ui/commit/0854d64f32d7344184ace1163cc68fd982964261))
- added cookieStorageManager. still WIP
  ([9a9c305](https://github.com/chakra-ui/chakra-ui/commit/9a9c305d9c4ae7b5b44271e633c8a3bad81df066))
- allow props from as prop pass through
  ([8d25c75](https://github.com/chakra-ui/chakra-ui/commit/8d25c754e6dad652c34a33e49144d08e25328c6c))
- cleaned up some storageManager code. set color mode cookie to expire after a
  year
  ([d7ca15e](https://github.com/chakra-ui/chakra-ui/commit/d7ca15e6be9b393ed42cfc1a394d2872d7a8e5df))
- merge base breakpoint
  ([61c1148](https://github.com/chakra-ui/chakra-ui/commit/61c114855fc5a14f0c14ff4b2ef291c413702302))
- **system:** extend props
  ([645c683](https://github.com/chakra-ui/chakra-ui/commit/645c683ef71ad5ef5b3aa60e7e2880853df1683f))

### Performance Improvements

- improve system pkg
  ([eebec47](https://github.com/chakra-ui/chakra-ui/commit/eebec479c6c40324833cc1beed0b540c4687d805))
- some more improvements
  ([daf94a5](https://github.com/chakra-ui/chakra-ui/commit/daf94a50f6abc9773c9552ec08b5ebf5f1cb05b9))
- some more improvements
  ([3382bab](https://github.com/chakra-ui/chakra-ui/commit/3382bab224f29f082d2a9ba2b4b2721257fbdfac))
- widen As prop typing
  ([5dd10f8](https://github.com/chakra-ui/chakra-ui/commit/5dd10f8d7abaa2d6a751a554b4cff9abad470fe4))

### Reverts

- breakpoint handling
  ([f3ee5f1](https://github.com/chakra-ui/chakra-ui/commit/f3ee5f15c48da242c4d4d43de0dc67ff7664c81e))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.10 (2020-11-10)

### Bug Fixes

- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- bug i created :)
  ([352eece](https://github.com/chakra-ui/chakra-ui/commit/352eece27b7df1a061e9d365d9b54e6beeeffd90))
- connect drawer its correct theming
  ([9ed9d3a](https://github.com/chakra-ui/chakra-ui/commit/9ed9d3aea959f38198b1ba0d48c24686630aee90))
- give priority to props overrides
  ([f2fe955](https://github.com/chakra-ui/chakra-ui/commit/f2fe9553373da4734712a90fec284eea7a951dfb))
- issue where htmlWidth and htmlHeight doesn't work in Image
  ([c9bf054](https://github.com/chakra-ui/chakra-ui/commit/c9bf054caa255aecdbfafc832f750301bce99cb0))
- make scope of global styles more explicit
  ([e0732de](https://github.com/chakra-ui/chakra-ui/commit/e0732decc24c849e723988299a6fb2cbf87b90be))
- missing dep memoize-one
  ([196cab5](https://github.com/chakra-ui/chakra-ui/commit/196cab52fb29569f92a23ed29c6474c923d2e12d))
- null exception for style config
  ([c28ba5a](https://github.com/chakra-ui/chakra-ui/commit/c28ba5ac075cc5c8f30806e269ed36632c01d6ea))
- package json exports
  ([a10c0bc](https://github.com/chakra-ui/chakra-ui/commit/a10c0bcb809314a96d58c7febd9b2755e8997603))
- resolver functions for css
  ([ffb4cfd](https://github.com/chakra-ui/chakra-ui/commit/ffb4cfd52e1aaabaebab7b548bf570b01daaf5a6))
- style issue with progress bar
  ([b0e430a](https://github.com/chakra-ui/chakra-ui/commit/b0e430a5adffd88a56cce10555bad89d61ad686b))
- ts issue with sx prop
  ([d3b1340](https://github.com/chakra-ui/chakra-ui/commit/d3b1340cb255937927b4d4c56ce218141570b951))
- types for use-toast
  ([22766c7](https://github.com/chakra-ui/chakra-ui/commit/22766c7c5c4fc76d8b76c612b042e1ec2c244531))
- types issue with color prop
  ([6a959ad](https://github.com/chakra-ui/chakra-ui/commit/6a959ad9f637584ad55e019c1037820aa1f5ce31))
- types issue with transition props
  ([92eb964](https://github.com/chakra-ui/chakra-ui/commit/92eb9648694510daeb0d4cb61d61ba2ea4ba7a8e))
- typings for responsive width and height for image component
  ([4c18e32](https://github.com/chakra-ui/chakra-ui/commit/4c18e327b2a4fa76880b19a6199f3ba90612f2c0))
- uses `keyof JSX.IntrinsicElements` for 'As' type used in PropsOf
  ([0b514fd](https://github.com/chakra-ui/chakra-ui/commit/0b514fd54b12abcc23f86cfb41bef883434e6f5e))
- **skeleton:** implemented noOfLines as responsive value
  ([75576e5](https://github.com/chakra-ui/chakra-ui/commit/75576e55a7873fceeecd4a5476d328992304cdb2))
- **system:** fix noOfLines type
  ([b2f8117](https://github.com/chakra-ui/chakra-ui/commit/b2f8117c4545cb6b61611d61d5b4fadac9e2f49f))
- **system, layout:** fix style issues based on recent system PR
  ([907b65d](https://github.com/chakra-ui/chakra-ui/commit/907b65d51e1c2f78101bcf1ded016c15a4774f18))
- **types:** issue where as doesn't exist in component types
  ([dd7b63f](https://github.com/chakra-ui/chakra-ui/commit/dd7b63fc299aa0ce135f3b3a2e88af1b3758e20b))
- update border-radius style prop and fix w style prop
  ([09df03f](https://github.com/chakra-ui/chakra-ui/commit/09df03fba7321ae50d4d3107aaf89b1956ed3463))
- useStyleConfig omit children when merging
  ([dd13612](https://github.com/chakra-ui/chakra-ui/commit/dd1361284d46ef922396af6c9b283ee002419edb)),
  closes [#2012](https://github.com/chakra-ui/chakra-ui/issues/2012)
- **variables:** drop unused imports
  ([552b2e9](https://github.com/chakra-ui/chakra-ui/commit/552b2e9b7510963db509a5724af5361ef07c8ecb))
- update core css support
  ([499a6a1](https://github.com/chakra-ui/chakra-ui/commit/499a6a1ddf3111b2f528b1661f17896bf6948abd))

### Features

- add support for inline-variant
  ([67bf6ad](https://github.com/chakra-ui/chakra-ui/commit/67bf6adf2bf8f3270b75f83382c2acbb8db07155))
- add support for line-clamp
  ([1173ca6](https://github.com/chakra-ui/chakra-ui/commit/1173ca6974e8b9fcf27aa301bd1accece07ca5fc))
- add support for single and multipart config
  ([a13d0f8](https://github.com/chakra-ui/chakra-ui/commit/a13d0f8a3d97405bde6acba1c4fc126677154a8b))
- add use-props hook for better dx
  ([0854d64](https://github.com/chakra-ui/chakra-ui/commit/0854d64f32d7344184ace1163cc68fd982964261))
- added cookieStorageManager. still WIP
  ([9a9c305](https://github.com/chakra-ui/chakra-ui/commit/9a9c305d9c4ae7b5b44271e633c8a3bad81df066))
- allow props from as prop pass through
  ([8d25c75](https://github.com/chakra-ui/chakra-ui/commit/8d25c754e6dad652c34a33e49144d08e25328c6c))
- cleaned up some storageManager code. set color mode cookie to expire after a
  year
  ([d7ca15e](https://github.com/chakra-ui/chakra-ui/commit/d7ca15e6be9b393ed42cfc1a394d2872d7a8e5df))
- merge base breakpoint
  ([61c1148](https://github.com/chakra-ui/chakra-ui/commit/61c114855fc5a14f0c14ff4b2ef291c413702302))
- **system:** extend props
  ([645c683](https://github.com/chakra-ui/chakra-ui/commit/645c683ef71ad5ef5b3aa60e7e2880853df1683f))

### Performance Improvements

- improve system pkg
  ([eebec47](https://github.com/chakra-ui/chakra-ui/commit/eebec479c6c40324833cc1beed0b540c4687d805))
- some more improvements
  ([daf94a5](https://github.com/chakra-ui/chakra-ui/commit/daf94a50f6abc9773c9552ec08b5ebf5f1cb05b9))
- some more improvements
  ([3382bab](https://github.com/chakra-ui/chakra-ui/commit/3382bab224f29f082d2a9ba2b4b2721257fbdfac))
- widen As prop typing
  ([5dd10f8](https://github.com/chakra-ui/chakra-ui/commit/5dd10f8d7abaa2d6a751a554b4cff9abad470fe4))

### Reverts

- breakpoint handling
  ([f3ee5f1](https://github.com/chakra-ui/chakra-ui/commit/f3ee5f15c48da242c4d4d43de0dc67ff7664c81e))

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

**Note:** Version bump only for package @hackr/chakra-ui-system

# 1.0.0-rc.6 (2020-10-25)

**Note:** Version bump only for package @hackr/chakra-ui-system

# 1.0.0-rc.5 (2020-09-27)

**Note:** Version bump only for package @hackr/chakra-ui-system

# 1.0.0-rc.4 (2020-09-25)

**Note:** Version bump only for package @hackr/chakra-ui-system

# 1.0.0-rc.3 (2020-08-30)

**Note:** Version bump only for package @hackr/chakra-ui-system

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.2 (2020-08-09)

**Note:** Version bump only for package @hackr/chakra-ui-system

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-rc.1](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-system@1.0.0-rc.0...@hackr/chakra-ui-system@1.0.0-rc.1) (2020-08-06)

### Bug Fixes

- **variables:** drop unused imports
  ([552b2e9](https://github.com/chakra-ui/chakra-ui/commit/552b2e9b7510963db509a5724af5361ef07c8ecb))
- connect drawer its correct theming
  ([9ed9d3a](https://github.com/chakra-ui/chakra-ui/commit/9ed9d3aea959f38198b1ba0d48c24686630aee90))

### Features

- **system:** extend props
  ([645c683](https://github.com/chakra-ui/chakra-ui/commit/645c683ef71ad5ef5b3aa60e7e2880853df1683f))
- added cookieStorageManager. still WIP
  ([9a9c305](https://github.com/chakra-ui/chakra-ui/commit/9a9c305d9c4ae7b5b44271e633c8a3bad81df066))
- cleaned up some storageManager code. set color mode cookie to expire after a
  year
  ([d7ca15e](https://github.com/chakra-ui/chakra-ui/commit/d7ca15e6be9b393ed42cfc1a394d2872d7a8e5df))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-rc.0](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-system@1.0.0-next.7...@hackr/chakra-ui-system@1.0.0-rc.0) (2020-07-26)

**Note:** Version bump only for package @hackr/chakra-ui-system

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.7](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-system@1.0.0-next.6...@hackr/chakra-ui-system@1.0.0-next.7) (2020-07-26)

### Bug Fixes

- give priority to props overrides
  ([f2fe955](https://github.com/chakra-ui/chakra-ui/commit/f2fe9553373da4734712a90fec284eea7a951dfb))
- null exception for style config
  ([c28ba5a](https://github.com/chakra-ui/chakra-ui/commit/c28ba5ac075cc5c8f30806e269ed36632c01d6ea))

### Features

- add support for single and multipart config
  ([a13d0f8](https://github.com/chakra-ui/chakra-ui/commit/a13d0f8a3d97405bde6acba1c4fc126677154a8b))

### Reverts

- breakpoint handling
  ([f3ee5f1](https://github.com/chakra-ui/chakra-ui/commit/f3ee5f15c48da242c4d4d43de0dc67ff7664c81e))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.6](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-system@1.0.0-next.5...@hackr/chakra-ui-system@1.0.0-next.6) (2020-07-15)

**Note:** Version bump only for package @hackr/chakra-ui-system

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.5](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-system@1.0.0-next.4...@hackr/chakra-ui-system@1.0.0-next.5) (2020-07-15)

### Performance Improvements

- improve system pkg
  ([eebec47](https://github.com/chakra-ui/chakra-ui/commit/eebec479c6c40324833cc1beed0b540c4687d805))
- some more improvements
  ([daf94a5](https://github.com/chakra-ui/chakra-ui/commit/daf94a50f6abc9773c9552ec08b5ebf5f1cb05b9))
- some more improvements
  ([3382bab](https://github.com/chakra-ui/chakra-ui/commit/3382bab224f29f082d2a9ba2b4b2721257fbdfac))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-next.4 (2020-07-01)

### Bug Fixes

- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- bug i created :)
  ([352eece](https://github.com/chakra-ui/chakra-ui/commit/352eece27b7df1a061e9d365d9b54e6beeeffd90))
- resolver functions for css
  ([ffb4cfd](https://github.com/chakra-ui/chakra-ui/commit/ffb4cfd52e1aaabaebab7b548bf570b01daaf5a6))
- style issue with progress bar
  ([b0e430a](https://github.com/chakra-ui/chakra-ui/commit/b0e430a5adffd88a56cce10555bad89d61ad686b))
- ts issue with sx prop
  ([d3b1340](https://github.com/chakra-ui/chakra-ui/commit/d3b1340cb255937927b4d4c56ce218141570b951))
- update border-radius style prop and fix w style prop
  ([09df03f](https://github.com/chakra-ui/chakra-ui/commit/09df03fba7321ae50d4d3107aaf89b1956ed3463))
- update core css support
  ([499a6a1](https://github.com/chakra-ui/chakra-ui/commit/499a6a1ddf3111b2f528b1661f17896bf6948abd))

### Features

- add support for inline-variant
  ([67bf6ad](https://github.com/chakra-ui/chakra-ui/commit/67bf6adf2bf8f3270b75f83382c2acbb8db07155))
- add support for line-clamp
  ([1173ca6](https://github.com/chakra-ui/chakra-ui/commit/1173ca6974e8b9fcf27aa301bd1accece07ca5fc))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-next.3 (2020-06-28)

### Bug Fixes

- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- bug i created :)
  ([352eece](https://github.com/chakra-ui/chakra-ui/commit/352eece27b7df1a061e9d365d9b54e6beeeffd90))
- resolver functions for css
  ([ffb4cfd](https://github.com/chakra-ui/chakra-ui/commit/ffb4cfd52e1aaabaebab7b548bf570b01daaf5a6))
- style issue with progress bar
  ([b0e430a](https://github.com/chakra-ui/chakra-ui/commit/b0e430a5adffd88a56cce10555bad89d61ad686b))
- ts issue with sx prop
  ([d3b1340](https://github.com/chakra-ui/chakra-ui/commit/d3b1340cb255937927b4d4c56ce218141570b951))
- update border-radius style prop and fix w style prop
  ([09df03f](https://github.com/chakra-ui/chakra-ui/commit/09df03fba7321ae50d4d3107aaf89b1956ed3463))
- update core css support
  ([499a6a1](https://github.com/chakra-ui/chakra-ui/commit/499a6a1ddf3111b2f528b1661f17896bf6948abd))

### Features

- add support for inline-variant
  ([67bf6ad](https://github.com/chakra-ui/chakra-ui/commit/67bf6adf2bf8f3270b75f83382c2acbb8db07155))
- add support for line-clamp
  ([1173ca6](https://github.com/chakra-ui/chakra-ui/commit/1173ca6974e8b9fcf27aa301bd1accece07ca5fc))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-next.2 (2020-06-21)

### Bug Fixes

- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- bug i created :)
  ([352eece](https://github.com/chakra-ui/chakra-ui/commit/352eece27b7df1a061e9d365d9b54e6beeeffd90))
- resolver functions for css
  ([ffb4cfd](https://github.com/chakra-ui/chakra-ui/commit/ffb4cfd52e1aaabaebab7b548bf570b01daaf5a6))
- style issue with progress bar
  ([b0e430a](https://github.com/chakra-ui/chakra-ui/commit/b0e430a5adffd88a56cce10555bad89d61ad686b))
- update border-radius style prop and fix w style prop
  ([09df03f](https://github.com/chakra-ui/chakra-ui/commit/09df03fba7321ae50d4d3107aaf89b1956ed3463))
- update core css support
  ([499a6a1](https://github.com/chakra-ui/chakra-ui/commit/499a6a1ddf3111b2f528b1661f17896bf6948abd))

### Features

- add support for inline-variant
  ([67bf6ad](https://github.com/chakra-ui/chakra-ui/commit/67bf6adf2bf8f3270b75f83382c2acbb8db07155))
- add support for line-clamp
  ([1173ca6](https://github.com/chakra-ui/chakra-ui/commit/1173ca6974e8b9fcf27aa301bd1accece07ca5fc))
