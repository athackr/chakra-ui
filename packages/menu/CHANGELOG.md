# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.10 (2020-11-10)

### Bug Fixes

- **menu:** forward as on Menuitem
  ([b7d71c1](https://github.com/chakra-ui/chakra-ui/commit/b7d71c1011243de34d899d6bb7f7d51d00532e2a))
- focus and positioning issue with popper related component
  ([9b6682e](https://github.com/chakra-ui/chakra-ui/commit/9b6682eb18b1a5ae60d4245353c143dccc89aa1a))
- focus and positioning issue with popper related component
  ([0dbd3d1](https://github.com/chakra-ui/chakra-ui/commit/0dbd3d1c90078197d1dd8fde8fc5960d65e2c591))
- **menu:** assign type to StyledMenuItem
  ([dc98d09](https://github.com/chakra-ui/chakra-ui/commit/dc98d09be257b9c892e3b8362462cf621b555c7b))
- **menu:** element type a11y & test
  ([3199b80](https://github.com/chakra-ui/chakra-ui/commit/3199b80e010c2549e6b2ae435cc6b669625af68f))
- **menu:** give MenuList props style precedence
  ([16fb89d](https://github.com/chakra-ui/chakra-ui/commit/16fb89d80216e11736a1b271790264b0277c65e5))
- **menu:** update props missing while destructuring
  ([27faf47](https://github.com/chakra-ui/chakra-ui/commit/27faf47511acf01c108b0528cec2d26a890d82f6))
- **typescript:** synthetic default export compat
  ([e661a71](https://github.com/chakra-ui/chakra-ui/commit/e661a71884b6ee0ad5ac85b38e042f5ee7e8f705)),
  closes [#1735](https://github.com/chakra-ui/chakra-ui/issues/1735)
- **utils:** fix invalid import
  ([28fb226](https://github.com/chakra-ui/chakra-ui/commit/28fb226b0b5264c6ad4d6d2bb7664be6a696303e))
- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- case sensitivity issues in packages
  ([b423cd8](https://github.com/chakra-ui/chakra-ui/commit/b423cd88f0ede7e37b9a9eaec63cacfc1e9e5221))
- click issue with menu butotn
  ([a1c8aac](https://github.com/chakra-ui/chakra-ui/commit/a1c8aacf6992ded6fe85b5e9ce1b5b3ae1ffe1f1))
- don't call onClose in onInteractOutside if menu isn't opened
  ([dea9aab](https://github.com/chakra-ui/chakra-ui/commit/dea9aabe3296e01309b3e780b692745794b92f2f))
- fixed useDescendant to register/deregister items based on focused/disabled
  ([7c24658](https://github.com/chakra-ui/chakra-ui/commit/7c24658eae8f20b7d2ae81709ffa974b28398bec)),
  closes [#1751](https://github.com/chakra-ui/chakra-ui/issues/1751)
- issue where clicking submenu button closes menu due to mousedown
  ([fcf772a](https://github.com/chakra-ui/chakra-ui/commit/fcf772a0bef57eff421aa45bb46589d5b80dc3e5))
- issue where isChecked prop is passed to non-menuitemoption elements
  ([c871ef5](https://github.com/chakra-ui/chakra-ui/commit/c871ef571123fcff4e342ddf6043869cd36567ad))
- package json exports
  ([a10c0bc](https://github.com/chakra-ui/chakra-ui/commit/a10c0bcb809314a96d58c7febd9b2755e8997603))
- pointerEvents must be string
  ([8f35389](https://github.com/chakra-ui/chakra-ui/commit/8f35389a75c6d64555e04a37d49bf4af38a923d9))
- prevent issue where right click triggers active css state
  ([4ea9b88](https://github.com/chakra-ui/chakra-ui/commit/4ea9b8872599168f7a6ecb078b62f3473a25b4d8))
- some menu bugs
  ([5f9efe1](https://github.com/chakra-ui/chakra-ui/commit/5f9efe1566f067467573a418d2ec319c9e8a607f))
- space keydown on menu button
  ([68f10ab](https://github.com/chakra-ui/chakra-ui/commit/68f10abc585eb351c1cfea2d37b34110a8d89626))
- ts issue with sx prop
  ([d3b1340](https://github.com/chakra-ui/chakra-ui/commit/d3b1340cb255937927b4d4c56ce218141570b951))
- update menu and popover event and focus management
  ([f4c2e0d](https://github.com/chakra-ui/chakra-ui/commit/f4c2e0d5f41d946d4c5f7acda364be9569daebd2))
- **menu:** update MenuOption isChecked prop to boolean type
  ([045c3bb](https://github.com/chakra-ui/chakra-ui/commit/045c3bbc129605782b23b664e1a9df4237b55e50))
- **tests:** update snapshots & adapt to changes
  ([56e572a](https://github.com/chakra-ui/chakra-ui/commit/56e572accdad7a860a4e41e15600d08c3281e5bb))
- **variables:** drop unused imports
  ([552b2e9](https://github.com/chakra-ui/chakra-ui/commit/552b2e9b7510963db509a5724af5361ef07c8ecb))
- prevent scroll when menu returns focus
  ([b7f0d20](https://github.com/chakra-ui/chakra-ui/commit/b7f0d2012fc7a111f12d456a0e3a565868b76e25))

### Features

- **doc-gen:** improve type readability
  ([48181ad](https://github.com/chakra-ui/chakra-ui/commit/48181ad5b6fb7ac06c84def08e1c8bb5496f17f8))
- add force-update to menu internal state
  ([2c63b39](https://github.com/chakra-ui/chakra-ui/commit/2c63b39b90ad272daab5f7e1b938a46c7d97ff88))
- add menu transition
  ([60ef40e](https://github.com/chakra-ui/chakra-ui/commit/60ef40ea574674e622011a84990dd1dcb81dac4a))
- add submenu icon to nested menu
  ([55e2bb0](https://github.com/chakra-ui/chakra-ui/commit/55e2bb06d53f972e650ec65dbb063acf88485e5a))
- add use-props hook for better dx
  ([0854d64](https://github.com/chakra-ui/chakra-ui/commit/0854d64f32d7344184ace1163cc68fd982964261))

### Performance Improvements

- fix menu re-rendering and add perf monitoring hook
  ([d60e019](https://github.com/chakra-ui/chakra-ui/commit/d60e0197b9a59539170967984d464d00de095d5f))
- improve menu performance by skipping menuitem render
  ([cc58fa2](https://github.com/chakra-ui/chakra-ui/commit/cc58fa2030e38e30f860284891fead2a1cdcbf83))

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

**Note:** Version bump only for package @hackr/chakra-ui-menu

# 1.0.0-rc.6 (2020-10-25)

**Note:** Version bump only for package @hackr/chakra-ui-menu

# 1.0.0-rc.5 (2020-09-27)

**Note:** Version bump only for package @hackr/chakra-ui-menu

# 1.0.0-rc.4 (2020-09-25)

**Note:** Version bump only for package @hackr/chakra-ui-menu

# 1.0.0-rc.3 (2020-08-30)

**Note:** Version bump only for package @hackr/chakra-ui-menu

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.2 (2020-08-09)

**Note:** Version bump only for package @hackr/chakra-ui-menu

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-rc.1](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-menu@1.0.0-rc.0...@hackr/chakra-ui-menu@1.0.0-rc.1) (2020-08-06)

### Bug Fixes

- **variables:** drop unused imports
  ([552b2e9](https://github.com/chakra-ui/chakra-ui/commit/552b2e9b7510963db509a5724af5361ef07c8ecb))
- prevent scroll when menu returns focus
  ([b7f0d20](https://github.com/chakra-ui/chakra-ui/commit/b7f0d2012fc7a111f12d456a0e3a565868b76e25))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-rc.0](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-menu@1.0.0-next.7...@hackr/chakra-ui-menu@1.0.0-rc.0) (2020-07-26)

**Note:** Version bump only for package @hackr/chakra-ui-menu

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.7](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-menu@1.0.0-next.6...@hackr/chakra-ui-menu@1.0.0-next.7) (2020-07-26)

### Bug Fixes

- prevent issue where right click triggers active css state
  ([4ea9b88](https://github.com/chakra-ui/chakra-ui/commit/4ea9b8872599168f7a6ecb078b62f3473a25b4d8))
- **menu:** update MenuOption isChecked prop to boolean type
  ([045c3bb](https://github.com/chakra-ui/chakra-ui/commit/045c3bbc129605782b23b664e1a9df4237b55e50))
- click issue with menu butotn
  ([a1c8aac](https://github.com/chakra-ui/chakra-ui/commit/a1c8aacf6992ded6fe85b5e9ce1b5b3ae1ffe1f1))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.6](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-menu@1.0.0-next.5...@hackr/chakra-ui-menu@1.0.0-next.6) (2020-07-15)

**Note:** Version bump only for package @hackr/chakra-ui-menu

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.5](https://github.com/chakra-ui/chakra-ui/compare/@hackr/chakra-ui-menu@1.0.0-next.4...@hackr/chakra-ui-menu@1.0.0-next.5) (2020-07-15)

### Bug Fixes

- issue where clicking submenu button closes menu due to mousedown
  ([fcf772a](https://github.com/chakra-ui/chakra-ui/commit/fcf772a0bef57eff421aa45bb46589d5b80dc3e5))

### Performance Improvements

- improve menu performance by skipping menuitem render
  ([cc58fa2](https://github.com/chakra-ui/chakra-ui/commit/cc58fa2030e38e30f860284891fead2a1cdcbf83))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-next.4 (2020-07-01)

### Bug Fixes

- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- case sensitivity issues in packages
  ([b423cd8](https://github.com/chakra-ui/chakra-ui/commit/b423cd88f0ede7e37b9a9eaec63cacfc1e9e5221))
- pointerEvents must be string
  ([8f35389](https://github.com/chakra-ui/chakra-ui/commit/8f35389a75c6d64555e04a37d49bf4af38a923d9))
- some menu bugs
  ([5f9efe1](https://github.com/chakra-ui/chakra-ui/commit/5f9efe1566f067467573a418d2ec319c9e8a607f))
- space keydown on menu button
  ([68f10ab](https://github.com/chakra-ui/chakra-ui/commit/68f10abc585eb351c1cfea2d37b34110a8d89626))
- ts issue with sx prop
  ([d3b1340](https://github.com/chakra-ui/chakra-ui/commit/d3b1340cb255937927b4d4c56ce218141570b951))

### Features

- add submenu icon to nested menu
  ([55e2bb0](https://github.com/chakra-ui/chakra-ui/commit/55e2bb06d53f972e650ec65dbb063acf88485e5a))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-next.3 (2020-06-28)

### Bug Fixes

- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- case sensitivity issues in packages
  ([b423cd8](https://github.com/chakra-ui/chakra-ui/commit/b423cd88f0ede7e37b9a9eaec63cacfc1e9e5221))
- pointerEvents must be string
  ([8f35389](https://github.com/chakra-ui/chakra-ui/commit/8f35389a75c6d64555e04a37d49bf4af38a923d9))
- some menu bugs
  ([5f9efe1](https://github.com/chakra-ui/chakra-ui/commit/5f9efe1566f067467573a418d2ec319c9e8a607f))
- space keydown on menu button
  ([68f10ab](https://github.com/chakra-ui/chakra-ui/commit/68f10abc585eb351c1cfea2d37b34110a8d89626))
- ts issue with sx prop
  ([d3b1340](https://github.com/chakra-ui/chakra-ui/commit/d3b1340cb255937927b4d4c56ce218141570b951))

### Features

- add submenu icon to nested menu
  ([55e2bb0](https://github.com/chakra-ui/chakra-ui/commit/55e2bb06d53f972e650ec65dbb063acf88485e5a))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-next.2 (2020-06-21)

### Bug Fixes

- [#891](https://github.com/chakra-ui/chakra-ui/issues/891)
  ([e107acc](https://github.com/chakra-ui/chakra-ui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- case sensitivity issues in packages
  ([b423cd8](https://github.com/chakra-ui/chakra-ui/commit/b423cd88f0ede7e37b9a9eaec63cacfc1e9e5221))
- pointerEvents must be string
  ([8f35389](https://github.com/chakra-ui/chakra-ui/commit/8f35389a75c6d64555e04a37d49bf4af38a923d9))
- some menu bugs
  ([5f9efe1](https://github.com/chakra-ui/chakra-ui/commit/5f9efe1566f067467573a418d2ec319c9e8a607f))
- space keydown on menu button
  ([68f10ab](https://github.com/chakra-ui/chakra-ui/commit/68f10abc585eb351c1cfea2d37b34110a8d89626))

### Features

- add submenu icon to nested menu
  ([55e2bb0](https://github.com/chakra-ui/chakra-ui/commit/55e2bb06d53f972e650ec65dbb063acf88485e5a))
