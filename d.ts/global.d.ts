

import { Breakpoints } from './breakpointManagement';
import { LazyTree } from './lazyTree';
import { RValue, REnvironment, RFunction, RCall, RNULL, RList, RVector } from './RTypes';

export declare module Session {
  interface Session {
    // settings:
    setBreakpointsInPackages: boolean;
    allowGlobalDebugging: boolean;
    breakOnErrorFromConsole: boolean;
    breakOnErrorFromFile: boolean;
    assignToAns: boolean;

    overwritePrint: boolean;
    overwriteCat: boolean;
    overwriteSource: boolean;

    rStrings: {
      delimiter0: string;
      delimiter1: string;
      prompt: string;
      continue: string;
      append: string;
    }

    threadId: number; //dummy, but must match the one used in the DAP host

    // server
    useServer: boolean;
    host?: string; // only if useServer==TRUE
    port?: number; // only if useServer==TRUE
    serverConnection?: RValue; // only if useServer==TRUE

    // debugSession:
    noDebug: boolean; // todo
    debugMode: ("function" | "file" | "workspace")
    workingDirectory: string;
    file: string;
    mainFunction: string;
    includePackageScopes: boolean;

    // state:
    isInitialized: boolean;
    isConfigurationDone: boolean;
    isEvaluating: boolean;
    isError: boolean;
    entryFrames: number[];
    launchFrames: number;
    ignoreNextCallback: boolean;

    // data:
    tree?: LazyTree.LazyTree;
    stackNode: LazyTree.NodeId;
    frameIds: {
      vsc: number[];
      R: number[];
      node: number[]
    }
    varRefs: {
      varRef: number[];
      node: number[];
    }
    varRef: number;
    breakpointId: number;
    fileBreakpoints: Breakpoints.FileBreakpoints[];
  }
}
