# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.11 (2020-11-10)

### Bug Fixes

- **popover-content:** add missing className merge
  ([038eace](https://github.com/chakra-ui/chakra-ui/commit/038eacea9b2c31ca472dac280ca4f8568526dafe))
- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- case sensitivity issues in packages
  ([b423cd8](https://github.com/chakra-ui/chakra-ui/commit/b423cd88f0ede7e37b9a9eaec63cacfc1e9e5221))
- case sensitivity issues in packages
  ([c70b653](https://github.com/chakra-ui/chakra-ui/commit/c70b653ab892e9290de6d6c55e7d1bd39f974456))
- focus and positioning issue with popper related component
  ([0dbd3d1](https://github.com/chakra-ui/chakra-ui/commit/0dbd3d1c90078197d1dd8fde8fc5960d65e2c591))
- focus management for popover
  ([c3259cc](https://github.com/chakra-ui/chakra-ui/commit/c3259ccac7ebf9102888506d510f3f52cf343906))
- focus on close for popover and update hooks
  ([bfc91de](https://github.com/chakra-ui/chakra-ui/commit/bfc91def1320f94dc93ba3452754f5fea74dfb3e))
- package json exports
  ([a10c0bc](https://github.com/chakra-ui/chakra-ui/commit/a10c0bcb809314a96d58c7febd9b2755e8997603))
- popover blur and event target issue
  [#1124](https://github.com/chakra-ui/chakra-ui/issues/1124)
  ([56f10fb](https://github.com/chakra-ui/chakra-ui/commit/56f10fb75646a18d6f8a18c6f0e4ca830957812e))
- popover prevent some focus return scenarios
  ([95457f8](https://github.com/chakra-ui/chakra-ui/commit/95457f8216dde577a2b72fc4d86ef2f058d46083))
- popover triggers on-close even when closed
  ([2ea1b83](https://github.com/chakra-ui/chakra-ui/commit/2ea1b83a0600cc8f7474995316514e6dddc2fd73))
- stack key issue and yarn2 deps issue
  ([d6cb6b8](https://github.com/chakra-ui/chakra-ui/commit/d6cb6b8fd964729efdf41b1e29c888a3c101316c))
- tests
  ([a0cb1bf](https://github.com/chakra-ui/chakra-ui/commit/a0cb1bfb2b7cb7d3e2e1359a9d622e86884c601c))
- update menu and popover event and focus management
  ([f4c2e0d](https://github.com/chakra-ui/chakra-ui/commit/f4c2e0d5f41d946d4c5f7acda364be9569daebd2))
- **test:** update snapshots, misc
  ([d2ed094](https://github.com/chakra-ui/chakra-ui/commit/d2ed094437ba64191e160f9217a43db3c129aa1e))
- **typescript:** synthetic default export compat
  ([e661a71](https://github.com/chakra-ui/chakra-ui/commit/e661a71884b6ee0ad5ac85b38e042f5ee7e8f705)),
  closes [#1735](https://github.com/chakra-ui/chakra-ui/issues/1735)
- **variables:** drop unused imports
  ([552b2e9](https://github.com/chakra-ui/chakra-ui/commit/552b2e9b7510963db509a5724af5361ef07c8ecb))
- ts issue with sx prop
  ([d3b1340](https://github.com/chakra-ui/chakra-ui/commit/d3b1340cb255937927b4d4c56ce218141570b951))

### Features

- add force-update to popover internal state
  ([c60c263](https://github.com/chakra-ui/chakra-ui/commit/c60c2630ef89d444a535409d41ad6b8c424ad837))
- add menu transition
  ([60ef40e](https://github.com/chakra-ui/chakra-ui/commit/60ef40ea574674e622011a84990dd1dcb81dac4a))
- add popover animation
  ([93aeb24](https://github.com/chakra-ui/chakra-ui/commit/93aeb24281a4881fc4dfecf42bf5d8f3e1bcd5f5))
- add popover transition
  ([73d8c4f](https://github.com/chakra-ui/chakra-ui/commit/73d8c4fc9c676c95232cd259f59cce7d38eff94b))
- add popover transition and merge props util
  ([112ff7b](https://github.com/chakra-ui/chakra-ui/commit/112ff7b53d7618f9a1442efa2fb427491a5fc51c))
- add tooltip motion
  ([ab66983](https://github.com/chakra-ui/chakra-ui/commit/ab669837d6ffd11ffa81ed12afed769c5e565721))
- add use-props hook for better dx
  ([0854d64](https://github.com/chakra-ui/chakra-ui/commit/0854d64f32d7344184ace1163cc68fd982964261))
- **focus-lock:** relax focusable refs to handle non-HTMLElement refs
  ([e409a79](https://github.com/chakra-ui/chakra-ui/commit/e409a7906976d1ba46faf424c346f78d0d608d8f))
- **popover:** add prop to defer rendering till popover is open
  ([aac438c](https://github.com/chakra-ui/chakra-ui/commit/aac438cf21e5cd0a160048d8ae0c1a26b99fd1f4))
- add transition for modal
  ([dda931b](https://github.com/chakra-ui/chakra-ui/commit/dda931bea7444c3f83392eebf1c34dd571a0dbbc))

### Performance Improvements

- fix menu re-rendering and add perf monitoring hook
  ([d60e019](https://github.com/chakra-ui/chakra-ui/commit/d60e0197b9a59539170967984d464d00de095d5f))

### Reverts

- **popover:** change return-focus prop back to return-focus-on-close
  ([102672f](https://github.com/chakra-ui/chakra-ui/commit/102672fffcaa233848f63bba379dd935e0ffa4f7))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.10 (2020-11-10)

### Bug Fixes

- **popover-content:** add missing className merge
  ([038eace](https://github.com/chakra-ui/chakra-ui/commit/038eacea9b2c31ca472dac280ca4f8568526dafe))
- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- case sensitivity issues in packages
  ([b423cd8](https://github.com/chakra-ui/chakra-ui/commit/b423cd88f0ede7e37b9a9eaec63cacfc1e9e5221))
- case sensitivity issues in packages
  ([c70b653](https://github.com/chakra-ui/chakra-ui/commit/c70b653ab892e9290de6d6c55e7d1bd39f974456))
- focus and positioning issue with popper related component
  ([0dbd3d1](https://github.com/chakra-ui/chakra-ui/commit/0dbd3d1c90078197d1dd8fde8fc5960d65e2c591))
- focus management for popover
  ([c3259cc](https://github.com/chakra-ui/chakra-ui/commit/c3259ccac7ebf9102888506d510f3f52cf343906))
- focus on close for popover and update hooks
  ([bfc91de](https://github.com/chakra-ui/chakra-ui/commit/bfc91def1320f94dc93ba3452754f5fea74dfb3e))
- package json exports
  ([a10c0bc](https://github.com/chakra-ui/chakra-ui/commit/a10c0bcb809314a96d58c7febd9b2755e8997603))
- popover blur and event target issue
  [#1124](https://github.com/chakra-ui/chakra-ui/issues/1124)
  ([56f10fb](https://github.com/chakra-ui/chakra-ui/commit/56f10fb75646a18d6f8a18c6f0e4ca830957812e))
- popover prevent some focus return scenarios
  ([95457f8](https://github.com/chakra-ui/chakra-ui/commit/95457f8216dde577a2b72fc4d86ef2f058d46083))
- popover triggers on-close even when closed
  ([2ea1b83](https://github.com/chakra-ui/chakra-ui/commit/2ea1b83a0600cc8f7474995316514e6dddc2fd73))
- stack key issue and yarn2 deps issue
  ([d6cb6b8](https://github.com/chakra-ui/chakra-ui/commit/d6cb6b8fd964729efdf41b1e29c888a3c101316c))
- tests
  ([a0cb1bf](https://github.com/chakra-ui/chakra-ui/commit/a0cb1bfb2b7cb7d3e2e1359a9d622e86884c601c))
- update menu and popover event and focus management
  ([f4c2e0d](https://github.com/chakra-ui/chakra-ui/commit/f4c2e0d5f41d946d4c5f7acda364be9569daebd2))
- **test:** update snapshots, misc
  ([d2ed094](https://github.com/chakra-ui/chakra-ui/commit/d2ed094437ba64191e160f9217a43db3c129aa1e))
- **typescript:** synthetic default export compat
  ([e661a71](https://github.com/chakra-ui/chakra-ui/commit/e661a71884b6ee0ad5ac85b38e042f5ee7e8f705)),
  closes [#1735](https://github.com/chakra-ui/chakra-ui/issues/1735)
- **variables:** drop unused imports
  ([552b2e9](https://github.com/chakra-ui/chakra-ui/commit/552b2e9b7510963db509a5724af5361ef07c8ecb))
- ts issue with sx prop
  ([d3b1340](https://github.com/chakra-ui/chakra-ui/commit/d3b1340cb255937927b4d4c56ce218141570b951))

### Features

- add force-update to popover internal state
  ([c60c263](https://github.com/chakra-ui/chakra-ui/commit/c60c2630ef89d444a535409d41ad6b8c424ad837))
- add menu transition
  ([60ef40e](https://github.com/chakra-ui/chakra-ui/commit/60ef40ea574674e622011a84990dd1dcb81dac4a))
- add popover animation
  ([93aeb24](https://github.com/chakra-ui/chakra-ui/commit/93aeb24281a4881fc4dfecf42bf5d8f3e1bcd5f5))
- add popover transition
  ([73d8c4f](https://github.com/chakra-ui/chakra-ui/commit/73d8c4fc9c676c95232cd259f59cce7d38eff94b))
- add popover transition and merge props util
  ([112ff7b](https://github.com/chakra-ui/chakra-ui/commit/112ff7b53d7618f9a1442efa2fb427491a5fc51c))
- add tooltip motion
  ([ab66983](https://github.com/chakra-ui/chakra-ui/commit/ab669837d6ffd11ffa81ed12afed769c5e565721))
- add use-props hook for better dx
  ([0854d64](https://github.com/chakra-ui/chakra-ui/commit/0854d64f32d7344184ace1163cc68fd982964261))
- **focus-lock:** relax focusable refs to handle non-HTMLElement refs
  ([e409a79](https://github.com/chakra-ui/chakra-ui/commit/e409a7906976d1ba46faf424c346f78d0d608d8f))
- **popover:** add prop to defer rendering till popover is open
  ([aac438c](https://github.com/chakra-ui/chakra-ui/commit/aac438cf21e5cd0a160048d8ae0c1a26b99fd1f4))
- add transition for modal
  ([dda931b](https://github.com/chakra-ui/chakra-ui/commit/dda931bea7444c3f83392eebf1c34dd571a0dbbc))

### Performance Improvements

- fix menu re-rendering and add perf monitoring hook
  ([d60e019](https://github.com/chakra-ui/chakra-ui/commit/d60e0197b9a59539170967984d464d00de095d5f))

### Reverts

- **popover:** change return-focus prop back to return-focus-on-close
  ([102672f](https://github.com/chakra-ui/chakra-ui/commit/102672fffcaa233848f63bba379dd935e0ffa4f7))

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

**Note:** Version bump only for package @hackr/chakra-ui-popover

# 1.0.0-rc.6 (2020-10-25)

**Note:** Version bump only for package @hackr/chakra-ui-popover

# 1.0.0-rc.5 (2020-09-27)

**Note:** Version bump only for package @hackr/chakra-ui-popover

# 1.0.0-rc.4 (2020-09-25)

**Note:** Version bump only for package @hackr/chakra-ui-popover

# 1.0.0-rc.3 (2020-08-30)

**Note:** Version bump only for package @hackr/chakra-ui-popover

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.2 (2020-08-09)

**Note:** Version bump only for package @hackr/chakra-ui-popover

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-rc.1](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-popover@1.0.0-rc.0...@hackr/chakra-ui-popover@1.0.0-rc.1) (2020-08-06)

### Bug Fixes

- **variables:** drop unused imports
  ([552b2e9](https://github.com/chakra-ui/chakra-ui/commit/552b2e9b7510963db509a5724af5361ef07c8ecb))
- stack key issue and yarn2 deps issue
  ([d6cb6b8](https://github.com/chakra-ui/chakra-ui/commit/d6cb6b8fd964729efdf41b1e29c888a3c101316c))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-rc.0](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-popover@1.0.0-next.7...@hackr/chakra-ui-popover@1.0.0-rc.0) (2020-07-26)

**Note:** Version bump only for package @hackr/chakra-ui-popover

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.7](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-popover@1.0.0-next.6...@hackr/chakra-ui-popover@1.0.0-next.7) (2020-07-26)

### Features

- add popover transition and merge props util
  ([112ff7b](https://github.com/chakra-ui/chakra-ui/commit/112ff7b53d7618f9a1442efa2fb427491a5fc51c))
- **popover:** add prop to defer rendering till popover is open
  ([aac438c](https://github.com/chakra-ui/chakra-ui/commit/aac438cf21e5cd0a160048d8ae0c1a26b99fd1f4))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.6](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-popover@1.0.0-next.5...@hackr/chakra-ui-popover@1.0.0-next.6) (2020-07-15)

**Note:** Version bump only for package @hackr/chakra-ui-popover

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.5](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-popover@1.0.0-next.4...@hackr/chakra-ui-popover@1.0.0-next.5) (2020-07-15)

### Bug Fixes

- popover blur and event target issue
  [#1124](https://github.com/chakra-ui/chakra-ui/issues/1124)
  ([56f10fb](https://github.com/chakra-ui/chakra-ui/commit/56f10fb75646a18d6f8a18c6f0e4ca830957812e))

### Features

- add popover transition
  ([73d8c4f](https://github.com/chakra-ui/chakra-ui/commit/73d8c4fc9c676c95232cd259f59cce7d38eff94b))
- add transition for modal
  ([dda931b](https://github.com/chakra-ui/chakra-ui/commit/dda931bea7444c3f83392eebf1c34dd571a0dbbc))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-next.4 (2020-07-01)

### Bug Fixes

- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- case sensitivity issues in packages
  ([b423cd8](https://github.com/chakra-ui/chakra-ui/commit/b423cd88f0ede7e37b9a9eaec63cacfc1e9e5221))
- case sensitivity issues in packages
  ([c70b653](https://github.com/chakra-ui/chakra-ui/commit/c70b653ab892e9290de6d6c55e7d1bd39f974456))
- focus management for popover
  ([c3259cc](https://github.com/chakra-ui/chakra-ui/commit/c3259ccac7ebf9102888506d510f3f52cf343906))
- popover prevent some focus return scenarios
  ([95457f8](https://github.com/chakra-ui/chakra-ui/commit/95457f8216dde577a2b72fc4d86ef2f058d46083))
- ts issue with sx prop
  ([d3b1340](https://github.com/chakra-ui/chakra-ui/commit/d3b1340cb255937927b4d4c56ce218141570b951))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-next.3 (2020-06-28)

### Bug Fixes

- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- case sensitivity issues in packages
  ([b423cd8](https://github.com/chakra-ui/chakra-ui/commit/b423cd88f0ede7e37b9a9eaec63cacfc1e9e5221))
- case sensitivity issues in packages
  ([c70b653](https://github.com/chakra-ui/chakra-ui/commit/c70b653ab892e9290de6d6c55e7d1bd39f974456))
- focus management for popover
  ([c3259cc](https://github.com/chakra-ui/chakra-ui/commit/c3259ccac7ebf9102888506d510f3f52cf343906))
- popover prevent some focus return scenarios
  ([95457f8](https://github.com/chakra-ui/chakra-ui/commit/95457f8216dde577a2b72fc4d86ef2f058d46083))
- ts issue with sx prop
  ([d3b1340](https://github.com/chakra-ui/chakra-ui/commit/d3b1340cb255937927b4d4c56ce218141570b951))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-next.2 (2020-06-21)

### Bug Fixes

- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- case sensitivity issues in packages
  ([b423cd8](https://github.com/chakra-ui/chakra-ui/commit/b423cd88f0ede7e37b9a9eaec63cacfc1e9e5221))
- case sensitivity issues in packages
  ([c70b653](https://github.com/chakra-ui/chakra-ui/commit/c70b653ab892e9290de6d6c55e7d1bd39f974456))
- focus management for popover
  ([c3259cc](https://github.com/chakra-ui/chakra-ui/commit/c3259ccac7ebf9102888506d510f3f52cf343906))
- popover prevent some focus return scenarios
  ([95457f8](https://github.com/chakra-ui/chakra-ui/commit/95457f8216dde577a2b72fc4d86ef2f058d46083))
