import * as vscode from "vscode";
import { HelthPanel } from "./helth-panel";
import { SidebarProvider } from "./SidebarProvider";

export function activate(context: vscode.ExtensionContext) {
    const sidebarProvider = new SidebarProvider(context.extensionUri);
    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(
            "helth-sidebar",
            sidebarProvider
        )
    );

    context.subscriptions.push(
        vscode.commands.registerCommand("helth.helloWorld", () => {})
    );

    context.subscriptions.push(
        vscode.commands.registerCommand(
            "helth.turnOnTwentyTwentyTwenty",
            () => {}
        )
    );

    context.subscriptions.push(
        vscode.commands.registerCommand(
            "helth.turnOffTwentyTwentyTwenty",
            () => {}
        )
    );

    context.subscriptions.push(
        vscode.commands.registerCommand(
            "helth.turnOnStandingReminder",
            () => {}
        )
    );

    context.subscriptions.push(
        vscode.commands.registerCommand(
            "helth.turnOffStandingReminder",
            () => {}
        )
    );

    context.subscriptions.push(
        vscode.commands.registerCommand("helth.refresh", () => {
            HelthPanel.kill();
            HelthPanel.createOrShow(context.extensionUri);
            setTimeout(() => {
                vscode.commands.executeCommand(
                    "workbench.action.webview.openDeveloperTools"
                );
            }, 1500);
        })
    );
}

export function deactivate() {}
