# React By Hitesh Chaudhary 
React is a Ui Library , You can also create your own.
~ React is a library which is responsible for UI changes, whenever state is changed the whole UI re renders
-----------------------------------
 const addValue = () => {
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
  }

  const subValue = () => {
    setCount(count - 1)
    setCount(count - 1)
    setCount(count - 1)
    setCount(count - 1)
  }

Updater Function Form: (count) => count + 1 ensures each state update uses the latest state, causing cumulative changes.

Direct State Usage: count - 1 does not accumulate updates within the same render cycle, so it only reflects a single change.