# Copilot Instructions for Ejercicios Metodologías

## Project Overview
This is a TypeScript educational project with four programming exercises. Each exercise is an isolated coding challenge with auto-validation.

**Key Structure:**
- `/src/ejercicioN/` - Student solution files (modify these)
- `/src/no_modificar/` - Immutable test files and validation scripts (DO NOT MODIFY)
- Each exercise has a `readme` file with problem statement and requirements

## Architecture & Data Flow

### Exercise Pattern
Each exercise follows a consistent structure:
1. **Problem Definition** - `/src/ejercicioN/readme` contains the English problem statement, requirements, and hints
2. **Student Implementation** - `/src/ejercicioN/index.ts` exports a single function to implement
3. **Test Data & Validation** - `/src/no_modificar/ejercicioN.ts` imports the student function, runs test cases, and logs pass/fail results

### Typical Exercise Flow
```typescript
// Student file: src/ejercicio1/index.ts
export function productoExceptoActual(nums: number[]): number[] {
    // Student writes implementation here
}

// Test file: src/no_modificar/ejercicio1.ts (read-only)
import { productoExceptoActual } from "../ejercicio1/index";
const listasDePrueba = [[1,2,3,4], ...];
const resultadosEsperados = [[24,12,8,6], ...];
// Runs automated validation and prints ✅ CORRECTO or ❌ INCORRECTO
```

## Running & Validation

**Development Workflow:**
- Each exercise has an npm script: `npm run ejercicioN` (runs student code with ts-node)
- Each exercise has a validation script: `npm run validateN` (runs the test suite)
- Example: `npm run validate1` executes `/src/no_modificar/ejercicio1.ts` and displays test results

**Important:** Always use the validation script to check work, not running the student file directly.

## Project Conventions

### Naming & Imports
- **Function names are Spanish**: `productoExceptoActual`, `transformarCadena`, `sumaMaximaCincoNumeros`
- **Import test data from read-only folder**: `import { listasDePrueba } from "../no_modificar/ejercicio1"`
- File references use relative paths: `../` to go up one level

### Type Safety
- **Strict TypeScript enabled** - All exercises use `"strict": true` in tsconfig.json
- Functions have explicit return types: `(nums: number[]): number[]`
- No implicit any types allowed
- Input validation is part of requirements (check readme files)

### Testing Approach
- **Array comparison utility** - Test files define `compararResultados()` for deep equality checks
- **Multiple test cases** - Each exercise has 3+ test cases covering normal, edge, and special conditions
- **Console-based validation** - Results printed with emojis (✅/❌) for quick visual feedback

## Exercise-Specific Patterns

### Ejercicio 1: `productoExceptoActual`
- **Problem:** Product of all elements except current position
- **Tests:** 3 cases with mixed positive/negative numbers and zeros
- **Pattern:** Return array same length as input with products
- **Note:** Division not allowed; use prefix/suffix multiplication optimization

### Ejercicio 2: `transformarCadena`
- **Problem:** Transform string by character type (vowels→"(", consonants→")", m/n→"*")
- **Tests:** 5 cases including mixed case and spaces
- **Pattern:** Input string → output symbol string (same length)

### Ejercicio 3: `sumaMaximaCincoNumeros`
- **Problem:** Sum of the 5 largest numbers from 15-element array
- **Tests:** 3 cases with mixed positive/negative numbers
- **Pattern:** Number array → single number (sum)

### Ejercicio 4: [Check readme in exercise directory]
- Follow same validation pattern as others

## Development Tips

1. **Always check the readme** - Problem statements, constraints, and hints are critical
2. **Run validation, not the solution file** - Use `npm run validateN` to see test results
3. **Type-safe implementations** - Leverage TypeScript strict mode; type mismatches fail compilation
4. **Test coverage** - Multiple cases provided; ensure all pass before finishing
5. **No external dependencies** - Only Node.js and TypeScript; no utility libraries needed
