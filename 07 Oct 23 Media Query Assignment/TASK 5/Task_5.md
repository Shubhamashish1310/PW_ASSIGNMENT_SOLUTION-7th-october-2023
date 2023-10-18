# SOLUTION TASK 5

Certainly! Here's the difference between `justify-items` and `justify-self` 

---

## Difference between `justify-items` and `justify-self`

### `justify-items`

- `justify-items` is a property used in a grid container.
- It aligns all items along the horizontal axis within the grid cells.
- It applies to all items inside the container.
- Example:
  ```css
  .container {
    justify-items: center;
  }
  ```
  In this case, all items in the container will be horizontally centered within their respective grid cells.

### `justify-self`

- `justify-self` is a property used on individual grid items.
- It aligns a specific item along the horizontal axis within its grid cell.
- This property overrides the `justify-items` property for that specific item.
- Example:
  ```css
  .item {
    justify-self: end;
  }
  ```
  In this case, the item with the class `.item` will align itself to the end of its grid cell, regardless of the `justify-items` setting of the container.

---

