import * as _vscode from 'vscode';

/// <reference types="svelte" />

declare global {
    const tsvscode: {
        postMessage: ({ command: string }) => void;
    };
}
