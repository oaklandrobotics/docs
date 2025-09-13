# Nav2 Notes

## Behavior Tree

### RecoveryNode

#### Behavior

- If the first child returns success, recovery node returns success.
- If the first child returns failure, the 2nd child will be executed.
- If the second child succeeds, the first node will be executed **again.**

#### Parameters

- `num_retries`: Number of retries.
  - Type: `int`
  - Default: 1
