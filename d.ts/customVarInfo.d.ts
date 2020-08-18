
import { RValue, REnvironment, RFunction, RCall, RNULL, RList, RVector } from './RTypes';
import { StackTree } from './stackTree';

type MinimalVariable = StackTree.MinimalVariable;
    
type ChildVarFunction = (rValue: RValue) => MinimalVariable[];

type ValueOrFunction<T> = ((v: RValue) => T) | T;

interface VarInfo {
  // Human friendly name of the entry, informative purpose only
  name: string;
  // Function that determines if the entry is to be used for a given variable
  doesApply: ((v: RValue) => boolean);
  // The child variables (typically entries of a list etc.)
  childVars?: ValueOrFunction<MinimalVariable[]>;
  // Number of childVars
  nChildVars?: ValueOrFunction<number>;
  // Informative attributes. Meant to be added by the user. Names should be preceded by '__'
  customAttributes?: ValueOrFunction<MinimalVariable[]>;
  // Normal attributes. Can be overwritten internally to handle custom variable info (e.g. promises)
  internalAttributes?: ValueOrFunction<MinimalVariable[]>;
  // String representation of the variable. Must be a single atomic string!
  toString?: ValueOrFunction<string>;
  // Type of the variable shown in the debugger
  type?: ValueOrFunction<string>;
  // Expression that can be evaluated to get the variable value. Used to copy variable as expression
  evaluateName?: ValueOrFunction<string>;
}

