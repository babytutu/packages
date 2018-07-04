# tui-vue-hooks

## commit-msg

### usage
> default commit-msg type is ["feat", "fix", "css"]

customize commit-msg type by setting configs in package.json
```json
  "tui-vue-hooks": {
    "commit-msg": ["feat", "fix", "bug", "css"]
  }
```

### install
> Automatically creat '.git/hooks/commit-msg' by postinstall

```bash
npm i tui-vue-hooks -D
```

### uninstall
> Automatically delete '.git/hooks/commit-msg' by postuninstall

```bash
npm uninstall tui-vue-hooks
```
