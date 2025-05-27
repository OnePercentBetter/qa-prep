Boundary Value Analysis (BVA):
This technique focuses on testing the boundaries of input ranges, as defects often occur at the edges. For each input range, test cases are created for:
- Minimum value minus 1 (just below the lower boundary)
- Minimum value (at the lower boundary)
- Minimum value plus 1 (just above the lower boundary)
- Maximum value minus 1 (just below the upper boundary)
- Maximum value (at the upper boundary)
- Maximum value plus 1 (just above the upper boundary)

This ensures that both valid and invalid boundary conditions are tested, according to the system’s requirements (inclusive or exclusive).


Equivalence Partitioning:
This is a black-box testing technique applicable at any test level. Input data is divided into partitions (equivalence classes) where test cases within the same class are expected to produce similar results.

For example, if a field accepts 6 to 10 characters:
1. Inputs with 0 to 5 characters → Not accepted (invalid partition)
2. Inputs with 6 to 10 characters → Accepted (valid partition)
3. Inputs with 11 or more characters → Not accepted (invalid partition)


Example:
- Range: [100000, 999999]
- Test values:
  - 99999 (min - 1; just below lower boundary)
  - 100000 (min; at lower boundary)
  - 100001 (min + 1; just above lower boundary)
  - 999998 (max - 1; just below upper boundary)
  - 999999 (max; at upper boundary)
  - 1000000 (max + 1; just above upper boundary)

Equivalence Partitions:
- [0, 99999]: Invalid
- [100000, 999999]: Valid
- [1000000, ∞): Invalid
