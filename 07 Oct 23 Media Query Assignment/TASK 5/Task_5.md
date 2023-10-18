# SOLUTION TASK 5

Certainly! Below is a markdown formatted explanation of the difference between `justify-items` and `justify-self` with code examples:

---

## Problem Statement: `justify-items` vs `justify-self`

### `justify-items`

The `justify-items` property is used to align all the items within a container along the horizontal axis (in a row), regardless of their individual settings.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
}
```

In this example, all items within the `.container` will be horizontally centered.

### `justify-self`

The `justify-self` property is used to align a specific item within a grid container along the horizontal axis. This property is applied to individual grid items.

```css
.item {
  justify-self: end;
}
```

In this example, the `.item` class aligns itself to the end of its grid cell.

---

## Solution: `.md` Format

```markdown
### `justify-items`

The `justify-items` property is used to align all the items within a container along the horizontal axis (in a row), regardless of their individual settings.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
}
```

In this example, all items within the `.container` will be horizontally centered.

### `justify-self`

The `justify-self` property is used to align a specific item within a grid container along the horizontal axis. This property is applied to individual grid items.

```css
.item {
  justify-self: end;
}
```

In this example, the `.item` class aligns itself to the end of its grid cell.
```

